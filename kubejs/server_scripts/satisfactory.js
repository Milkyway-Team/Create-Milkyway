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