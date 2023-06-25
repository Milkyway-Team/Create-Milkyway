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
    log.push('Tidying the Kitchen')
    filling(event)
    log.push('Kitchen Tidied')
})

function filling(event) {
    let cck = ["create_central_kitchen:"]
    let cup = ["bundledelight:cup"]
    let bottle = ["minecraft:glass_bottle"]
    let bowl = ["minecraft:bowl"]
    //FILLING
    let filling = (event, result, input, fluid, amount) => {
        event.recipes.createFilling(result, [
            input,
            Fluid.of(fluid, amount)
          ]).id('milkyway:kitchen/filling/' + result.replace(':', '_'))
    event.recipes.createEmptying([
        input,
      Fluid.of(fluid, amount)
    ], result).id('milkyway:kitchen/emptying/' + fluid.replace(':', '_') + '_from_' + result.replace(':', '_'))
    event.custom({
        "type": "thermal:bottler",
        "ingredients": [
            {"item": input},
            {
                "fluid": fluid,
                "amount": amount,
            }
        ],
        "result": [{"item": result}]
    }).id('milkyway:kitchen/bottling/' + result.replace(':', '_'))
    event.custom({
        "type": "thermal:centrifuge",
        "ingredient": {
            "item": result
        },
        "result": [
            {
                "item": input
            },
            {
                "fluid": fluid,
                "amount": amount
            }
        ],
        "energy": 400,
    }).id('milkyway:kitchen/centrifuge/' + fluid.replace(':', '_') + '_from_' + result.replace(':', '_'))
}
    let bottling = (event, result, input, fluid, amount) => {
        event.custom({
            "type": "thermal:bottler",
            "ingredients": [
                {"item": input},
                {
                    "fluid": fluid,
                    "amount": amount,
                }
            ],
            "result": [{"item": result}]
        }).id('milkyway:kitchen/bottling/' + result.replace(':', '_'))
        event.custom({
            "type": "thermal:centrifuge",
            "ingredient": {
                "item": result
            },
            "result": [
                {
                    "item": input
                },
                {
                    "fluid": fluid,
                    "amount": amount
                }
            ],
            "energy": 400,
        }).id('milkyway:kitchen/centrifuge/' + fluid.replace(':', '_') + '_from_' + result.replace(':', '_'))
    }
filling(event, "bundledelight:green_tea_cup", "bundledelight:cup", "create_central_kitchen:green_tea", 250)
filling(event, "bundledelight:yellow_tea_cup", "bundledelight:cup", "create_central_kitchen:yellow_tea", 250)
filling(event, "bundledelight:black_tea_cup", "bundledelight:cup", "create_central_kitchen:black_tea", 250)
filling(event, "bundledelight:coffee_cup", "bundledelight:cup", "create_central_kitchen:coffee", 250)
filling(event, "bundledelight:dandelion_tea_cup", "bundledelight:cup", "create_central_kitchen:dandelion_tea", 250)
filling(event, "bundledelight:long_green_tea_cup", "bundledelight:cup", "create_central_kitchen:long_green_tea", 250)
filling(event, "bundledelight:long_yellow_tea_cup", "bundledelight:cup", "create_central_kitchen:long_yellow_tea", 250)
filling(event, "bundledelight:long_black_tea_cup", "bundledelight:cup", "create_central_kitchen:long_black_tea", 250)
filling(event, "bundledelight:long_coffee_cup", "bundledelight:cup", "create_central_kitchen:long_coffee", 250)
filling(event, "bundledelight:long_dandelion_tea_cup", "bundledelight:cup", "create_central_kitchen:long_dandelion_tea", 250)
filling(event, "bundledelight:purulent_tea_cup", "bundledelight:cup", "create_central_kitchen:purulent_tea", 250)
filling(event, "bundledelight:rose_hip_tea_cup", "bundledelight:cup", "create_central_kitchen:rose_hip_tea", 250)
filling(event, "bundledelight:strong_green_tea_cup", "bundledelight:cup", "create_central_kitchen:strong_green_tea", 250)
filling(event, "bundledelight:strong_yellow_tea_cup", "bundledelight:cup", "create_central_kitchen:strong_yellow_tea", 250)
filling(event, "bundledelight:strong_black_tea_cup", "bundledelight:cup", "create_central_kitchen:strong_black_tea", 250)
filling(event, "bundledelight:strong_coffee_cup", "bundledelight:cup", "create_central_kitchen:strong_coffee", 250)
filling(event, "bundledelight:strong_purulent_tea_cup", "bundledelight:cup", "create_central_kitchen:strong_purulent_tea", 250)
filling(event, "bundledelight:strong_rose_hip_tea_cup", "bundledelight:cup", "create_central_kitchen:strong_rose_hip_tea", 250)

bottling(event, "farmersrespite:green_tea", "minecraft:glass_bottle", "create_central_kitchen:green_tea", 250)
bottling(event, "farmersrespite:yellow_tea", "minecraft:glass_bottle", "create_central_kitchen:yellow_tea", 250)
bottling(event, "farmersrespite:black_tea", "minecraft:glass_bottle", "create_central_kitchen:black_tea", 250)
bottling(event, "farmersrespite:coffee", "minecraft:glass_bottle", "create_central_kitchen:coffee", 250)
bottling(event, "farmersrespite:dandelion_tea", "minecraft:glass_bottle", "create_central_kitchen:dandelion_tea", 250)
bottling(event, "farmersrespite:long_green_tea", "minecraft:glass_bottle", "create_central_kitchen:long_green_tea", 250)
bottling(event, "farmersrespite:long_yellow_tea", "minecraft:glass_bottle", "create_central_kitchen:long_yellow_tea", 250)
bottling(event, "farmersrespite:long_black_tea", "minecraft:glass_bottle", "create_central_kitchen:long_black_tea", 250)
bottling(event, "farmersrespite:long_coffee", "minecraft:glass_bottle", "create_central_kitchen:long_coffee", 250)
bottling(event, "farmersrespite:long_dandelion_tea", "minecraft:glass_bottle", "create_central_kitchen:long_dandelion_tea", 250)
bottling(event, "farmersrespite:purulent_tea", "minecraft:glass_bottle", "create_central_kitchen:purulent_tea", 250)
bottling(event, "farmersrespite:rose_hip_tea", "minecraft:glass_bottle", "create_central_kitchen:rose_hip_tea", 250)
bottling(event, "farmersrespite:strong_green_tea", "minecraft:glass_bottle", "create_central_kitchen:strong_green_tea", 250)
bottling(event, "farmersrespite:strong_yellow_tea", "minecraft:glass_bottle", "create_central_kitchen:strong_yellow_tea", 250)
bottling(event, "farmersrespite:strong_black_tea", "minecraft:glass_bottle", "create_central_kitchen:strong_black_tea", 250)
bottling(event, "farmersrespite:strong_coffee", "minecraft:glass_bottle", "create_central_kitchen:strong_coffee", 250)
bottling(event, "farmersrespite:strong_purulent_tea", "minecraft:glass_bottle", "create_central_kitchen:strong_purulent_tea", 250)
bottling(event, "farmersrespite:strong_rose_hip_tea", "minecraft:glass_bottle", "create_central_kitchen:strong_rose_hip_tea", 250)
bottling(event, "farmersdelight:hot_cocoa", "minecraft:glass_bottle", "create_central_kitchen:hot_cocoa", 250)
bottling(event, "farmersdelight:apple_cider", "minecraft:glass_bottle", "create_central_kitchen:apple_cider", 250)
bottling(event, "farmersdelight:melon_juice", "minecraft:glass_bottle", "create_central_kitchen:melon_juice", 250)
bottling(event, "farmersrespite:strong_apple_cider", "minecraft:glass_bottle", "create_central_kitchen:strong_apple_cider", 250)
bottling(event, "farmersrespite:long_apple_cider", "minecraft:glass_bottle", "create_central_kitchen:long_apple_cider", 250)
bottling(event, "farmersdelight:tomato_sauce", "minecraft:bowl", "create_central_kitchen:tomato_sauce", 250)
}


