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
let MKW = (id, x) => MOD("milkyway", id, x)

let FA = (id, x) => MOD("forbidden_arcanus", id, x)
let RS = (id, x) => MOD("refinedstorage", id, x)
let IE = (id, x) => MOD("immersiveengineering", id, x)
let QA = (id, x) => MOD("quark", id, x)
let F = (id, x) => MOD("forge", id, x)
let EG = (id, x) => MOD("extendedgears", id, x)
let RW = (id, x) => MOD("railways", id, x)
let BD = (id, x) => MOD("buildersdelight", id, x)
let AL = (id, x) => MOD("alloyed", id, x)

onEvent('recipes', event => {
    log.push('Satisfactory Load Started')
    aluminium(event)
    copper(event)
    log.push('Satisfactory Load Complete')
})

function aluminium(event) {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "mw_core:aluminium_ore_dust"
            },
            {
                "fluid": "minecraft:water",
                "amount": 500
            }
        ],
        "results": [
            {
                "fluid": "milkyway:alumina_solution",
                "amount": 500
            },
            {
                "item": "milkyway:silicate_dust",
                "count": 2,
                "chance": 0.5
            },
            {
                "item": "milkyway:silicate_dust"
            }
        ],
        "heatRequirement": "heated"
    }).id('milkyway:satisfactory/aluminium/mixing/alumina_solution')
 
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "milkyway:alumina_solution",
                "amount": 100
            },
            {
                "item": "minecraft:charcoal",
                "count": 2
            }
        ],
        "results": [
            {
                "item": "milkyway:raw_aluminium"
            },
            {
                "item": "milkyway:raw_aluminium",
                "chance": 0.5
            },
            {
                "fluid": "minecraft:water",
                "amount": 50
            }
        ],
        "heatRequirement": "heated"
    }).id('milkyway:satisfactory/aluminium/mixing/raw_aluminium')

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": "milkyway:raw_aluminium"
            },
            {
                "item": "milkyway:silicate_dust"
            },
            {
                "item": "milkyway:silicate_dust"
            }
        ],
        "results": [
            {
                "item": "milkyway:aluminium_blend"
            },
            {
                "item": "milkyway:aluminium_blend",
                "chance": 0.5
            }
        ]
    }).id('milkyway:satisfactory/aluminium/compacting/aluminium_blend')

    event.blasting('2x mw_core:aluminium_ingot', 'milkyway:aluminium_blend').id('milkyway:satisfactory/aluminium/blasting/aluminium_ingot')
    event.smelting('mw_core:aluminium_ingot', 'milkyway:aluminium_blend').id('milkyway:satisfactory/aluminium/smelting/aluminium_ingot')
    event.custom({
        "type": "thermal:pulverizer",
        "ingredient": {
          "value": [
            {
              "item": "minecraft:amethyst_shard"
            }
          ],
          "count": 2
        },
        "result": [
          {
            "item": "milkyway:silicate_dust",
            "count": 2
          },
          {
            "item": "thermal:quartz_dust"
          }
        ],
        "experience": 0.1
    }).id('milkyway:satisfactory/aluminium/pulverizer/silicate_dust')
}

function copper(event) {
    function coolingitemtoitem(item, output, count) {
    event.custom({
        "type": "createindustrialchemistry:cooling",
        "ingredients": [
          {
            "item": item
          }
        ],
        "results": [
          {
            "item": output,
            "count": count
          }
        ]
       }).id('milkyway:satisfactory/copper/cooling/' + output.replace(':', '_'))
    }
    

    function simplesoaking(item, fluid, output, count) {
        event.custom({
        "type": "mw_core:soaking",
        "ingredient": {
          "item": item //this is the input
        },
        "fluid": fluid,  //this is the fluid, it can accept tags
        "source": true,  //If it should be a source (not the flowing)
        "remove": true, 
        "result": {
          "item": output, //the output/item
          "count": count
        }
    }).id('milkyway:satisfactory/copper/soaking/' + output.replace(':', '_'))
}

        event.recipes.create.mixing(Item.of('2x create:crushed_constantan'),[
Fluid.of('tconstruct:blood',1000),
'2x create:cinder_flour',
'3x wildbackport:mud',
'2x minecraft:quartz',
'#forge:dusts/quartz',
'1x minecraft:raw_copper'
 ]).superheated().id('milkyway:satisfactory/copper/mixing/blister_copper')

 event.recipes.createFilling('milkyway:enriched_copper_ore_dust', [
    'mw_core:copper_ore_dust',
    Fluid.of('thermal:glowstone', 500)
]).id('milkyway:satisfactory/copper/filling/enriched_copper_ore_dust')

event.recipes.createFilling('milkyway:enriched_raw_copper', [
    'minecraft:raw_copper',
    Fluid.of('thermal:glowstone',1000)
]).id('milkyway:satisfactory/copper/filling/enriched_raw_copper')

event.recipes.createHaunting([
    '5x milkyway:haunted_copper_clump',
    Item.of('2x milkyway:haunted_copper_clump').withChance(0.5),
    Item.of('1x milkyway:haunted_copper_clump').withChance(0.3)
], [
    'milkyway:enriched_raw_copper'
]).id('milkyway:satisfactory/copper/haunting/haunted_copper_clump_from_enriched_raw_copper')

event.recipes.createHaunting([
  '3x milkyway:haunted_copper_clump',
  Item.of('1x milkyway:haunted_copper_clump').withChance(0.75),
  Item.of('2x milkyway:haunted_copper_clump').withChance(0.33),
  Item.of('3x milkyway:haunted_copper_clump').withChance(0.15)
], [
  'milkyway:enriched_copper_ore_dust'
]).id('milkyway:satisfactory/copper/haunting/haunted_copper_clump_from_enriched_copper_ore_dust')

event.smoking('milkyway:smoked_copper_clump', 'milkyway:haunted_copper_clump').id('milkyway:satisfactory/copper/smoking/smoked_copper_clump')

 simplesoaking("minecraft:raw_copper", "tconstruct:molten_lumium", "milkyway:enriched_raw_copper", 1) //idk how 2 texture

 //main path
 event.recipes.create.mixing(Item.of('milkyway:haunted_copper'),[
  Fluid.of('tconstruct:molten_clay',50),
 '3x milkyway:haunted_copper_clump'
    ]).id('milkyway:satisfactory/copper/mixing/haunted_copper')

    event.recipes.create.mixing(Item.of('minecraft:copper_ingot'),[
      Fluid.of('tconstruct:molten_clay',50),
     '3x milkyway:copper_clump'
        ]).id('milkyway:satisfactory/copper/mixing/copper_ingot')

    coolingitemtoitem("milkyway:haunted_copper", "minecraft:copper_ingot", 1)
    coolingitemtoitem("milkyway:haunted_copper_clump", "milkyway:copper_clump", 1)


    event.custom({
        "type": "thermal:centrifuge",
        "ingredient": {
          "item": "milkyway:smoked_copper_clump"
        },
        "result": [
          {
            "item": "milkyway:copper_fragment",
            "count": 4,
            "chance": 2.5,
            "locked": true
          },
          {
            "item": "milkyway:copper_fragment",
            "chance": 0.7
          },
          {
            "item": "supplementaries:ash",
            "chance": 2.6
          },
          {
            "fluid": "tconstruct:molten_gold",
            "amount": 30
          },  {
            "item": "infernalexp:glownuggets",
            "chance": 0.6,
            "locked": true
          },
        ],
        "energy": 10000
    }).id('milkyway:satisfactory/copper/centrifuge/copper_fragment')

    event.custom({
      "type": "createindustrialchemistry:electrolysis",
      "ingredients": [
        {
          "item": "milkyway:copper_fragment"
        }, {
          "item": "milkyway:copper_fragment"
        }, {
          "item": "milkyway:copper_fragment"
        }, {
          "item": "milkyway:copper_fragment"
        }, {
          "item": "milkyway:copper_fragment"
        }, {
          "item": "milkyway:copper_fragment"
        }, {
          "item": "milkyway:copper_fragment"
        }, {
          "item": "milkyway:copper_fragment"
        }, {
          "item": "milkyway:copper_fragment"
        }, {
          "fluid": "tconstruct:molten_glass",
          "amount": 500
        }
      ],
      "results": [
        {
          "item": "milkyway:electrified_copper_nugget"
        }, {
          "fluid": "tconstruct:molten_gold",
          "amount": 15
        }
      ], 
      "heatRequirement": "superheated"
     }).id('milkyway:satisfactory/copper/electrolysis/electrified_copper_nugget')

     event.custom({
      "type": "createindustrialchemistry:cooling",
      "ingredients": [
        {
          "item": "minecraft:redstone"
        }, {
          "fluid": "createindustrialchemistry:distilled_water",
          "amount": 150
        }, {
          "item": "milkyway:electrified_copper_nugget"
        }
      ],
      "results": [
        {
          "item": "create:copper_nugget",
          "count": 1
        }, { 
        "fluid": "thermal:glowstone",
        "amount": 250 
        }
      ]
     }).id('milkyway:satisfactory/copper/cooling/copper_nugget')
}