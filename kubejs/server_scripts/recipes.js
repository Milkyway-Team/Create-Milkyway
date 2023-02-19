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
let CSA = (id, x) => MOD("create_sa", id, x)
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
let RW = (id, x) => MOD("railways", id, x)
let BD = (id, x) => MOD("buildersdelight", id, x)

let colours = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
let native_metals = ['iron', 'zinc', 'lead', 'copper', 'nickel', 'gold', 'silver', 'aluminum', 'uranium', 'cobalt', 'tin']
let wood_types = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped']
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
    trading(event)
	log.push('Recipes Updated')

	})
	onEvent('item.tags', event => {
        colours.forEach(element => {
            event.get(F('glazed_terracotta')).add(MC(`${element}_glazed_terracotta`))
        });
        global.trades.forEach(element => {
            event.get('forge:trade_cards').add(`kubejs:trade_card_${element}`)
        });

        global.professions.forEach(element => {
            event.get('forge:profession_cards').add(`kubejs:profession_card_${element}`)
        });
        event.get('thermal:crafting/dies').add('#forge:trade_cards')
        event.get('thermal:crafting/dies').add('#forge:profession_cards')
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
        .add(/refinedstorage:.*storage_block.*/)
        .add(/immersiveengineering:.*blastbrick.*/)
        .add(/immersiveengineering:.*alloybrick.*/)
        .add(/immersiveengineering:.*cokebrick.*/)
        .add(IE('fluid_pump'))
        .add(IE('fluid_pipe'))
        .add(/refinedstorage:.*quartz_enriched_iron.*/)
        .add(/refinedstorage:.*portable.*/)
        .add(/refinedstorage:.*pattern.*/)
        .add(/refinedstorage:.*disk_manipulator.*/)
        .add(/refinedstorage:.*storage_housing.*/)
            .add(MW('#jei_hidden'))

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
        .add(RS('#disk_manipulator'))
        .add(RS('#detector'))
        .add(RS('#wireless_transmitter'))
        .add(/refinedstorage:.*storage_block/)
        .add(RS('storage_monitor'))
        .add(RS('storage_housing'))
        .add(RS('machine_casing'))
        .add(RS('wrench'))
        .add(RS('pattern'))
        .add(RS('filter'))
        .add(TE('device_water_gen'))
        .add(TE('device_fisher'))
        .add(TE('device_composter'))
        .add(TE('device_collector'))
        .add(TE('device_nullifier'))
        .add(TE('device_potion_diffuser'))
        .add(TE('machine_furnace'))
        .add(TE('machine_sawmill'))
        .add(TE('machine_centrifuge'))



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
    function removeRecID(recipeId) {
        event.remove({ id: recipeId });
    }
    function removeRecTyp(recipeType) {
        event.remove({ type: recipeType });
    }
    function removeRecOut(recipeOutput) {
        event.remove({ output: recipeOutput });
    }
    removeRecID(/refinedstorage:.*pattern.*/)
    removeRecID(/refinedstorage:.*quartz_enriched_iron.*/)
    removeRecID('immersiveengineering:crafting/survey_tools')
    removeRecID(/immersiveengineering:crafting.conveyor_.*/)
    removeRecID(/immersiveengineering:.*blastbrick.*/)
    removeRecID(/immersiveengineering:.*alloybrick.*/)
    removeRecID(/immersiveengineering:.*cokebrick.*/)
    removeRecID(IE('crafting/fluid_pump'))
    removeRecID(IE('crafting/fluid_pipe'))
    removeRecID(/createaddition:compat.tconstruct.*/)
    removeRecID(/thermal:compat.create.centrifuge_.*/)
    removeRecID(/thermal:compat.create_ie.centrifuge_.*/)
    removeRecID(/immersiveengineering:crafting.*hammercrushing_.*/)
    removeRecID(/immersiveengineering:crafting.*hammering.*/)
    removeRecID(/refinedstorage:.*storage_block.*/)
    removeRecID(/refinedstorage:.*storage_part.*/)
    removeRecID(/railways:sequenced_assembly.*_conductor_cap/)
    removeRecID(/storagedrawers:.*_drawers_.*/)
    removeRecID(/thermal:compat.*.press_.*/)
    removeRecID(/mw_core:multiservo_press.*/)
    removeRecID(/refinedstorage:.*disk_manipulator.*/)
    removeRecID(RS('storage_housing'))
    removeRecID(RS('machine_casing'))
    removeRecID(RS('wrench'))
    removeRecID(RS('storage_monitor'))
    removeRecID(/refinedstorage:.*detector/)
    removeRecID(/refinedstorage:.*wireless_transmitter/)
    removeRecID(RS('filter'))





    removeRecTyp(IE('alloy'))
    removeRecTyp(IE('arc_furnace'))
    removeRecTyp(IE('blast_furnace_fuel'))
    removeRecTyp(IE('blast_furnace'))
    removeRecTyp(IE('bottling_machine'))
    removeRecTyp(IE('coke_oven'))
    removeRecTyp(IE('fermenter'))
    removeRecTyp(IE('metal_press'))
    removeRecTyp(IE('mixer'))
    removeRecTyp(IE('refinery'))
    removeRecTyp(IE('sawmill'))
    removeRecTyp(IE('squeezer'))
    removeRecTyp(TE('centrifuge'))


    removeRecOut(RS('processor_binding'))
    removeRecOut(AE2('inscriber'))





    native_metals.forEach(e => {
		event.remove({ type: MC("smelting"), input: F("#dusts/" + e) })
		event.remove({ type: MC("blasting"), input: F("#dusts/" + e) })
        event.replaceInput({type: 'create:mixing'}, F("#dusts/" + e), F("#dusts/processed/" + e))
        event.replaceOutput({type: 'thermal:smelter'}, F("#dusts/" + e), F("#dusts/processed/" + e))
    })
    event.replaceInput({type: 'thermal:chiller'}, TE('chiller_ingot_cast'), TC('ingot_cast'))
    event.replaceInput({type: 'thermal:chiller'}, TE('chiller_rod_cast'), TC('rod_cast'))
    event.replaceInput({}, IE('hammer'), TE('wrench'))
    event.replaceInput({}, RS('quartz_enriched_iron'), MW('aluminium_ingot'))

    event.replaceOutput({}, 'ae2:ender_dust', TE('ender_pearl_dust'))
    event.replaceInput({id: /mw_core:milkyway.machines.cobalt.refinedstorage.*/}, MW('cobalt_mechanism'), KJ('refined_machine'))
    event.replaceInput({id: /mw_core:milkyway.machines.cobalt.refinedstorage.*/}, MW('reinforced_tin_sheet'), KJ('reinforced_zinc_sheet'))
    event.replaceInput({id: /mw_core:milkyway.machines.cobalt.refinedstorage.*/}, TE('invar_ingot'), KJ('reinforced_zinc_sheet'))
    event.remove({id: 'mw_core:milkyway/machines/cobalt/refinedstorage/cable'})
    event.replaceInput({id: /mw_core:milkyway.machines.cobalt.refinedstorage.interface/}, MW('reinforced_lead_sheet'), KJ('reinforced_zinc_sheet'))
    event.remove({ type: AE2('inscriber') })
}
function tweaks(event){
    event.stonecutting('8x refinedstorage:cable', KJ('refined_machine'))
    event.custom({
        "type": "createbigcannons:melting",
        "ingredients": [
            {
                "tag": "forge:gems/quartz"
            }
        ],
        "results": [
            {
                "fluid": "tconstruct:molten_quartz",
                "amount": 100
            }
        ],
        "processingTime": 160,
        "heatRequirement": "heated"
    })
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": { "item": AE2("calculation_processor_press") },
        "cast_consumed": false,
        "fluid": { "tag": "mw_core:molten_certus", "amount": 100 },
        "result": { "item": AE2("printed_calculation_processor") },
        "cooling_time": 150
    })

    event.custom({
        "type": "tconstruct:casting_table",
        "cast": { "item": AE2("logic_processor_press") },
        "cast_consumed": false,
        "fluid": { "tag": "tconstruct:molten_gold", "amount": 90 },
        "result": { "item": AE2("printed_logic_processor") },
        "cooling_time": 150
    })

    event.custom({
        "type": "tconstruct:casting_table",
        "cast": { "item": AE2("engineering_processor_press") },
        "cast_consumed": false,
        "fluid": { "tag": "tconstruct:molten_diamond", "amount": 100 },
        "result": { "item": AE2("printed_engineering_processor") },
        "cooling_time": 150
    })

    event.custom({
        "type": "tconstruct:casting_table",
        "cast": { "item": MW("upgrade_processor_press") },
        "cast_consumed": false,
        "fluid": { "tag": "mw_core:molten_magisteel", "amount": 90 },
        "result": { "item": MW("printed_upgrade_circuit") },
        "cooling_time": 150
    })
    event.recipes.thermal.chiller(AE2("printed_calculation_processor"), [Fluid.of("mw_core:molten_certus", 100), AE2("calculation_processor_press")]).energy(5000)
    event.recipes.thermal.chiller(AE2("printed_logic_processor"), [Fluid.of("tconstruct:molten_gold", 90), AE2("logic_processor_press")]).energy(5000)
    event.recipes.thermal.chiller(AE2("printed_engineering_processor"), [Fluid.of("tconstruct:molten_diamond", 100), AE2("engineering_processor_press")]).energy(5000)
    event.recipes.thermal.chiller(MW("printed_upgrade_circuit"), [Fluid.of("mw_core:molten_magisteel", 100), MW("upgrade_processor_press")]).energy(5000)

    event.custom(ifiniDeploying(AE2("printed_silicon"), AE2("silicon"), AE2("silicon_press")))

    let types = ["calculation", "logic", "engineering"]
    types.forEach(e => {
        let t = AE2('printed_' + e + '_processor')
        event.recipes.createSequencedAssembly([
            AE2(e + '_processor'),
        ], AE2('printed_silicon'), [
            event.recipes.createDeploying(t, [t, AE2('printed_' + e + "_processor")]),
            event.recipes.createFilling(t, [t, Fluid.of(TE("redstone"), 250)]),
            event.recipes.createPressing(t, t)
        ]).transitionalItem(t)
            .loops(1)
            .id('kubejs:' + e + "_processor")
        let f = MW('printed_upgrade_circuit')
        event.recipes.createSequencedAssembly([
            MW('upgrade_processor'),
        ], AE2('printed_silicon'), [
            event.recipes.createDeploying(f, [f, MW('printed_upgrade_circuit')]),
            event.recipes.createFilling(f, [f, Fluid.of(TE("redstone"), 250)]),
            event.recipes.createPressing(f, f)
        ]).transitionalItem(f)
            .loops(1)
            .id('kubejs:upgrade_processor')
    })
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
    let unProcSheet = (fromId, metal) => {
        event.recipes.createSequencedAssembly([KJ('unprocessed_' + metal + '_sheet')], fromId + ':' + metal + '_sheet', [
            event.recipes.createFilling(KJ('unprocessed_' + metal + '_sheet'), [KJ('unprocessed_' + metal + '_sheet'), Fluid.of(TE("creosote"), 500)]),
            event.recipes.createFilling(KJ('unprocessed_' + metal + '_sheet'), [KJ('unprocessed_' + metal + '_sheet'), Fluid.of(TC('molten_' + metal), 90)]),
            event.recipes.createFilling(KJ('unprocessed_' + metal + '_sheet'), [KJ('unprocessed_' + metal + '_sheet'), Fluid.of(MC("water"), 500)]),
            ]).transitionalItem(KJ('unprocessed_' + metal + '_sheet')).loops(1).id('kubejs:assembly_' + KJ('unprocessed_' + metal + '_sheet').split(':')[1])
        event.recipes.createSequencedAssembly([KJ('sturdy_' + metal + '_sheet')], KJ('unprocessed_' + metal + '_sheet'), [
            event.recipes.createPressing(KJ('unprocessed_' + metal + '_sheet'), KJ('unprocessed_' + metal + '_sheet')),
        ]).transitionalItem(KJ('unprocessed_' + metal + '_sheet')).loops(15).id('kubejs:assembly_' + KJ('sturdy_' + metal + '_sheet').split(':')[1])
        event.recipes.createSequencedAssembly([KJ('reprocessed_' + metal + '_sheet')], KJ('sturdy_' + metal + '_sheet'), [
            event.recipes.createFilling(KJ('reprocessed_' + metal + '_sheet'), [KJ('reprocessed_' + metal + '_sheet'), Fluid.of(TE("crude_oil"), 500)]),
            event.recipes.createDeploying(KJ('reprocessed_' + metal + '_sheet'), [KJ('reprocessed_' + metal + '_sheet'), KJ('sturdy_' + metal + '_sheet')]),
            event.recipes.createFilling(KJ('reprocessed_' + metal + '_sheet'), [KJ('reprocessed_' + metal + '_sheet'), Fluid.of(TC('molten_' + metal), 90)]),
            event.recipes.createFilling(KJ('reprocessed_' + metal + '_sheet'), [KJ('reprocessed_' + metal + '_sheet'), Fluid.of(MC("water"), 500)]),
        ]).transitionalItem(KJ('reprocessed_' + metal + '_sheet')).loops(1).id('kubejs:assembly_' + KJ('reprocessed_' + metal + '_sheet').split(':')[1])
        event.recipes.createSequencedAssembly([KJ('reinforced_' + metal + '_sheet')], KJ('reprocessed_' + metal + '_sheet'), [
            event.recipes.createPressing(KJ('reprocessed_' + metal + '_sheet'), KJ('reprocessed_' + metal + '_sheet')),
        ]).transitionalItem(KJ('reprocessed_' + metal + '_sheet')).loops(15).id('kubejs:assembly_' + KJ('reinforced_' + metal + '_sheet').split(':')[1])
    }
    unProcSheet('createaddition', 'zinc')


    seqAss3(IE('hemp_fabric'), IE('hemp_fabric'), MC('writable_book'), MC('glass_bottle'), IE('screwdriver'), IE('survey_tools'))
    seqAss3(CR('precision_mechanism'), CSA('incomplete_steam_engine'), CR('brass_sheet'), CR('andesite_alloy'), MC('compass'), CSA('steam_engine'))
    seqAss3(MW('basic_mechanism'), CSA('incomplete_heat_engine'), CR('andesite_alloy'), CR('copper_nugget'), CR('iron_sheet'), CSA('heat_engine'))
    seqAss3(MW('copper_mechanism'), CSA('incomplete_hydraulic_engine'), CR('copper_sheet'), MC('compass'), Item.of('minecraft:potion', '{Potion:"minecraft:water"}'), CSA('hydraulic_engine'))
    seqAss3(CR('precision_mechanism'), KJ('incomplete_refined_mechanism'), RS('silicon'), 'createaddition:capacitor', MW('lead_sheet'), KJ('refined_mechanism'))

    grow(AE2("certus_crystal_seed"), KJ('growing_certus_seed'), KJ('tiny_certus_crystal'))
    grow(AE2("fluix_crystal_seed"), KJ('growing_fluix_seed'), KJ('tiny_fluix_crystal'))

    grow(KJ("tiny_certus_crystal"), KJ('growing_tiny_certus_crystal'), KJ('small_certus_crystal'))
    grow(KJ("tiny_fluix_crystal"), KJ('growing_tiny_fluix_crystal'), KJ('small_fluix_crystal'))

    grow(KJ("small_certus_crystal"), KJ('growing_small_certus_crystal'), AE2('certus_quartz_crystal'))
    grow(KJ("small_fluix_crystal"), KJ('growing_small_fluix_crystal'), AE2('fluix_crystal'))


    event.shaped(KJ('refined_machine'), [
        'LLL',
        'AMA',
        'ZZZ'
    ], {
        Z: KJ('sturdy_zinc_sheet'),
        A: RS('advanced_processor'),
        M: KJ('refined_mechanism'),
        L: MW('sturdy_lead_sheet')
    }).id('kubejs:refined_machine')
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
    event.shaped('create:steam_engine', [
        ' B ',
        ' SC',
        'CEC'
    ], {
        C: 'create:copper_sheet',
        S: 'alloyed:steel_ingot',
        E: CSA('steam_engine'),
        B: 'create:brass_sheet'
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
                "item": "minecraft:netherrack"
            },
            {
                "fluid": "mw_core:refined_magic",
                "amount": 50
            }
        ],
        "results": [
            {
                "item": "minecraft:ancient_debris",
                "count": 1
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
    event.remove({ id: "create:crafting/kinetics/steam_engine" })


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
    colours.forEach(c => {
        event.shaped(RW(c + '_conductor_cap', 1), [
            ' W ',
            'WMW',
            'SSS'
        ], {
            M: CR('precision_mechanism'),
            W: MC(c + '_wool'),
            S: MC('string')
        })
    })
    wood_types.forEach(wt =>{
        event.shaped(SD(wt + '_full_drawers_1', 1), [
            'PSP',
            'SCS',
            'PSP'
        ], {
            P: MC(wt + '_planks'),
            S: MC(wt + '_slab'),
            C: QA(wt + '_chest')
        })
        event.shaped(SD(wt + '_full_drawers_2', 1), [
            'PSP',
            'SCS',
            'PSP'
        ], {
            P: MC(wt + '_planks'),
            S: SD(wt + '_full_drawers_1'),
            C: BD(wt + '_furniture_kit')
        })
        event.shaped(SD(wt + '_full_drawers_4', 1), [
            'PSP',
            'SCS',
            'PSP'
        ], {
            P: MC(wt + '_planks'),
            S: SD(wt + '_full_drawers_2'),
            C: BD(wt + '_furniture_kit')
        })
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
function trading(event) {
    let trade = (card_id, ingredient, output) => {
        event.custom({
            type: 'thermal:press',
            ingredients: [
                Ingredient.of(ingredient).toJson(),
                Ingredient.of(card_id).toJson(),
            ],
            result: [
                Item.of(output).toResultJson()
            ],
            energy: 1000
        })
    }

    global.trades.forEach(element => {
        if (global.transactions[element])
            global.transactions[element].forEach(transaction => {
                trade(KJ('trade_card_' + element), transaction.in, transaction.out)
            })
    });

    global.professions.forEach(element => {
        if (global.transactions[element])
            global.transactions[element].forEach(transaction => {
                trade(KJ('profession_card_' + element), transaction.in, transaction.out)
            })
    });
}
