// noinspection JSDeprecatedSymbols

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

var seed
var log = []

let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) => MOD("ae2", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let CR = (id, x) => MOD("create", id, x)
let TC = (id, x) => MOD("tconstruct", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)
let AC = (id, x) => MOD("aquaculture", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x)
let SP = (id, x) => MOD("supplementaries", id, x)
let MW = (id, x) => MOD("mw_core", id, x)
let FA = (id, x) => MOD("forbidden_arcanus", id, x)
let RS = (id, x) => MOD("refinedstorage", id, x)
let IE = (id, x) => MOD("immersiveengineering", id, x)
let QA = (id, x) => MOD("quark", id, x)
let F = (id, x) => MOD("forge", id, x)
let EG = (id, x) => MOD("extendedgears", id, x)

let colours = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
let native_metals = ['iron', 'zinc', 'lead', 'copper', 'nickel', 'gold', 'silver', 'aluminum', 'uranium', 'cobalt', 'tin']
let wood_types = [MC('oak'), MC('spruce'), MC('birch'), MC('jungle'), MC('acacia'), MC('dark_oak'), MC('crimson'), MC('warped'), FA('edelwood'), FA('cherry'), FA('mysterywood'), QA('blossom'), QA('azalea'), TC('skyroot'), TC('greenheart')]
let tool_types = ['pickaxe', 'axe', 'shovel', 'hoe', 'sword']
let donutCraft = (event, output, center, ring) => {
	event.shaped(output, [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: center,
		S: ring
	})
}
let cobaltMachine = (event, output, middle, topMiddle, middleSide, lowerSheet) => {
	event.shaped(output, [
		'B1B',
		'232',
		'SMS'
	], {
		3: middle,
		2: middleSide,
		1: topMiddle,
		S: lowerSheet,
		B: 'mw_core:sturdy_brass_sheet',
		M: 'mw_core:cobalt_mechanism'
	})
}
function ifiniDeploying(output, input, tool) {
	return {
		"type": "create:deploying",
		"ingredients": [
			Ingredient.of(input).toJson(),
			Ingredient.of(tool).toJson()
		],
		"results": [
			Item.of(output).toResultJson()
		],
		"keepHeldItem": true
	}
}
function mixingTwoInputs(input1, input2, output) {
    return {
        "type": "create:mixing",
          "ingredients": [
            Ingredient.of(input1).toJson(),
            Ingredient.of(input2).toJson(),
          ],
          "results": [
            Item.of(output).toResultJson()
          ]
    }
}
function multiSmelt(event, output, input) {
    event.smelting(output, input)
    event.blasting(output, input)
}
//function tinkerMelting(input1, output) {
//    return {
//        "type": "tconstruct:melting",
//        "ingredient": [
//            Ingredient.of(input1).toJson(),
//    ],
//        "result": [
//            Fluid.of(output).toResultJson()
//    ],
//        "temperature": [],
//        "time": 79
//    }
//}
onEvent('recipes', event => {
	log.push('Registering Recipes')
	basicMechanism(event)
	unwantedRecipes(event)
	tweaks(event)
	cobaltMechanism(event)
    summoningRituals(event)
    customMachines(event)
	log.push('Recipes Updated')

	})
	onEvent('item.tags', event => {
		event.get("tconstruct:anvil_metal")
		.remove("#forge:storage_blocks/nethersteel")
		event.get('randomium:blacklist')
		.add(/.*creative.*/)
		.add(/.*insulation.*/)
		.add(/ftblibrary.*/)
		.add(/ftbquests.*/)
		.add(/mw_core:.*_bucket/)
		.add(/mw_core:.*_mechanism/)
		.add(/mw_core:.*_charm/)
		.add(/tconstruct:.*_bucket/)
		.add(/mw_core:music_disc.*/)
		.add(/create:precision_mechanism/)
		.add(/quark:diamond_heart/)
        event.get('forge:dusts/processed/tin')
        .add(TE('tin_dust'))
        event.get('forge:dusts/tin')
            .remove(TE('tin_dust'))
            .add(KJ('tin_ore_dust'))
    event.get('create:upright_on_belt')
		.add(/mw_core:.*_plush/)
		.add(/mw_core:sweet_berry_juice/)
	event.get('forge:tools/axes')
	    .add(/mw_core:.*_axe/)
	event.get('forge:tools/pickaxes')
    	.add(/mw_core:.*_pickaxe/)
    event.get('forge:tools/shovels')
    	.add(/mw_core:.*_shovel/)
    event.get('forge:tools/hoes')
	    .add(/mw_core:.*_hoe/)
	event.get('forge:swords')
    	.add(/mw_core:.*_sword/)
    event.get('forge:tools')
        .add(/mw_core:.*_sword/)
    	.add(/mw_core:.*_hoe/)
    	.add(/mw_core:.*_shovel/)
    	.add(/mw_core:.*_pickaxe/)
	    .add(/mw_core:.*_axe/)
        event.get('thermal:crafting/casts')
            .add(TC('ingot_cast'))
	event.get('mw_core:jei_hidden')
	.add(/thermal:press.*_die/)

	})
onEvent('fluid.tags', event => {
    event.get(F("#creosote"))
        .remove(IE('creosote'))
})
	onEvent('block.tags', event => {
		event.get("tconstruct:anvil_metal")
		.remove("#forge:storage_blocks/nethersteel")
	})

function unwantedRecipes(event) {
    event.remove({type: IE('alloy')})
    event.remove({type: IE('arc_furnace')})
    event.remove({type: IE('blast_furnace_fuel')})
    event.remove({type: IE('blast_furnace')})
    event.remove({type: IE('bottling_machine')})
    event.remove({type: IE('coke_oven')})
    event.remove({type: IE('fermenter')})
    event.remove({type: IE('metal_press')})
    event.remove({type: IE('mixer')})
    event.remove({type: IE('refinery')})
    event.remove({type: IE('sawmill')})
    event.remove({type: IE('squeezer')})

    event.remove({id: 'immersiveengineering:crafting/survey_tools'})
    event.remove({id: /immersiveengineering:crafting.conveyor_.*/})
    event.remove({id: /immersiveengineering:.*blastbrick.*/})
    event.remove({id: /immersiveengineering:.*alloybrick.*/})
    event.remove({id: /immersiveengineering:.*cokebrick.*/})
    event.remove({id: IE('crafting/fluid_pump')})
    event.remove({id: IE('crafting/fluid_pipe')})

    event.remove({id: /thermal:compat.create.centrifuge_.*/})
    event.remove({id: /thermal:compat.create_ie.centrifuge_.*/})
    event.remove({id: /immersiveengineering:crafting.*hammercrushing_.*/})
    event.remove({id: /immersiveengineering:crafting.*hammering.*/})
    native_metals.forEach(e => {
		event.remove({ type: MC("smelting"), input: F("#dusts/" + e) })
		event.remove({ type: MC("blasting"), input: F("#dusts/" + e) })
        event.replaceInput({type: 'create:mixing'}, F("#dusts/" + e), F("#dusts/processed/" + e))
        event.replaceOutput({type: 'thermal:smelter'}, F("#dusts/" + e), F("#dusts/processed/" + e))

        //event.replaceInput({type: 'minecraft:crafting_shapeless', not: {mod: 'create'}}, '#minecraft:planks', 'minecraft:gold_nugget')

    })
    event.replaceInput({type: 'thermal:chiller'}, TE('chiller_ingot_cast'), TC('ingot_cast'))
    event.replaceInput({type: 'thermal:chiller'}, TE('chiller_rod_cast'), TC('rod_cast'))
    event.replaceInput({}, IE('hammer'), TE('wrench'))

    event.replaceOutput({}, 'ae2:ender_dust', TE('ender_pearl_dust'))
}
function tweaks(event){

    event.recipes.tconstruct.casting_table(TE('diamond_gear'), TC('molten_diamond', 400)).singleUseCast('gear').coolingTime(80) // defaults to 60
    event.recipes.tconstruct.casting_table(TE('diamond_gear'), TC('molten_diamond', 400)).multiUseCast('gear').coolingTime(80) // defaults to 60
    let grow = (from, via, to) => {
        event.recipes.createSequencedAssembly([to], from, [
            event.recipes.createFilling(via, [via, Fluid.of(MC("water"), 500)]),
        ]).transitionalItem(via)
            .loops(4)
            .id('kubejs:grow_' + to.split(':')[1])
    }
    let seqAss3 = (from, via, dep1, dep2, dep3, to) => {
        event.recipes.createSequencedAssembly([to], from, [
            event.recipes.createDeploying(via, [via, dep1]),
            event.recipes.createDeploying(via, [via, dep2]),
            event.recipes.createDeploying(via, [via, dep3])
            ]).transitionalItem(via).loops(1).id('kubejs:assembly_' + to.split(':')[1])
    }

    seqAss3(IE('hemp_fabric'), IE('hemp_fabric'), MC('writable_book'), MC('glass_bottle'), IE('screwdriver'), IE('survey_tools'))

    grow(AE2("certus_crystal_seed"), KJ('growing_certus_seed'), KJ('tiny_certus_crystal'))
    grow(AE2("fluix_crystal_seed"), KJ('growing_fluix_seed'), KJ('tiny_fluix_crystal'))

    grow(KJ("tiny_certus_crystal"), KJ('growing_tiny_certus_crystal'), KJ('small_certus_crystal'))
    grow(KJ("tiny_fluix_crystal"), KJ('growing_tiny_fluix_crystal'), KJ('small_fluix_crystal'))

    grow(KJ("small_certus_crystal"), KJ('growing_small_certus_crystal'), AE2('certus_quartz_crystal'))
    grow(KJ("small_fluix_crystal"), KJ('growing_small_fluix_crystal'), AE2('fluix_crystal'))



    event.shapeless(MW('basic_mechanism'), [F('#cogwheels'), CR('andesite_alloy'), F('#ingots/iron'), MC('#planks')])
    event.shaped('thermal:rf_coil', [
        'R',
        'G',
        'R'
    ], {
        R: '#forge:dusts/redstone',
        G: '#forge:ingots/gold'
    })
    event.shaped('thermal:rf_coil', [
        'R  ',
        ' G ',
        '  R'
    ], {
        R: '#forge:dusts/redstone',
        G: '#forge:ingots/gold'
    })
    event.replaceOutput({id: 'mw_core:refinery/tin_refining'}, 'tconstruct:molten_iron', 'tconstruct:molten_lead')
    event.recipes.createCrushing([
        '3x thermal:tin_nugget',
        Item.of('thermal:apatite').withChance(0.5)
    ], 'quark:jasper')
    event.custom({
        "type": "thermal:rock_gen",
        "adjacent": "minecraft:dripstone_block",
        "result": {
            "item": "quark:jasper"
        }
    })
    event.custom({
        "type": "create:compacting",
        "ingredients": [
        {
            "item": MC('melon_slice')
        }
    ],
        "results": [
        {
            "fluid": IE('ethanol'),
            "amount": 50
        }
    ]
    })
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": TE('niter_dust')
            },
            {
                "fluid": 'createaddition:seed_oil',
                "amount": 8
            },
            {
                "fluid": IE('ethanol'),
                "amount": 8
            }
        ],
        "results": [
            {
                "fluid": IE('biodiesel'),
                "amount": 16
            }
        ]
    })
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": TE('creosote'),
                "amount": 8
            },
            {
                "fluid": IE('acetaldehyde'),
                "amount": 12
            }
        ],
        "results": [
            {
                "fluid": IE('phenolic_resin'),
                "amount": 8
            }
        ]
    })
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": MW('silver_sheet')
            },
            {
                "fluid": IE('ethanol'),
                "amount": 8
            }
        ],
        "results": [
            {
                "fluid": IE('acetaldehyde'),
                "amount": 8
            }
        ]
    })
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": F('#gravel')
            },
            {
                "tag": F('#sand'),
                "count": 2
            },
            {
                "item": MC('clay_ball')
            },
            {
                "fluid": MC('water'),
                "amount": 500
            }
        ],
        "results": [
            {
                "fluid": IE('concrete'),
                "amount": 500
            }
        ]
    })
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "item": "minecraft:cobblestone"
    },
    {
      "fluid": "tconstruct:molten_quartz",
      "amount": 50
    }
  ],
  "results": [
    {
      "item": "minecraft:andesite",
      "count": 1
    }
  ]
})

    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "minecraft:andesite"
            },
            {
                "fluid": "tconstruct:molten_quartz",
                "amount": 50
            }
        ],
        "results": [
            {
                "item": "minecraft:diorite",
                "count": 1
            }
        ]
    })
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "minecraft:diorite"
            },
            {
                "fluid": "tconstruct:molten_quartz",
                "amount": 50
            }
        ],
        "results": [
            {
                "item": "minecraft:granite",
                "count": 1
            }
        ]
    })
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "fluid": "tconstruct:blood",
      "amount": 50
    },
    {
      "fluid": "tconstruct:ender_slime",
      "amount": 50
    }
  ],
  "results": [
    {
      "fluid": "tconstruct:molten_ender",
      "amount": 50
    }
  ]
})
  event.custom({
  "type": "create:milling",
  "ingredients": [
    {
      "item": "minecraft:gravel"
    }
  ],
  "results": [
    {
      "item": "minecraft:sand",
      "count": 1
    },
    {
      "item": "mw_core:rock_lump",
      "count": 3,
      "chance": 0.5
    }
  ],
  "processingTime": 70
  })
  event.remove({ id: "mw_core:crushing/rock" })
    event.remove({ id: "createaddition:mixing/netherrack" })
    event.remove({ id: "mw_core:crystallizer/certus_quartz" })
    event.remove({ id: "mw_core:crystallizer/fluix" })


    donutCraft(event, '8x thermal:oil_sand', MW('ichor_crystal_dust'), MC('sand'))
    event.recipes.createMixing('8x thermal:oil_sand', [
        MW('ichor_crystal_dust'),
        MC('sand'),
        MC('sand'),
        MC('sand'),
        MC('sand'),
        MC('sand'),
        MC('sand'),
        MC('sand'),
        MC('sand')
    ])
    donutCraft(event, '8x thermal:oil_red_sand', MW('ichor_crystal_dust'), MC('red_sand'))
    event.recipes.createMixing('8x thermal:oil_red_sand', [
        MW('ichor_crystal_dust'),
        MC('red_sand'),
        MC('red_sand'),
        MC('red_sand'),
        MC('red_sand'),
        MC('red_sand'),
        MC('red_sand'),
        MC('red_sand'),
        MC('red_sand')
    ])
    donutCraft(event, '8x forbidden_arcanus:rune', FA('mundabitur_dust'), CR('rose_quartz'))
    event.recipes.createMixing('8x forbidden_arcanus:rune', [
    FA('mundabitur_dust'),
    CR('rose_quartz'),
    CR('rose_quartz'),
    CR('rose_quartz'),
    CR('rose_quartz'),
    CR('rose_quartz'),
    CR('rose_quartz'),
    CR('rose_quartz'),
    CR('rose_quartz')
  ])
    donutCraft(event, '8x minecraft:phantom_membrane', MW('skyslime_crystal_dust'), MC('rotten_flesh'))
    event.recipes.createMixing('8x minecraft:phantom_membrane', [
      MW('skyslime_crystal_dust'),
      MC('rotten_flesh'),
      MC('rotten_flesh'),
      MC('rotten_flesh'),
      MC('rotten_flesh'),
      MC('rotten_flesh'),
      MC('rotten_flesh'),
      MC('rotten_flesh'),
      MC('rotten_flesh')
    ])
    event.replaceInput({ type: "minecraft:crafting"}, F('#gears/iron'), EG('iron_cogwheel'))
    event.replaceInput(F('#gears/iron'), EG('iron_cogwheel'))
    event.replaceInput(F('#gears/copper'), EG('copper_cogwheel'))
    event.remove({ id: "mw_core:mixing/blends/bronze" })
    event.recipes.createMixing('4x thermal:bronze_dust', [
        TE('copper_dust'),
        TE('copper_dust'),
        TE('copper_dust'),
        TE('tin_dust')
    ])
    native_metals.forEach(e => {
        multiSmelt(event, F("#dusts/processed/" + e), F("#dusts/" + e))
        event.recipes.thermal.pulverizer(F('#dusts/processed/' + e), F('#ingots/' + e))

    })
    tool_types.forEach(t => {
        event.smithing(
            FA('reinforced_arcane_golden_' + t),  // arg 1: output
            FA('arcane_golden_' + t), // arg 2: the item to be upgraded
            FA('stellarite_piece')   // arg 3: the upgrade item
        )
    })
}

function basicMechanism(event) {

}

function cobaltMechanism(event){
	event.remove({ id: "thermal:machine_crystallizer" })
	cobaltMachine(event, TE("machine_crystallizer"), CR("fluid_tank"), CR("rose_quartz_lamp"), TE("signalum_gear"), MW("sturdy_copper_sheet"))
		event.remove({ id: TE("machine_furnace") })
		event.remove({ id: TE("press_coin_die") })
		event.remove({ id: TE("press_gear_die") })
		event.remove({ id: TE("press_packing_2x2_die") })
		event.remove({ id: TE("press_packing_3x3_die") })
		event.remove({ id: TE("press_unpacking_die") })

}

function summoningRituals(event){
    event.recipes.summoningrituals
        .altar(Ingredient.of("tconstruct:piglin_head"))
        .itemOutput('3x minecraft:blackstone')
        .itemOutput('6x minecraft:emerald_block')
        .mobOutput('villager')
        .input('5x minecraft:emerald')
        .input('10x amethyst_shard')
        .input(Ingredient.of('10x #minecraft:piglin_loved'))
        .sacrifice('pig', 3)
        .sacrificeRegion(5, 5)
        .recipeTime(200)
        .blockBelow(FA('arcane_polished_darkstone_pillar'))
        .weather('rain');

}
function customMachines(event){
    native_metals.forEach(e => {
        event.recipes.custommachinery.custom_machine("custommachinery:aureal_furnace", 200)
            .requireItem(Item.of(F('#raw_materials/' + e)))
            .produceItem(Item.of(F('#ingots/' + e), 2))
            .requireEnergyPerTick(1)
        event.recipes.custommachinery.custom_machine("custommachinery:aureal_furnace", 150)
            .requireItem(Item.of(CR('#crushed_ores/' + e)))
            .produceItem(Item.of(F('#ingots/' + e), 1))
            .produceItem(Item.of(F('#nuggets/' + e), 3))
            .requireEnergyPerTick(1)
        event.recipes.custommachinery.custom_machine("custommachinery:aureal_furnace", 100)
            .requireItem(Item.of(F('#dusts/' + e)))
            .produceItem(Item.of(F('#nuggets/' + e), 6))
            .requireEnergyPerTick(1)
    })
    event.recipes.custommachinery.custom_machine("custommachinery:aureal_furnace", 100)
        .requireItem("forbidden_arcanus:arcane_crystal_dust", "fuel")
        .produceEnergyPerTick(1)
        .produceItem(Item.of("create:experience_nugget", "output3"))
}
