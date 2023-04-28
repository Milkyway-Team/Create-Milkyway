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
let apRods = ['monazite', 'heliodor', 'ekanite']

let donutCraft = (event, output, center, ring) => {
	event.shaped(output, [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: center,
		S: ring
	}).id('milkyway:processing/crafting/' + output.split(':')[1])
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
	}).id('milkyway:processing/crafting/' + output.split(':')[1])
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
    }).id('milkyway:processing/application/' + output.split(':')[1])
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
    }).id('milkyway:processing/pulverizing/' + input.split(':')[1])
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
    }).id('milkyway:processing/chilling/' + fluid.split(':')[1])
}
let refining = (event, inFluid, outFluid1, outFluid2, outItem) => {
    event.custom({
        "type": "thermal:refinery",
        "ingredient": {
        "fluid": inFluid,
            "amount": 270
    },
        "result": [
        {
            "fluid": outFluid1,
            "amount": 180,
            "chance": 0.25
        },
        {
            "fluid": outFluid2,
            "amount": 90,
            "chance": 0.5
        },
        {
            "item": outItem,
            "chance": 0.75
        }
    ],
        "energy": 4000
    }).id('milkyway:processing/refining/' + inFluid.split(':')[1])
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
    }).id('milkyway:processing/melting/' + input.split(':')[1] + fluidAmount)
}
let castForging = (event, cast, result) => {
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": cast
        },
        "cast_consumed": true,
        "fluid": {
            "name": 'tconstruct:molten_gold',
            "amount": 90
        },
        "result": { "item": result },
        "cooling_time": 40
    }).id('milkyway:processing/cast_casting/' + result.split(':')[1])
    
}
let castTagForging = (event, cast, result) => {
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "tag": cast
        },
        "cast_consumed": true,
        "fluid": {
            "name": 'tconstruct:molten_gold',
            "amount": 90
        },
        "result": { "item": result },
        "cooling_time": 40
    }).id('milkyway:processing/cast_casting/' + result.split(':')[1])
    
}
let materialCasting = (event, cast, fluid, amount, result, coolingTime, sandCasting) => {
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "tag": `tconstruct:casts/multi_use/${cast}`
        },
        "cast_consumed": false,
        "fluid": {
            "name": fluid,
            "amount": amount
        },
        "result": { "item": result },
        "cooling_time": coolingTime
    }).id('milkyway:processing/casting/multi_use/' + result.split(':')[1])
    if (sandCasting)
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "tag": `tconstruct:casts/single_use/${cast}`
        },
        "cast_consumed": true,
        "fluid": {
            "name": fluid,
            "amount": amount
        },
        "result": { "item": result },
        "cooling_time": coolingTime
    }).id('milkyway:processing/casting/single_use/' + result.split(':')[1])
}
let basinCasting = (event, fluid, amount, result, coolingTime) => {
    event.custom({
        "type": "tconstruct:casting_basin",
        "fluid": {
            "name": fluid,
            "amount": amount
        },
        "result": result,
        "cooling_time": coolingTime
    }).id('milkyway:processing/basin_casting/' + result.split(':')[1])
}
let draining = (event, output, fluid, fluidAmount, input) => {
    event.recipes.createEmptying([
        Item.of(output),
        Fluid.of(fluid, fluidAmount)
    ], Item.of(input)).id('milkyway:processing/emptying/' + input.split(':')[1])
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
function deploying(output, input, tool) {
	return {
		"type": "create:deploying",
		"ingredients": [
			Ingredient.of(input).toJson(),
			Ingredient.of(tool).toJson()
		],
		"results": [
			Item.of(output).toResultJson()
		],
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
    event.smelting(output, input).id('milkyway:smelting_' + input.split(':')[1])
    event.blasting(output, input).id('milkyway:blasting_' + input.split(':')[1])
}
onEvent('recipes', event => {
	log.push('Registering Recipes')
	basicMechanism(event)
    actionMechanism(event)
    //copperMechanism(event)
    //precisionMechanism(event)
    logicMechanism(event)
	cobaltMechanism(event)
    tweaks(event)
    customMachines(event)
    trading(event)
    trickierWindmills(event)
    crushing(event)
    rubberMatters(event)
	log.push('Recipes Updated')
	})
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

function logicMechanism(event){
        let cells = ['1k', '4k', '16k', '64k', '256k']
        const a = '1k'
        const b = '4k'
        const c = '16k'
        const d = '64k'
        const e = '256k'
        event.shaped(AE2(`cell_component_${b}`), [
            'CPC',
            'QMQ',
            'CPC'
        ], {
            C: MW('enderslime_crystal_dust'),
            P: AE2('printed_silicon'),
            M: AE2(`cell_component_${a}`),
            Q: MC(`quartz`)
        })
        event.shaped(AE2(`cell_component_${c}`), [
            'CPC',
            'QMQ',
            'CPC'
        ], {
            C: MW('enderslime_crystal_dust'),
            P: AE2('printed_silicon'),
            M: AE2(`cell_component_${b}`),
            Q: AE2(`certus_quartz_crystal`)
        })
        event.shaped(AE2(`cell_component_${d}`), [
            'CPC',
            'QMQ',
            'CPC'
        ], {
            C: MW('enderslime_crystal_dust'),
            P: AE2('printed_silicon'),
            M: AE2(`cell_component_${c}`),
            Q: AE2(`charged_certus_quartz_crystal`)
        })
        event.shaped(AE2(`cell_component_${e}`), [
            'CPC',
            'QMQ',
            'CPC'
        ], {
            C: MW('enderslime_crystal_dust'),
            P: AE2('printed_silicon'),
            M: AE2(`cell_component_${d}`),
            Q: AE2(`fluix_crystal`)
        })
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": { "item": AE2("calculation_processor_press") },
        "cast_consumed": false,
        "fluid": { "tag": "mw_core:molten_certus", "amount": 100 },
        "result": { "item": AE2("printed_calculation_processor") },
        "cooling_time": 150
    }).id('milkyway:processing/casting/calculation_processor')

    event.custom({
        "type": "tconstruct:casting_table",
        "cast": { "item": AE2("logic_processor_press") },
        "cast_consumed": false,
        "fluid": { "tag": "tconstruct:molten_gold", "amount": 90 },
        "result": { "item": AE2("printed_logic_processor") },
        "cooling_time": 150
    }).id('milkyway:processing/casting/logic_processor')
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": { "item": AE2("engineering_processor_press") },
        "cast_consumed": false,
        "fluid": { "tag": "tconstruct:molten_diamond", "amount": 100 },
        "result": { "item": AE2("printed_engineering_processor") },
        "cooling_time": 150
    }).id('milkyway:processing/casting/engineering_processor')
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": { "item": MW("upgrade_processor_press") },
        "cast_consumed": false,
        "fluid": { "tag": "mw_core:molten_magisteel", "amount": 90 },
        "result": { "item": MW("printed_upgrade_circuit") },
        "cooling_time": 150
    }).id('milkyway:processing/casting/upgrade_circuit')
}

function rubberMatters(event) {
    let overrideTreeOutput = (id, trunk, leaf) => {
        event.remove({ id: id })
        event.custom({
            "type": "thermal:tree_extractor",
            "trunk": trunk,
            "leaves": leaf,
            "result": {
                "fluid": "thermal:resin",
                "amount": 25
            }
        });
    }

    overrideTreeOutput(TE('devices/tree_extractor/tree_extractor_jungle'), MC('jungle_log'), MC('jungle_leaves'))
    overrideTreeOutput(TE('devices/tree_extractor/tree_extractor_spruce'), MC('spruce_log'), MC('spruce_leaves'))
    overrideTreeOutput(TE('devices/tree_extractor/tree_extractor_dark_oak'), MC('dark_oak_log'), MC('dark_oak_leaves'))
    event.remove({ id: CR('crafting/kinetics/belt_connector') })
    event.shaped(CR('belt_connector', 3), [
        'SSS',
        'KKK'
    ], {
        S: TE('cured_rubber'),
        K: MC('dried_kelp')
    })
    event.recipes.createCompacting('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), F("#vines", 4)])
    event.recipes.createCompacting('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), '4x #minecraft:flowers'])
    event.recipes.createCompacting('1x ' + TE("rubber"), [Fluid.of(TE('resin'), 250)])
}
function trickierWindmills(event) {
    event.remove({ output: 'create:sail_frame' })
    event.remove({ output: 'create:white_sail' })
    event.shapeless('create:white_sail', ['create:sail_frame', FD('canvas')]).id('milkyway:processing/crafting/white_sail_shapeless')
    event.shaped('2x create:sail_frame', [
        'SSS',
        'A A',
        'SSS'
    ], {
        A: 'create:andesite_alloy',
        S: '#forge:rods/wooden'
    }).id('milkyway:processing/crafting/sail_frame')
    itemApplication(event, CR('sail_frame'), FD('canvas'), CR('white_sail'))
}
function tweaks(event){
    //event.shaped('4x immersiveengineering:wirecoil_copper', [
    //    ' L ',
    //    'CSC',
    //    ' L '
    //    ], {
    //        C: 'createaddition:copper_wire',
    //        L: 'immersiveengineering:wire_lead',
    //        S: 'createaddition:spool'
    //    })
    //event.shaped('4x immersiveengineering:wirecoil_electrum', [
    //    ' C ',
    //    'CSC',
    //    ' C '
    //    ], {
    //        C: 'immersiveengineering:wire_electrum',
    //        S: 'createaddition:spool'
    //    })
    //event.shaped('4x immersiveengineering:wirecoil_steel', [
    //    ' C ',
    //    'LSL',
    //    ' C '
    //    ], {
    //        C: 'immersiveengineering:wire_steel',
    //        S: 'createaddition:spool',
    //        L: 'immersiveengineering:wire_aluminum'
    //    })
    //event.shaped('4x immersiveengineering:wirecoil_structure_steel', [
    //    ' C ',
    //    'CSC',
    //    ' C '
    //    ], {
    //        C: 'immersiveengineering:wire_steel',
    //        S: 'createaddition:spool'
    //    })
    //event.shaped('4x immersiveengineering:wirecoil_redstone', [
    //    ' C ',
    //    'RSR',
    //    ' C '
    //    ], {
    //        C: 'immersiveengineering:wire_aluminum',
    //        R: 'minecraft:redstone',
    //        S: 'createaddition:spool'
    //        })
    //event.shaped('4x immersiveengineering:wirecoil_structure_rope', [
    //    ' C ',
    //    'CSC',
    //    ' C '
    //    ], {
    //         C: 'immersiveengineering:hemp_fiber',
    //         S: 'createaddition:spool'
    //    })                   
    //event.replaceInput({id: /immersiveengineering:crafting.wirecoil.*/}, '#balm:wooden_rods', 'createaddition:spool')
    //event.replaceInput({id: 'immersiveengineering:crafting/toolupgrade_revlolver_electro'}, 'immersiveengineering:wire_copper', 'createaddition:copper_wire')
    event.replaceInput({id: 'thermal:augments/upgrade_augment_1'}, 'thermal:invar_ingot', 'mw_core:invar_sheet')
    event.replaceInput({id: 'thermal:augments/upgrade_augment_2'}, 'thermal:electrum_ingot', 'mw_core:electrum_sheet')
    event.replaceInput({id: 'thermal:augments/upgrade_augment_3'}, 'thermal:enderium_ingot', 'mw_core:enderium_sheet')
    event.replaceInput({id: 'thermal:augments/upgrade_augment_1'}, '#forge:glass', 'create:electron_tube')
    event.replaceInput({id: 'thermal:augments/upgrade_augment_2'}, 'minecraft:quartz', 'mw_core:data_tube')
    event.replaceInput({id: 'thermal:augments/upgrade_augment_3'}, '#thermal:glass/hardened', 'mw_core:tech_tube')
    event.smelting('alloyed:bronze_ingot', TE('bronze_dust')).id('milkyway:processing/smelting/bronze_ingot')
    //event.shaped('immersiveengineering:toolupgrade_drill_lube', [
    //    ' P ',
    //    'PBP',
    //    ' PS'
    //    ], {
    //        S: 'create:fluid_pipe',
    //        P: 'create:iron_sheet',
    //        B: 'createaddition:seed_oil_bucket'
    //    })
//event.shaped('immersiveengineering:capacitor_mv', [
//        'TNT',
//        'SRS',
//        'TIT'
//        ], {
//            S: 'alloyed:steel_ingot',
//            T: '#forge:treated_wood',
//            R: 'thermal:redstone_bucket',
//            I: 'create:iron_sheet',
//            N: 'mw_core:nickel_sheet'
//        })
    //event.shaped('immersiveengineering:capacitor_hv', [
    //    'TNT',
    //    'SRS',
    //    'TIT'
    //    ], {
    //        S: 'alloyed:steel_ingot',
    //        T: '#forge:treated_wood',
    //        R: 'thermal:redstone_bucket',
    //        I: 'immersiveengineering:ingot_hop_graphite',
    //        N: 'immersiveengineering:plate_aluminum'
    //    })
    //event.shaped('immersiveengineering:capacitor_lv', [
    //    'TIT',
    //    'SRS',
    //    'TIT'
    //    ], {
    //        S: 'minecraft:iron_ingot',
    //        T: '#forge:treated_wood',
    //        R: 'thermal:redstone_bucket',
    //        I: 'mw_core:lead_sheet',
    //    })
    //event.shaped('immersiveengineering:toolupgrade_drill_fortune', [
    //    'RS ',
    //    'SRS',
    //    'PPC'
    //    ], {
    //        S: 'alloyed:steel_sheet',
    //        R: 'thermal:redstone_bucket',
    //        P: 'create:fluid_pipe',
    //        C: 'immersiveengineering:component_steel',
    //    })
    event.shaped(Item.of('thermal:fluid_upgrade_augment_1', '{AugmentData:{FluidMax:2,RFMax:4,Type:"Fluid"}}'), [
        'STS',
        'RGR',
        'STS'
    ], {
        R: 'thermal:cured_rubber',
        S: 'create:copper_sheet',
        G: 'thermal:copper_gear',
        T: 'create:electron_tube'
    }).id('milkyway:processing/crafting/fluid_upgrade_augment_1')
    event.shaped(Item.of('thermal:fluid_upgrade_augment_2', '{AugmentData:{FluidMax:3,RFMax:5,Type:"Fluid"}}'), [
        'STS',
        'RGR',
        'STS'
    ], {
        R: 'thermal:cinnabar',
        S: 'mw_core:constantan_sheet',
        G: 'thermal:fluid_upgrade_augment_1',
        T: 'mw_core:data_tube'
    }).id('milkyway:processing/crafting/fluid_upgrade_augment_2')
    event.shaped(Item.of('thermal:fluid_upgrade_augment_3', '{AugmentData:{FluidMax:4,RFMax:6,Type:"Fluid"}}'), [
        'STS',
        'RGR',
        'STS'
    ], {
        R: 'ae2:certus_quartz_crystal',
        S: 'mw_core:signalum_sheet',
        G: 'thermal:fluid_upgrade_augment_2',
        T: 'mw_core:tech_tube'
    }).id('milkyway:processing/crafting/fluid_upgrade_augment_3')
    event.blasting('create:scoria', 'minecraft:soul_sand').xp(0.7).id('milkyway:processing/smelting/soul_stone')
//make a recipe for AE2 `cell_housing` (nickel for fluid, invar for item)
    draining(event, 'infernalexp:dimstone', 'thermal:glowstone', 1000, 'minecraft:glowstone')
    draining(event, 'infernalexp:dullstone', 'thermal:glowstone', 1000, 'infernalexp:dimstone')
    event.recipes.createCrushing([
        '2x minecraft:glowstone_dust',
        'infernalexp:glownuggets',
        Item.of('infernalexp:glownuggets').withChance(0.5)
    ], 'infernalexp:dimstone').id('milkyway:processing/crushing/dimstone')
    event.recipes.createCrushing([
        '3x infernalexp:glownuggets',
        Item.of('minecraft:glowstone_dust').withChance(0.5)
    ], 'infernalexp:dullstone').id('milkyway:processing/crushing/dullstone')
    event.shaped(AE2('fluid_cell_housing'), [
            'NRN',
            'RIR',
            'NRN'
        ], {
            N: '#forge:ingots/nickel',
            I: 'mw_core:data_tube',
            R: 'minecraft:redstone'
        }
    ).id('milkyway:processing/crafting/fluid_cell_housing')
    event.shaped(AE2('item_cell_housing'), [
            'NRN',
            'RIR',
            'NRN'
        ], {
            N: '#forge:ingots/invar',
            I: 'mw_core:data_tube',
            R: 'minecraft:redstone'
        }
    ).id('milkyway:processing/crafting/item_cell_housing')
    //pulverizer(event, F('#ingots/copper'), F('#dusts/processed/copper'), 0.5)
    materialMelting(event, AE2('fluix_crystal'), MW('molten_fluix'), 100, 1450, 580)
    materialMelting(event, AE2('certus_quartz_crystal'), MW('molten_certus'), 100, 1450, 580)
    materialMelting(event, AE2('fluix_dust'), MW('molten_fluix'), 100, 1450, 580)
    materialMelting(event, AE2('certus_quartz_dust'), MW('molten_certus'), 100, 1450, 580)
    materialMelting(event, MW('sturdy_brass_sheet'), TC('molten_brass'), 180, 800, 100)
    materialMelting(event, MW('sturdy_iron_sheet'), TC('molten_iron'), 180, 800, 100)
    materialMelting(event, MW('sturdy_steel_sheet'), TC('molten_steel'), 180, 800, 100)
    materialMelting(event, MW('sturdy_copper_sheet'), TC('molten_copper'), 180, 800, 100)
    materialMelting(event, MW('sturdy_tin_sheet'), TC('molten_tin'), 180, 800, 100)
    materialMelting(event, MW('sturdy_gold_sheet'), TC('molten_gold'), 180, 800, 100)
    materialMelting(event, MW('sturdy_zinc_sheet'), TC('molten_zinc'), 180, 800, 100)
    materialMelting(event, MW('sturdy_lead_sheet'), TC('molten_lead'), 180, 800, 100)
    materialMelting(event, MW('reinforced_brass_sheet'), TC('molten_brass'), 360, 800, 100)
    materialMelting(event, MW('reinforced_iron_sheet'), TC('molten_iron'), 360, 800, 100)
    materialMelting(event, MW('reinforced_steel_sheet'), TC('molten_steel'), 360, 800, 100)
    materialMelting(event, MW('reinforced_copper_sheet'), TC('molten_copper'), 360, 800, 100)
    materialMelting(event, MW('reinforced_tin_sheet'), TC('molten_tin'), 360, 800, 100)
    materialMelting(event, MW('reinforced_gold_sheet'), TC('molten_gold'), 360, 800, 100)
    materialMelting(event, MW('reinforced_zinc_sheet'), TC('molten_zinc'), 360, 800, 100)
    materialMelting(event, MW('reinforced_lead_sheet'), TC('molten_lead'), 360, 800, 100)
    materialMelting(event, MKW('copper_concentrate'), MKW('copper_concentrate'), 180, 950, 100)
    materialMelting(event, AE2('cell_component_256k'), MKW('liquified_logic'), 100, 1250, 300)
    apRods.forEach(e => {
        basinCasting(event, 'milkyway:molten_' + e, 400, 'architects_palette:' + e + '_rod', 200)
        materialCasting(event, 'rod', 'milkyway:molten_' + e, 100, 'milkyway:' + e + '_rod', 100, true)
        materialMelting(event, 'milkyway:' + e + '_dust',  MKW('milkyway:molten_' + e), 100, 1000, 200)
        materialMelting(event, 'milkyway:' + e + '_rod',  MKW('molten_' + e), 100, 1000, 200)
        materialMelting(event, 'architects_palette:' + e + '_rod',  MKW('molten_' + e), 400, 1000, 200)
        event.custom({
            "type": "thermal:crystallizer",
            "ingredients": [
                {
                    "fluid": "mw_core:chromatic_waste",
                    "amount": 1000
                },
                {
                    "item": 'milkyway:' + e + '_dust'
                }
            ],
            "result": [
                {
                    "item": 'milkyway:' + e + '_rod',
                    "count": 2
                }
            ],
            "energy": 5000
        }).id('milkyway:processing/crystallizing/' + e + '_rod')
    })
    materialCasting(event, '556', 'tconstruct:molten_bronze', 90, 'createarmory:five_five_six_casing', 100, false)
    materialCasting(event, '9mm', 'tconstruct:molten_bronze', 45, 'createarmory:nine_mm_casing', 100, false)
    materialCasting(event, '50', 'tconstruct:molten_bronze', 135, 'createarmory:fifty_cal_casing', 100, false)
    materialCasting(event, 'gear', 'tconstruct:molten_diamond', 400, 'thermal:diamond_gear', 160, true)
    materialCasting(event, 'gear', 'tconstruct:molten_quartz', 400, 'thermal:quartz_gear', 100, true)
    materialCasting(event, 'gear', 'tconstruct:molten_emerald', 400, 'thermal:emerald_gear', 120, true)
    materialMelting(event, 'thermal:diamond_gear', 'tconstruct:molten_diamond', 400, 1450, 820)
    materialMelting(event, 'thermal:quartz_gear', 'tconstruct:molten_quartz', 400, 637, 540)
    materialMelting(event, 'thermal:emerald_gear', 'tconstruct:molten_emerald', 400, 934, 1120)
    castTagForging(event, 'forge:gears', 'tconstruct:gear_cast')

    castForging(event, 'createarmory:five_five_six_casing', 'createarmory:five_five_six_mold')
    castForging(event, 'createarmory:nine_mm_casing', 'createarmory:nine_mm_mold')
    castForging(event, 'createarmory:fifty_cal_casing', 'createarmory:fifty_cal_mold')
    //basinCasting(event, 'immersiveengineering:concrete', 250, 'immersiveengineering:concrete', 400)

    refining(event, "tconstruct:molten_copper", "tconstruct:molten_gold", "tconstruct:molten_tin", "create:crushed_copper_ore")
    refining(event, "tconstruct:molten_iron", "tconstruct:molten_copper", "tconstruct:molten_nickel", "create:crushed_iron_ore")
    refining(event, "tconstruct:molten_nickel", "tconstruct:molten_iron", "tconstruct:molten_lead", "create:crushed_nickel_ore")
    event.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
            {
                "fluid": "mw_core:chromatic_waste",
                "amount": 1000
            },
            {
                "item": 'mw_core:cobalt_dust'
            }
        ],
        "result": [
            {
                "item": 'milkyway:cobalt_slag',
                "count": 2
            }
        ],
        "energy": 5000
    }).id('milkyway:processing/crystallizing/cobalt_slag')
    event.custom({
        "type": "thermal:centrifuge",
        "ingredient": {
            "item": "milkyway:cobalt_slag"
        },
        "result": [
            {
                "item": "mw_core:crushed_cobalt_ore"
            },
            {
                "item": "thermal:rich_slag"
            },
            {
                "item": "thermal:iron_dust"
            },
            {
                "fluid": "tconstruct:molten_copper",
                "amount": 45
            }
        ],
        "energy": 15000,
    }).id('milkyway:processing/centrifuge/cobalt_slag')
    event.custom({
        "type": "thermal:centrifuge",
        "ingredient": {
            "item": "milkyway:copper_concentrate"
        },
        "result": [
            {
                "item": "create:copper_nugget",
                "count": 3
            },
            {
                "item": "thermal:iron_dust"
            },
            {
                "fluid": "milkyway:copper_concentrate",
                "amount": 360
            }
        ],
        "energy": 2000,
    }).id('milkyway:processing/centrifuge/copper_concentrate')
    event.custom({
        "type": "thermal:centrifuge",
        "ingredient": {
            "item": "create:crushed_constantan"
        },
        "result": [
            {
                "item": "create:copper_nugget",
                "count": 3
            },
            {
                "item": "create:crushed_copper_ore"
            },
            {
                "item": "minecraft:clay_ball"
            },
            {
                "fluid": "tconstruct:molten_gold",
                "amount": 45
            }
        ],
        "energy": 2000,
    }).id('milkyway:processing/centrifuge/blister_copper')
    event.recipes.createEmptying([
        CR('cinder_flour'),
        Fluid.of('mw_core:chromatic_waste', 1000)
    ], MW('chromatic_dust')).id('mikyway:processing/emtpying/chromatic_dust')
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
    }).id('milkyway:processing/melting/quartz')

    //event.recipes.thermal.chiller(AE2("printed_calculation_processor"), [Fluid.of("mw_core:molten_certus", 100), AE2("calculation_processor_press")]).energy(5000)
    //event.recipes.thermal.chiller(AE2("printed_logic_processor"), [Fluid.of("tconstruct:molten_gold", 90), AE2("logic_processor_press")]).energy(5000)
    //event.recipes.thermal.chiller(AE2("printed_engineering_processor"), [Fluid.of("tconstruct:molten_diamond", 100), AE2("engineering_processor_press")]).energy(5000)
    //event.recipes.thermal.chiller(MW("printed_upgrade_circuit"), [Fluid.of("mw_core:molten_magisteel", 100), MW("upgrade_processor_press")]).energy(5000)

    //chiller(event, [Fluid.of("mw_core:molten_certus", 100)], [AE2("calculation_processor_press")], [AE2("printed_calculation_processor")], 5000)
    //chiller(event, [Fluid.of("tconstruct:molten_gold", 90)], [AE2("logic_processor_press")], [AE2("printed_logic_processor")], 5000)
    //chiller(event, [Fluid.of("tconstruct:molten_diamond", 100)], [AE2("engineering_processor_press")], [AE2("printed_engineering_processor")], 5000)
    //chiller(event, [Fluid.of("mw_core:molten_magisteel", 100)], [MW("upgrade_processor_press")], [MW("printed_upgrade_circuit")], 5000)
    event.custom(ifiniDeploying(AE2("printed_silicon"), AE2("silicon"), AE2("silicon_press")))
    event.recipes.createSequencedAssembly([
        MW('rave_tube'),
    ], MW('certus_core'), [
        event.recipes.createFilling(MW('certus_core'), [MW('certus_core'), Fluid.of('mw_core:chromatic_waste', 1000)]),
    ]).transitionalItem(MW('certus_core')).loops(4).id('milkyway:processing/sequenced_assembly/rave_tube')
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
            .id('milkyway:processing/sequenced_assembly/' + e + "_processor")
        let f = MW('printed_upgrade_circuit')
        event.recipes.createSequencedAssembly([
            MW('upgrade_processor'),
        ], AE2('printed_silicon'), [
            event.recipes.createDeploying(f, [f, MW('printed_upgrade_circuit')]),
            event.recipes.createFilling(f, [f, Fluid.of(TE("redstone"), 250)]),
            event.recipes.createPressing(f, f)
        ]).transitionalItem(f)
            .loops(1)
            .id('milkyway:processing/sequenced_assembly/upgrade_processor')
    })
    let grow = (from, via, to) => {
        event.recipes.createSequencedAssembly([to], from, [
            event.recipes.createFilling(via, [via, Fluid.of(MC("water"), 500)]),
        ]).transitionalItem(via)
            .loops(4)
            .id('milkyway:processing/sequenced_assembly/grow_' + to.split(':')[1])
    }
    let seqAss3 = (from, via, dep1, dep2, dep3, to) => {
        event.recipes.createSequencedAssembly([to], from, [
            event.recipes.createDeploying(via, [via, dep1]),
            event.recipes.createDeploying(via, [via, dep2]),
            event.recipes.createDeploying(via, [via, dep3])
        ]).transitionalItem(via).loops(1).id('milkyway:processing/sequenced_assembly/' + to.split(':')[1])
    }
    let unProcSheet = (fromId, metal) => {
        event.recipes.createSequencedAssembly([MW('unprocessed_' + metal + '_sheet')], fromId + ':' + metal + '_sheet', [
            event.recipes.createFilling(MW('unprocessed_' + metal + '_sheet'), [MW('unprocessed_' + metal + '_sheet'), Fluid.of(TE("creosote"), 500)]),
            event.recipes.createFilling(MW('unprocessed_' + metal + '_sheet'), [MW('unprocessed_' + metal + '_sheet'), Fluid.of(TC('molten_' + metal), 90)]),
            event.recipes.createFilling(MW('unprocessed_' + metal + '_sheet'), [MW('unprocessed_' + metal + '_sheet'), Fluid.of(MC("water"), 500)]),
            event.recipes.createPressing(MW('unprocessed_' + metal + '_sheet'), MW('unprocessed_' + metal + '_sheet')),
        ]).transitionalItem(MW('unprocessed_' + metal + '_sheet')).loops(1).id('milkyway:processing/sequenced_assembly/' + MW('unprocessed_' + metal + '_sheet').split(':')[1])
        event.recipes.createSequencedAssembly([MW('sturdy_' + metal + '_sheet')], MW('unprocessed_' + metal + '_sheet'), [
            event.recipes.createPressing(MW('unprocessed_' + metal + '_sheet'), MW('unprocessed_' + metal + '_sheet')),
        ]).transitionalItem(MW('unprocessed_' + metal + '_sheet')).loops(15).id('milkyway:processing/sequenced_assembly/' + MW('sturdy_' + metal + '_sheet').split(':')[1])
        event.recipes.createSequencedAssembly([MW('reprocessed_' + metal + '_sheet')], MW('sturdy_' + metal + '_sheet'), [
            event.recipes.createFilling(MW('reprocessed_' + metal + '_sheet'), [MW('reprocessed_' + metal + '_sheet'), Fluid.of(TE("crude_oil"), 500)]),
            event.recipes.createDeploying(MW('reprocessed_' + metal + '_sheet'), [MW('reprocessed_' + metal + '_sheet'), MW('sturdy_' + metal + '_sheet')]),
            event.recipes.createFilling(MW('reprocessed_' + metal + '_sheet'), [MW('reprocessed_' + metal + '_sheet'), Fluid.of(TC('molten_' + metal), 90)]),
            event.recipes.createFilling(MW('reprocessed_' + metal + '_sheet'), [MW('reprocessed_' + metal + '_sheet'), Fluid.of(MC("water"), 500)]),
        ]).transitionalItem(MW('reprocessed_' + metal + '_sheet')).loops(1).id('milkyway:processing/sequenced_assembly/' + MW('reprocessed_' + metal + '_sheet').split(':')[1])
        event.recipes.createSequencedAssembly([MW('reinforced_' + metal + '_sheet')], MW('reprocessed_' + metal + '_sheet'), [
            event.recipes.createPressing(MW('reprocessed_' + metal + '_sheet'), MW('reprocessed_' + metal + '_sheet')),
        ]).transitionalItem(MW('reprocessed_' + metal + '_sheet')).loops(15).id('milkyway:processing/sequenced_assembly/' + MW('reinforced_' + metal + '_sheet').split(':')[1])
    }
    unProcSheet('createaddition', 'zinc')
    let AE2CellUpgrade = (type, lvl, Nlvl) => {
        event.recipes.createSequencedAssembly([AE2(type + '_storage_cell_' + Nlvl)], AE2(type + '_storage_cell_' + lvl), [
            event.recipes.createDeploying(AE2(type + '_storage_cell_' + lvl), [AE2(type + '_storage_cell_' + lvl), AE2('cell_component_' + Nlvl)]),
            event.recipes.createFilling(AE2(type + '_storage_cell_' + lvl), [AE2(type + '_storage_cell_' + lvl), Fluid.of(MW("chromatic_waste"), 1000)]),
            event.recipes.createFilling(AE2(type + '_storage_cell_' + lvl), [AE2(type + '_storage_cell_' + lvl), Fluid.of(MW("chromatic_waste"), 1000)]),
            event.recipes.createDeploying(AE2(type + '_storage_cell_' + lvl), [AE2(type + '_storage_cell_' + lvl), AE2('calculation_processor')])
        ]).transitionalItem(AE2(type + '_storage_cell_' + lvl)).loops(1).id('milkyway:processing/sequenced_assembly/' + AE2(type + '_storage_cell_' + Nlvl).split(':')[1])
    }
    let AE2CellBuild = (type, Nlvl) => {
        event.recipes.createSequencedAssembly([AE2(type + '_storage_cell_' + Nlvl)], AE2(type + '_cell_housing'), [
            event.recipes.createDeploying(AE2(type + '_cell_housing'), [AE2(type + '_cell_housing'), AE2('cell_component_' + Nlvl)]),
            event.recipes.createFilling(AE2(type + '_cell_housing'), [AE2(type + '_cell_housing'), Fluid.of(MW("chromatic_waste"), 1000)]),
            event.recipes.createFilling(AE2(type + '_cell_housing'), [AE2(type + '_cell_housing'), Fluid.of(MW("chromatic_waste"), 1000)]),
            event.recipes.createDeploying(AE2(type + '_cell_housing'), [AE2(type + '_cell_housing'), AE2('calculation_processor')])
        ]).transitionalItem(AE2(type + '_cell_housing')).loops(1).id('milkyway:processing/sequenced_assembly/' + AE2(type + '_storage_cell_' + Nlvl).split(':')[1])
    }
    AE2CellBuild('item', '1k')
    AE2CellUpgrade('item', '1k', '4k')
    AE2CellUpgrade('item', '4k', '16k')
    AE2CellUpgrade('item', '16k', '64k')
    AE2CellUpgrade('item', '64k', '256k')
    AE2CellBuild('fluid', '1k')
    AE2CellUpgrade('fluid', '1k', '4k')
    AE2CellUpgrade('fluid', '4k', '16k')
    AE2CellUpgrade('fluid', '16k', '64k')
    AE2CellUpgrade('fluid', '64k', '256k')
    //seqAss3(IE('hemp_fabric'), IE('hemp_fabric'), MC('writable_book'), MC('glass_bottle'), IE('screwdriver'), IE('survey_tools'))
    seqAss3(CR('precision_mechanism'), CSA('incomplete_steam_engine'), CR('brass_sheet'), CR('andesite_alloy'), MC('compass'), CSA('steam_engine'))
    seqAss3(MW('basic_mechanism'), CSA('incomplete_heat_engine'), CR('andesite_alloy'), CR('copper_nugget'), CR('iron_sheet'), CSA('heat_engine'))
    seqAss3(MW('copper_mechanism'), CSA('incomplete_hydraulic_engine'), CR('copper_sheet'), MC('compass'), Item.of('minecraft:potion', '{Potion:"minecraft:water"}'), CSA('hydraulic_engine'))
    seqAss3(CR('precision_mechanism'), MW('incomplete_refined_mechanism'), RS('silicon'), 'createaddition:capacitor', MW('lead_sheet'), MW('refined_mechanism'))
    //seqAss3(FD('canvas'), FD('canvas'), IE('hemp_fiber'), F('#shears'), IE('hemp_fiber'), IE('hemp_fabric'))
    //seqAss3(IE('empty_casing'), 'immersiveengineering:filled_casing', 'thermal:lead_nugget', 'minecraft:gunpowder', 'thermal:lead_nugget', 'immersiveengineering:casull')
    //seqAss3(IE('sheetmetal_steel'), IE('sheetmetal_steel'), TE('electrum_ingot'), IE('component_steel'), TE('steel_gear'), IE('heavy_engineering'))
    //seqAss3(IE('sheetmetal_iron'), IE('sheetmetal_iron'), MC('copper_ingot'), IE('component_iron'), TE('copper_gear'), IE('light_engineering'))
    //seqAss3(IE('sheetmetal_iron'), IE('sheetmetal_iron'), MC('redstone'), MC('copper_ingot'), MW('aluminium_gear'), IE('rs_engineering'))
    //seqAss3(IE('sheetmetal_steel'), IE('sheetmetal_steel'), IE('coil_mv'), IE('component_iron'), CR('copper_sheet'), IE('generator'))
    //event.recipes.createSequencedAssembly(['immersiveengineering:casull'], IE('empty_casing'), [
    //    event.recipes.createDeploying('immersiveengineering:filled_casing', ['immersiveengineering:filled_casing', 'thermal:lead_nugget']),
    //    event.recipes.createDeploying('immersiveengineering:filled_casing', ['immersiveengineering:filled_casing', 'minecraft:gunpowder']),
    //    event.recipes.createDeploying('immersiveengineering:filled_casing', ['immersiveengineering:filled_casing', 'thermal:lead_nugget']),
    //]).transitionalItem('immersiveengineering:filled_casing').loops(1).id('milkyway:processing/sequenced_assembly/casull')

    grow(AE2("certus_crystal_seed"), AE2('growing_certus_seed'), AE2('tiny_certus_crystal'))
    grow(AE2("fluix_crystal_seed"), AE2('growing_fluix_seed'), AE2('tiny_fluix_crystal'))

    grow(AE2("tiny_certus_crystal"), AE2('growing_tiny_certus_crystal'), AE2('small_certus_crystal'))
    grow(AE2("tiny_fluix_crystal"), AE2('growing_tiny_fluix_crystal'), AE2('small_fluix_crystal'))

    grow(AE2("small_certus_crystal"), AE2('growing_small_certus_crystal'), AE2('certus_quartz_crystal'))
    grow(AE2("small_fluix_crystal"), AE2('growing_small_fluix_crystal'), AE2('fluix_crystal'))
    //event.custom(deploying('immersiveengineering:wirecoil_copper_ins', 'immersiveengineering:wirecoil_copper', 'immersiveengineering:hemp_fabric')).id('milkyway:processing/deploying/wirecoil_copper_ins')
    //event.custom(deploying('immersiveengineering:wirecoil_electrum_ins', 'immersiveengineering:wirecoil_electrum', 'immersiveengineering:hemp_fabric')).id('milkyway:processing/deploying/wirecoil_electrum_ins')
    event.shaped('milkyway:refined_machine', [
        'LLL',
        'AMA',
        'ZZZ'
    ], {
        Z: MW('sturdy_zinc_sheet'),
        A: RS('advanced_processor'),
        M: MW('refined_mechanism'),
        L: MW('sturdy_lead_sheet')
    }).id('milkyway:processing/crafting/refined_machine')
    event.shapeless(MW('basic_mechanism'), [F('#cogwheels'), CR('andesite_alloy'), F('#ingots/iron'), MC('#planks')])
    event.shaped('thermal:rf_coil', [
        'R',
        'G',
        'R'
    ], {
        R: '#forge:dusts/redstone',
        G: '#forge:ingots/gold'
    }).id('milkyway:processing/crafting/rf_coil_vertical')
    event.shaped('create:steam_engine', [
        ' B ',
        ' SC',
        'CEC'
    ], {
        C: 'create:copper_sheet',
        S: 'alloyed:steel_ingot',
        E: CSA('steam_engine'),
        B: 'create:brass_sheet'
    }).id('milkyway:processing/crafting/steam_engine')

    event.replaceOutput({id: 'mw_core:crushing/cobalt_ore'}, 'mw_core:crushed_cobalt_ore', 'milkyway:copper_concentrate')
    //event.replaceOutput({id: 'thermal:compat/tconstruct/smelter_tconstruct_cobalt_ore'}, 'tconstruct:cobalt_ingot', 'milkyway:copper_concentrate')

    event.replaceInput({id: 'create:crafting/kinetics/wrench'}, '#forge:plates/gold', 'mw_core:silver_sheet')
    event.replaceInput({id: 'forbidden_arcanus:bat_soup_1'}, 'forbidden_arcanus:bat_wing', 'miners_delight:bat_wing')
    event.replaceInput({id: 'forbidden_arcanus:bat_soup_2'}, 'forbidden_arcanus:bat_wing', 'miners_delight:bat_wing')

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
    }).id('milkyway:processing/rock_gen/jasper')
    event.custom({
        "type": "thermal:bottler",
        "ingredients": [
            {
                "item": "ae2:certus_quartz_dust"
            },
            {
                "fluid": "mw_core:chromatic_waste",
                "amount": 1000
            }
        ],
        "result": [
            {
                "item": "ae2:silicon",
            }
        ]
    }).id('milkyway:processing/bottler/silicon')
    //event.custom({
    //    "type": "create:compacting",
    //    "ingredients": [
    //        {
    //            "item": MC('melon_slice')
    //        }
    //    ],
    //    "results": [
    //        {
    //            "fluid": IE('ethanol'),
    //            "amount": 50
    //        }
    //    ]
    //}).id('milkyway:processing/compacting/ethanol')
    //event.custom({
    //    "type": "create:compacting",
    //    "ingredients": [
    //        {
    //            "fluid": IE('phenolic_resin'),
    //            "amount": 160
    //        }
    //    ],
    //    "results": [
    //        {
    //            "item": IE('plate_duroplast')
    //        }
    //    ]
    //}).id('milkyway:processing/compacting/duroplast')
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": MW('insulation_sheet')
            },
            {
                "item": MW('creative_ingot')
            },
            {
                "fluid": MW('liquid_magic'),
                "amount": 100
            },
            {
                "fluid": MKW('liquified_logic'),
                "amount": 1000
            }
        ],
        "results": [
            {
                "item": MW('creative_alloy')
            }
        ]
    }).id('milkyway:processing/compacting/creative_alloy')
    //event.custom({
    //    "type": "create:mixing",
    //    "ingredients": [
    //        {
    //            "item": TE('niter_dust')
    //        },
    //        {
    //            "fluid": 'createaddition:seed_oil',
    //            "amount": 8
    //        },
    //        {
    //            "fluid": IE('ethanol'),
    //            "amount": 8
    //        }
    //    ],
    //    "results": [
    //        {
    //            "fluid": IE('biodiesel'),
    //            "amount": 16
    //        }
    //    ]
    //}).id('milkyway:processing/mixing/biodiesel')
    //event.custom({
    //    "type": "create:mixing",
    //    "ingredients": [
    //        {
    //            "item": TE('niter_dust')
    //        },
    //        {
    //            "item": TE('copper_dust')
    //        },
    //        {
    //            "fluid": IE('ethanol'),
    //            "amount": 500
    //        }
    //    ],
    //    "results": [
    //        {
    //            "fluid": IE('herbicide'),
    //            "amount": 500
    //        }
    //    ]
    //}).id('milkyway:processing/mixing/biodiesel')
    //event.custom({
    //    "type": "create:compacting",
    //    "ingredients": [
    //        {
    //            "item": TE('slag')
    //        },
    //        {
    //            "item": MC('clay_ball')
    //        },
    //        {
    //            "tag": '#forge:sand'
    //        },
    //        {
    //            "fluid": 'minecraft:water',
    //            "amount": 1000
    //        }
    //    ],
    //    "results": [
    //        {
    //            "fluid": 'immersiveengineering:concrete',
    //            "amount": 500
    //        }
    //    ]
    //}).id('milkyway:processing/mixing/concrete')
    //event.custom({
    //    "type": "create:mixing",
    //    "ingredients": [
    //        {
    //            "fluid": TE('creosote'),
    //            "amount": 8
    //        },
    //        {
    //            "fluid": IE('acetaldehyde'),
    //            "amount": 12
    //        }
    //    ],
    //    "results": [
    //        {
    //            "fluid": IE('phenolic_resin'),
    //            "amount": 8
    //        }
    //    ]
    //}).id('milkyway:processing/mixing/phenolic_resin')
    //event.custom({
    //    "type": "create:mixing",
    //    "ingredients": [
    //        {
    //            "item": MW('silver_sheet')
    //        },
    //        {
    //            "fluid": IE('ethanol'),
    //            "amount": 8
    //        }
    //    ],
    //    "results": [
    //        {
    //            "fluid": IE('acetaldehyde'),
    //            "amount": 8
    //        }
    //    ]
    //}).id('milkyway:processing/mixing/acetaldehyde')
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
    }).id('milkyway:processing/mixing/ancient_debris')
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
    }).id('milkyway:processing/mixing/andesite')

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
    }).id('milkyway:processing/mixing/diorite')
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
    }).id('milkyway:processing/mixing/granite')
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
    }).id('milkyway:processing/mixing/andesite_from_granite')
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
    }).id('milkyway:processing/mixing/molten_ender')
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "tconstruct:molten_iron",
                "amount": 180
            },
            {
                "fluid": "milkyway:copper_concentrate",
                "amount": 720
            },
            {
                "item": "milkyway:monazite_dust"
            },
            {
                "item": "milkyway:heliodor_dust"
            },
            {
                "item": "milkyway:ekanite_dust"
            }
        ],
        "results": [
            {
                "fluid": "tconstruct:molten_iron",
                "amount": 45
            },
            {
                "item": "milkyway:cobalt_slag"
            },
            {
                "item": "create:crushed_constantan"
            }
        ]
    }).id('milkyway:processing/mixing/copper_concentrate')
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
    }).id('milkyway:processing/milling/gravel')
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
    }).id('milkyway:processing/milling/coal')
    event.remove({ id: "mw_core:crushing/rock" })
    event.remove({ id: "createaddition:mixing/netherrack" })
    event.remove({ id: "mw_core:crystallizer/certus_quartz" })
    event.remove({ id: "mw_core:crystallizer/fluix" })
    event.remove({ id: "create:crafting/kinetics/steam_engine" })
    apRods.forEach(e => {
        event.custom({
            "type": "create:milling",
            "ingredients": [
                {
                    "item": "milkyway:" + e + "_rod"
                }
            ],
            "results": [
                {
                    "item": "milkyway:" + e + "_dust",
                    "count": 1
                },
                {
                    "item": "milkyway:" + e + "_dust",
                    "count": 2,
                    "chance": 0.5
                }
            ],
            "processingTime": 70
        }).id('milkyway:processing/milling/' + e + '_rod')
    })
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "milkyway:cobalt_slag"
            }
        ],
        "results": [
            {
                "item": "tconstruct:cobalt_nugget",
                "count": 2
            },
            {
                "item": "tconstruct:cobalt_nugget",
                "count": 3,
                "chance": 0.5
            },
            {
                "item": "tconstruct:cobalt_nugget",
                "count": 4,
                "chance": 0.2
            }
        ],
        "processingTime": 70
    }).id('milkyway:processing/crushing/cobalt_slag')

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
    ]).id('milkyway:processing/mixing/oil_sand')
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
    ]).id('milkyway:processing/mixing/oil_red_sand')
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
    ]).id('milkyway:processing/mixing/rune')
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
    ]).id('milkyway:processing/mixing/phantom_membrane')

    event.shaped(RS(`1k_storage_disk`, 1), [
        'RPR',
        'DTD',
        'RSR'
    ], {
        R: MC('redstone'),
        D: MW('data_tube'),
        S: MW('sturdy_brass_sheet'),
        P: MW('refined_parts'),
        T: MW('#2x2_drawers')
    }).id(`milkyway:processing/crafting/1k_storage_disk`)
    event.shaped(FA('clibano_core'), [
            'RDR',
            'DTD',
            'RDR'
        ], {
            R: FA('stellarite_piece'),
            D: FA('darkstone'),
            T: MC('blast_furnace')
        }
    ).id(`milkyway:processing/crafting/clibano_core`)
    event.replaceInput({ type: "minecraft:crafting"}, F('#gears/iron'), EG('iron_cogwheel'))
    event.replaceInput(F('#gears/iron'), EG('iron_cogwheel'))
    event.replaceInput(F('#gears/copper'), EG('copper_cogwheel'))
    event.remove({ id: "mw_core:mixing/blends/bronze" })
    event.recipes.createMixing('4x thermal:bronze_dust', [
        TE('copper_dust'),
        TE('copper_dust'),
        TE('copper_dust'),
        TE('tin_dust')
    ]).id('milkyway:processing/mixing/bronze_dust')
    native_metals.forEach(e => {
        multiSmelt(event, F("#dusts/processed/" + e), F("#dusts/" + e))
        pulverizer(event, F('#ingots/' + e), F('#dusts/processed/' + e), 0,5)
    })
    tool_types.forEach(t => {
        event.smithing(
            FA(`reinforced_arcane_golden_${t}`),  // arg 1: output
            FA(`arcane_golden_${t}`), // arg 2: the item to be upgraded
            FA('stellarite_piece')   // arg 3: the upgrade item
        ).id(`milkyway:processing/smithing/reinforced_arcane_golden_${t}`)
    })
    colours.forEach(c => {
        event.shaped(RW(`${c}_conductor_cap`, 1), [
            ' W ',
            'WMW',
            'SSS'
        ], {
            M: CR('precision_mechanism'),
            W: MC(`${c}_wool`),
            S: MC('string')
        }).id(`milkyway:processing/crafting/${c}_conductor_cap`)
    })
    wood_types.forEach(wt =>{
        let trim = SD(`${wt}_trim`)
        let plank = MC(`${wt}_planks`)
        let drawer_sizes = ['1', '2', '4']
        drawer_sizes.forEach(size => {
            let full = SD(`${wt}_full_drawers_${size}`)
            let half = SD(`${wt}_half_drawers_${size}`)
            //event.remove({ id: full })
            event.remove({ id: half })
            //event.stonecutting(full, trim)
            event.stonecutting(Item.of(half, 2), full)
        })
        event.remove({ id: trim })
        event.shaped(Item.of(trim, 4), [
            'SSS',
            'PMP',
            'SSS'
        ], {
            P: CR('zinc_ingot'),
            M: '#forge:chests/wooden',
            S: plank
        })
        event.stonecutting(SD("upgrade_template"), trim)
        event.remove({ output: SD("upgrade_template") })

        event.shaped(SD(wt + '_full_drawers_1', 1), [
            'PSP',
            'SCS',
            'PSP'
        ], {
            P: MC(wt + '_planks'),
            S: MC(wt + '_slab'),
            C: trim
        }).id('milkyway:processing/crafting/' + wt + '_drawer_1')
        event.shaped(SD(wt + '_full_drawers_2', 1), [
            'PSP',
            'SCS',
            'PSP'
        ], {
            P: MC(wt + '_planks'),
            S: SD(wt + '_full_drawers_1'),
            C: BD(wt + '_furniture_kit')
        }).id('milkyway:processing/crafting/' + wt + '_drawer_2')
        event.shaped(SD(wt + '_full_drawers_4', 1), [
            'PSP',
            'SCS',
            'PSP'
        ], {
            P: MC(wt + '_planks'),
            S: SD(wt + '_full_drawers_2'),
            C: BD(wt + '_furniture_kit')
        }).id('milkyway:processing/crafting/' + wt + '_drawer_3')
    })
}
function customMachines(event){
    
    //event.custom({
    //    "type": "immersiveengineering:blueprint",
    //    "inputs": [
    //        {
    //            "count": 4,
    //            "base_ingredient":{
    //            "item": "create:brass_ingot"
    //            }
    //        },
    //        {
    //            "count": 6,
    //            "base_ingredient":{
    //                "item": "createarmory:barrel_part"
    //            },
    //        },
    //        {
    //            "item": "mw_core:action_mechanism"
    //        }
    //    ],
    //    "category": "weaponry",
    //    "result": {
    //        "item": "createarmory:minigun_barrel"
    //    }
    //})
    //event.custom({
    //    "type": "immersiveengineering:blueprint",
    //    "inputs": [
    //        {
    //            "count": 5,
    //            "base_ingredient":{
    //            "item": "create:brass_ingot"
    //            }
    //        },
    //        {
    //            "count": 5,
    //            "base_ingredient":{
    //            "item": "alloyed:steel_ingot"
    //            }
    //        },
    //        {
    //            "count": 2,
    //            "base_ingredient":{
    //            "item": "create:sturdy_sheet"
    //            }
    //        },
    //        {
    //            "item": "mw_core:action_mechanism"
    //        }
    //    ],
    //    "category": "weaponry",
    //    "result": {
    //        "item": "createarmory:barret_lower"
    //    }
    //})
    //event.custom({
    //    "type": "immersiveengineering:blueprint",
    //    "inputs": [
    //        {
    //            "count": 4,
    //            "base_ingredient":{
    //            "item": "create:brass_ingot"
    //            }
    //        },
    //        {
    //            "count": 4,
    //            "base_ingredient":{
    //            "item": "alloyed:steel_ingot"
    //            }
    //        },
    //        {
    //            "item": "mw_core:action_mechanism"
    //        },
    //        {
    //            "item": "create:sturdy_sheet"
    //        },
    //        {
    //            "item": "create:large_cogwheel"
    //        },
    //        {
    //            "item": "create:flywheel"
    //        }
    //    ],
    //    "category": "weaponry",
    //    "result": {
    //        "item": "createarmory:minigun_base"
    //    }
    //})
    //event.custom({
    //    "type": "immersiveengineering:blueprint",
    //    "inputs": [
    //        {
    //            "count": 3,
    //            "base_ingredient":{
    //            "item": "create:brass_ingot"
    //            }
    //        },
    //        {
    //            "count": 2,
    //            "base_ingredient":{
    //            "item": "alloyed:steel_ingot"
    //            }
    //        },
    //        {
    //            "item": "mw_core:action_mechanism"
    //        },
    //        {
    //            "count": 2,
    //            "base_ingredient":{
    //            "item": "create:sturdy_sheet"
    //            }
    //        },
    //        {
    //            "count": 4,
    //            "base_ingredient":{
    //                "item": "createarmory:barrel_part"
    //            },
    //        }
    //    ],
    //    "category": "weaponry",
    //    "result": {
    //        "item": "createarmory:m_sixteen_upper"
    //    }
    //})
    //event.custom({
    //    "type": "immersiveengineering:blueprint",
    //    "inputs": [
    //        {
    //            "count": 6,
    //            "base_ingredient":{
    //            "item": "create:brass_ingot"
    //            }
    //        },
    //        {
    //            "item": "alloyed:steel_ingot"
    //        },
    //        {
    //            "item": "mw_core:action_mechanism"
    //        },
    //        {
    //            "count": 3,
    //            "base_ingredient":{
    //                "item": "createarmory:barrel_part"
    //            },
    //        }
    //    ],
    //    "category": "weaponry",
    //    "result": {
    //        "item": "createarmory:four_sixteen_upper"
    //    }
    //})
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
        }).id(`milkyway:processing/sifting/${mesh}_mesh/` + ingredient.split(':')[1])
    }
    slimes.forEach(e => {
        sift4('zinc', `tconstruct:${e}_slime_dirt`, `tconstruct:${e}_slime_ball`, 0.5, `tconstruct:${e}_slime_crystal`, 0.25, `mw_core:${e}slime_crystal_dust`, 0.5, `tconstruct:budding_${e}_slime_crystal`, 0.01)
    })
    sift4('zinc', `tconstruct:ichor_slime_dirt`, `tconstruct:ichor_slime_ball`, 0.5, `tconstruct:ichor_slime_crystal`, 0.25, `mw_core:ichor_crystal_dust`, 0.5, `tconstruct:budding_ichor_slime_crystal`, 0.01)
    sift4('zinc', 'tconstruct:earth_slime_dirt', 'minecraft:slime_ball', 0.5, 'tconstruct:earth_slime_crystal', 0.25, 'mw_core:earthslime_crystal_dust', 0.5, 'tconstruct:budding_earth_slime_crystal', 0.01)
    sift4('zinc', '#forge:gravel', CR('crushed_iron_ore'), 0.5, CR('crushed_gold_ore'), 0.5, CR('crushed_copper_ore'), 0.5, CR('crushed_zinc_ore'), 0.5)
    //event.recipes.createCrushing([
    //    Item.of('thermal:apatite').withChance(0.5),
    //    Item.of('thermal:apatite').withChance(0.5)
    //], 'quark:jasper').id('milkyway:crushing/jasper')
    //event.recipes.createsifterSifting([Item.of('minecraft:slime_ball').withChance(0.5).toJson(),Item.of('tconstruct:earth_slime_crystal').withChance(0.25).toJson(),Item.of('mw_core:earthslime_crystal_dust').withChance(0.5).toJson(),Item.of('tconstruct:budding_earth_slime_crystal').withChance(0.01).toJson()], ['tconstruct:earth_slime_dirt','createsifter:zinc_mesh'])
}
function actionMechanism(event) {

}
