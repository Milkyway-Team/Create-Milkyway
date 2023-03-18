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
let AL = (id, x) => MOD("alloyed", id, x)



let colours = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
let native_metals = ['iron', 'zinc', 'lead', 'copper', 'nickel', 'gold', 'silver', 'aluminum', 'uranium', 'cobalt', 'tin']
let wood_types = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped']
let tool_types = ['pickaxe', 'axe', 'shovel', 'hoe', 'sword']
let nml_foods = ['porkchop', 'cod', 'salmon', 'chicken', 'rabbit', 'mutton', 'beef']

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
let itemApplication = (event, input, applicant, output) => {
    event.custom({
        "type": "create:item_application",
        "ingredients": [
                Ingredient.of(input).toJson(),
                Ingredient.of(applicant).toJson(),
        ],
        "results": [
            Item.of(output).toResultJson()
        ]
    }).id('milkyway:application_' + output.split(':')[1])
}
let pulverizer = (event, input, output, xp) => {
    event.custom({
        "type": "thermal:pulverizer",
        "ingredient": {
            "value": [
                    Ingredient.of(input).toJson()
            ]
        },
        "result": [
                Item.of(output).toJson()
        ],
        "experience": xp
    }).id('milkyway:pulverizing_' + input.split(':')[1])
}
let chiller = (event, fluid, cast, output, enrg) => {
    event.custom({
        "type": "thermal:chiller",
        "ingredients": [
                Fluid.of(fluid).toJson(),
                Ingredient.of(cast).toJson()
        ],
        "result": [
                Item.of(output).toJson()
        ],
        "energy": enrg,
    }).id('milkyway:chilling_' + fluid.split(':')[1])
}
let materialMelting = (event, input, output, fluidAmount, temp, time) => {
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": [
            Ingredient.of(input).toJson(),
        ],
        "result": {
            "fluid": output,
            "amount": fluidAmount
        },
        "temperature": temp,
        "time": time
    })
}
let foodCooking = (event, input, coal, output) => {
    event.custom({
        "type": "farmersdelight:cooking",
        "ingredients": [
                Ingredient.of(input).toJson(),
                Ingredient.of(coal).toJson()
        ],
        "result": [
            Item.of(output).toJson()
        ],
        "experience": 0.35,
        "cookingtime": 180
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
	tweaks(event)
	cobaltMechanism(event)
    summoningRituals(event)
    customMachines(event)
    trading(event)
    trickierWindmills(event)
    crushing(event)
	log.push('Recipes Updated')

	})

function trickierWindmills(event) {
    event.remove({ output: 'create:sail_frame' })
    event.remove({ output: 'create:white_sail' })
    event.shapeless('create:white_sail', ['create:sail_frame', IE('hemp_fabric')])
    event.shaped('2x create:sail_frame', [
        'SSS',
        'A A',
        'SSS'
    ], {
        A: 'create:andesite_alloy',
        S: '#forge:rods/wooden'
    })
    itemApplication(event, CR('sail_frame'), IE('hemp_fabric'), CR('white_sail'))

}
function tweaks(event){

    nml_foods.forEach(e => {
        foodCooking(event, ['minecraft:' + e], [MW('coal_dust')], [MC('cooked_' + e)])
    })

    //pulverizer(event, F('#ingots/copper'), F('#dusts/processed/copper'), 0.5)
    materialMelting(event, AE2('fluix_crystal'), MW('molten_fluix'), 100, 1450, 580)
    materialMelting(event, AE2('certus_quartz_crystal'), MW('molten_certus'), 100, 1450, 580)


    event.recipes.createEmptying([
        CR('cinder_flour'),
        Fluid.of('mw_core:chromatic_waste', 1000)
    ], MW('chromatic_dust'))


    event.stonecutting('8x refinedstorage:cable', 'milkyway:refined_machine')
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
    //event.recipes.thermal.chiller(AE2("printed_calculation_processor"), [Fluid.of("mw_core:molten_certus", 100), AE2("calculation_processor_press")]).energy(5000)
    //event.recipes.thermal.chiller(AE2("printed_logic_processor"), [Fluid.of("tconstruct:molten_gold", 90), AE2("logic_processor_press")]).energy(5000)
    //event.recipes.thermal.chiller(AE2("printed_engineering_processor"), [Fluid.of("tconstruct:molten_diamond", 100), AE2("engineering_processor_press")]).energy(5000)
    //event.recipes.thermal.chiller(MW("printed_upgrade_circuit"), [Fluid.of("mw_core:molten_magisteel", 100), MW("upgrade_processor_press")]).energy(5000)

    //chiller(event, [Fluid.of("mw_core:molten_certus", 100)], [AE2("calculation_processor_press")], [AE2("printed_calculation_processor")], 5000)
    //chiller(event, [Fluid.of("tconstruct:molten_gold", 90)], [AE2("logic_processor_press")], [AE2("printed_logic_processor")], 5000)
    //chiller(event, [Fluid.of("tconstruct:molten_diamond", 100)], [AE2("engineering_processor_press")], [AE2("printed_engineering_processor")], 5000)
    //chiller(event, [Fluid.of("mw_core:molten_magisteel", 100)], [MW("upgrade_processor_press")], [MW("printed_upgrade_circuit")], 5000)

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
            .id('milkyway:' + e + "_processor")
        let f = MW('printed_upgrade_circuit')
        event.recipes.createSequencedAssembly([
            MW('upgrade_processor'),
        ], AE2('printed_silicon'), [
            event.recipes.createDeploying(f, [f, MW('printed_upgrade_circuit')]),
            event.recipes.createFilling(f, [f, Fluid.of(TE("redstone"), 250)]),
            event.recipes.createPressing(f, f)
        ]).transitionalItem(f)
            .loops(1)
            .id('milkyway:upgrade_processor')
    })
    let grow = (from, via, to) => {
        event.recipes.createSequencedAssembly([to], from, [
            event.recipes.createFilling(via, [via, Fluid.of(MC("water"), 500)]),
        ]).transitionalItem(via)
            .loops(4)
            .id('milkyway:grow_' + to.split(':')[1])
    }
    let seqAss3 = (from, via, dep1, dep2, dep3, to) => {
        event.recipes.createSequencedAssembly([to], from, [
            event.recipes.createDeploying(via, [via, dep1]),
            event.recipes.createDeploying(via, [via, dep2]),
            event.recipes.createDeploying(via, [via, dep3])
            ]).transitionalItem(via).loops(1).id('milkyway:assembly_' + to.split(':')[1])
    }
    let unProcSheet = (fromId, metal) => {
        event.recipes.createSequencedAssembly([MW('unprocessed_' + metal + '_sheet')], fromId + ':' + metal + '_sheet', [
            event.recipes.createFilling(MW('unprocessed_' + metal + '_sheet'), [MW('unprocessed_' + metal + '_sheet'), Fluid.of(TE("creosote"), 500)]),
            event.recipes.createFilling(MW('unprocessed_' + metal + '_sheet'), [MW('unprocessed_' + metal + '_sheet'), Fluid.of(TC('molten_' + metal), 90)]),
            event.recipes.createFilling(MW('unprocessed_' + metal + '_sheet'), [MW('unprocessed_' + metal + '_sheet'), Fluid.of(MC("water"), 500)]),
            event.recipes.createPressing(MW('unprocessed_' + metal + '_sheet'), MW('unprocessed_' + metal + '_sheet')),
            ]).transitionalItem(MW('unprocessed_' + metal + '_sheet')).loops(1).id('milkyway:assembly_' + MW('unprocessed_' + metal + '_sheet').split(':')[1])
        event.recipes.createSequencedAssembly([MW('sturdy_' + metal + '_sheet')], MW('unprocessed_' + metal + '_sheet'), [
            event.recipes.createPressing(MW('unprocessed_' + metal + '_sheet'), MW('unprocessed_' + metal + '_sheet')),
        ]).transitionalItem(MW('unprocessed_' + metal + '_sheet')).loops(15).id('milkyway:assembly_' + MW('sturdy_' + metal + '_sheet').split(':')[1])
        event.recipes.createSequencedAssembly([MW('reprocessed_' + metal + '_sheet')], MW('sturdy_' + metal + '_sheet'), [
            event.recipes.createFilling(MW('reprocessed_' + metal + '_sheet'), [MW('reprocessed_' + metal + '_sheet'), Fluid.of(TE("crude_oil"), 500)]),
            event.recipes.createDeploying(MW('reprocessed_' + metal + '_sheet'), [MW('reprocessed_' + metal + '_sheet'), MW('sturdy_' + metal + '_sheet')]),
            event.recipes.createFilling(MW('reprocessed_' + metal + '_sheet'), [MW('reprocessed_' + metal + '_sheet'), Fluid.of(TC('molten_' + metal), 90)]),
            event.recipes.createFilling(MW('reprocessed_' + metal + '_sheet'), [MW('reprocessed_' + metal + '_sheet'), Fluid.of(MC("water"), 500)]),
        ]).transitionalItem(MW('reprocessed_' + metal + '_sheet')).loops(1).id('milkyway:assembly_' + MW('reprocessed_' + metal + '_sheet').split(':')[1])
        event.recipes.createSequencedAssembly([MW('reinforced_' + metal + '_sheet')], MW('reprocessed_' + metal + '_sheet'), [
            event.recipes.createPressing(MW('reprocessed_' + metal + '_sheet'), MW('reprocessed_' + metal + '_sheet')),
        ]).transitionalItem(MW('reprocessed_' + metal + '_sheet')).loops(15).id('milkyway:assembly_' + MW('reinforced_' + metal + '_sheet').split(':')[1])
    }
    unProcSheet('createaddition', 'zinc')


    seqAss3(IE('hemp_fabric'), IE('hemp_fabric'), MC('writable_book'), MC('glass_bottle'), IE('screwdriver'), IE('survey_tools'))
    seqAss3(CR('precision_mechanism'), CSA('incomplete_steam_engine'), CR('brass_sheet'), CR('andesite_alloy'), MC('compass'), CSA('steam_engine'))
    seqAss3(MW('basic_mechanism'), CSA('incomplete_heat_engine'), CR('andesite_alloy'), CR('copper_nugget'), CR('iron_sheet'), CSA('heat_engine'))
    seqAss3(MW('copper_mechanism'), CSA('incomplete_hydraulic_engine'), CR('copper_sheet'), MC('compass'), Item.of('minecraft:potion', '{Potion:"minecraft:water"}'), CSA('hydraulic_engine'))
    seqAss3(CR('precision_mechanism'), MW('incomplete_refined_mechanism'), RS('silicon'), 'createaddition:capacitor', MW('lead_sheet'), MW('refined_mechanism'))
    seqAss3(FD('canvas'), FD('canvas'), IE('hemp_fiber'), F('#shears'), IE('hemp_fiber'), IE('hemp_fabric'))

    grow(AE2("certus_crystal_seed"), AE2('growing_certus_seed'), AE2('tiny_certus_crystal'))
    grow(AE2("fluix_crystal_seed"), AE2('growing_fluix_seed'), AE2('tiny_fluix_crystal'))

    grow(AE2("tiny_certus_crystal"), AE2('growing_tiny_certus_crystal'), AE2('small_certus_crystal'))
    grow(AE2("tiny_fluix_crystal"), AE2('growing_tiny_fluix_crystal'), AE2('small_fluix_crystal'))

    grow(AE2("small_certus_crystal"), AE2('growing_small_certus_crystal'), AE2('certus_quartz_crystal'))
    grow(AE2("small_fluix_crystal"), AE2('growing_small_fluix_crystal'), AE2('fluix_crystal'))


    event.shaped('milkyway:refined_machine', [
        'LLL',
        'AMA',
        'ZZZ'
    ], {
        Z: MW('sturdy_zinc_sheet'),
        A: RS('advanced_processor'),
        M: MW('refined_mechanism'),
        L: MW('sturdy_lead_sheet')
    }).id('milkyway:refined_machine')
    event.shapeless(MW('basic_mechanism'), [F('#cogwheels'), CR('andesite_alloy'), F('#ingots/iron'), MC('#planks')])
    event.shaped('thermal:rf_coil', [
        'R',
        'G',
        'R'
    ], {
        R: '#forge:dusts/redstone',
        G: '#forge:ingots/gold'
    }).id('thermal:rf_coil_vertical')
    event.shaped('create:steam_engine', [
        ' B ',
        ' SC',
        'CEC'
    ], {
        C: 'create:copper_sheet',
        S: 'alloyed:steel_ingot',
        E: CSA('steam_engine'),
        B: 'create:brass_sheet'
    }).id('milkyway:steam_engine')

    event.replaceOutput({id: 'mw_core:refinery/tin_refining'}, 'tconstruct:molten_iron', 'tconstruct:molten_lead')
    event.recipes.createCrushing([
        '3x thermal:tin_nugget',
        Item.of('thermal:apatite').withChance(0.5)
    ], 'quark:jasper').id('milkyway:crushing/jasper')
    event.custom({
        "type": "thermal:rock_gen",
        "adjacent": "minecraft:dripstone_block",
        "result": {
            "item": "quark:jasper"
        }
    }).id('milkyway:rock_gen/jasper')
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
    }).id('milkyway:compacting/ethanol')

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
    }).id('milkyway:mixing/biodiesel')
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
    }).id('milkyway:mixing/phenolic_resin')
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
    }).id('milkyway:mixing/acetaldehyde')
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
    }).id('milkyway:mixing/ancient_debris')
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
}).id('milkyway:mixing/andesite')

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
    }).id('milkyway:mixing/diorite')
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
    }).id('milkyway:mixing/granite')
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "minecraft:granite"
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
    }).id('milkyway:mixing/andesite_from_granite')
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
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "minecraft:coal"
            }
        ],
        "results": [
            {
                "item": "mw_core:coal_dust",
                "count": 2
            },
            {
                "item": "mw_core:coal_dust",
                "count": 2,
                "chance": 0.5
            }
        ],
        "processingTime": 35
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
        pulverizer(event, F('#ingots/' + e), F('#dusts/processed/' + e), 0,5)
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
        }).id('milkyway:' + wt + '_drawer_1')
        event.shaped(SD(wt + '_full_drawers_2', 1), [
            'PSP',
            'SCS',
            'PSP'
        ], {
            P: MC(wt + '_planks'),
            S: SD(wt + '_full_drawers_1'),
            C: BD(wt + '_furniture_kit')
        }).id('milkyway:' + wt + '_drawer_2')
        event.shaped(SD(wt + '_full_drawers_4', 1), [
            'PSP',
            'SCS',
            'PSP'
        ], {
            P: MC(wt + '_planks'),
            S: SD(wt + '_full_drawers_2'),
            C: BD(wt + '_furniture_kit')
        }).id('milkyway:' + wt + '_drawer_3')
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
            "type": "create:mixing",
                "ingredients": [
                   Ingredient.of(ingredient).toJson(),
                   Ingredient.of(card_id).toJson(),
                ],
                "results": [
                   Item.of(output).toResultJson(),
                    Item.of(card_id).toResultJson(),
                ],
        })
    }

//+ ingredient + '_'
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

    global.specProfessions.forEach(element => {
        if (global.transactions[element])
            global.transactions[element].forEach(transaction => {
                trade(KJ('specialized_profession_card_' + element), transaction.in, transaction.out)
            })
    });
}
let slimes = ['sky', 'ender']

function crushing(event) {
    let sift4 = (mesh, ingredient, output1, chance1, output2, chance2, output3, chance3, output4, chance4) => {
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": `createsifter:${mesh}_mesh`
                },
                {
                    "item": ingredient
                }
            ],
            "processingTime": 500,
            "results": [
                {
                    "chance": chance1,
                    "item": output1
                },
                {
                    "chance": chance2,
                    "item": output2
                },
                {
                    "chance": chance3,
                    "item": output3
                },
                {
                    "chance": chance4,
                    "item": output4
                }
            ]
        }).id(`milkyway:sifting/${mesh}_mesh/` + ingredient.split(':')[1])
    }
    slimes.forEach(e => {
        sift4('zinc', `tconstruct:${e}_slime_dirt`, `tconstruct:${e}_slime_ball`, 0.5, `tconstruct:${e}_slime_crystal`, 0.25, `mw_core:${e}slime_crystal_dust`, 0.5, `tconstruct:budding_${e}_slime_crystal`, 0.01)
    })
    sift4('zinc', `tconstruct:ichor_slime_dirt`, `tconstruct:ichor_slime_ball`, 0.5, `tconstruct:ichor_slime_crystal`, 0.25, `mw_core:ichor_crystal_dust`, 0.5, `tconstruct:budding_ichor_slime_crystal`, 0.01)
    sift4('zinc', 'tconstruct:earth_slime_dirt', 'minecraft:slime_ball', 0.5, 'tconstruct:earth_slime_crystal', 0.25, 'mw_core:earthslime_crystal_dust', 0.5, 'tconstruct:budding_earth_slime_crystal', 0.01)
    //event.recipes.createCrushing([
    //    Item.of('thermal:apatite').withChance(0.5),
    //    Item.of('thermal:apatite').withChance(0.5)
    //], 'quark:jasper').id('milkyway:crushing/jasper')
    //event.recipes.createsifterSifting([Item.of('minecraft:slime_ball').withChance(0.5).toJson(),Item.of('tconstruct:earth_slime_crystal').withChance(0.25).toJson(),Item.of('mw_core:earthslime_crystal_dust').withChance(0.5).toJson(),Item.of('tconstruct:budding_earth_slime_crystal').withChance(0.01).toJson()], ['tconstruct:earth_slime_dirt','createsifter:zinc_mesh'])
}
