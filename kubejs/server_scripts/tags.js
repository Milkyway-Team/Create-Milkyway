
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) => MOD("ae2", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let CR = (id, x) => MOD("create", id, x)
let CSA = (id, x) => MOD("create_sa", id, x)
let TC = (id, x) => MOD("tconstruct", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)
let FR = (id, x) => MOD("farmersrespite", id, x)
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
let dustMetals = ['iron', 'lead', 'copper', 'nickel', 'gold', 'silver', 'tin']
let wood_types = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped']
let tool_types = ['pickaxe', 'axe', 'shovel', 'hoe', 'sword']
let coin_metals = ['nickel', 'enderium', 'lumium', 'signalum', 'constantan', 'invar', 'electrum', 'bronze', 'silver', 'lead', 'tin', 'netherite', 'copper', 'gold', 'iron', 'rose_gold', 'steel']
let unwanted_IE_metals = ['aluminum', 'lead', 'nickel', 'silver']
let unwanted_IE_alloys = ['steel', 'electrum', 'constantan']
let ow_vanilla_metals = ['iron', 'copper', 'gold']
function blacklist(item){
    onEvent('item.tags', event => {
        event.get('randomium:blacklist')
            .add(item)
    })}
function jeiHide(id){
    onEvent('item.tags', event => {
        event.get('mw_core:jei_hidden')
            .add(id)
        event.get('randomium:blacklist')
            .add(id)
    })}
function tagAdd(tag, add){
    onEvent('item.tags', event => {
    event.get(tag)
        .add(add)
    })}
    function uprightOnBelt(item){
        onEvent('item.tags', event => {
            event.get('create:upright_on_belt')
                .add(item)
        })
    }
    function leveledDrinkTag(type){
        strongDrinkTag(type)
        longDrinkTag(type)
        onEvent('item.tags', event => {
            event.get('create:upright_on_belt')
                .add('farmersrespite:long_' + type)
                .add('bundledelight:long_' + type + '_cup')
        })
    }
    function longDrinkTag(type){
        onEvent('item.tags', event => {
            event.get('farmersrespite:drinks/long/' + type)
                .add('farmersrespite:long_' + type)
                .add('bundledelight:long_' + type + '_cup')
        })
    }
    function strongDrinkTag(type){
        onEvent('item.tags', event => {
            event.get('farmersrespite:drinks/strong/' + type)
                .add('farmersrespite:strong_' + type)
                .add('bundledelight:strong_' + type + '_cup')
        })
    }
function tagRem(tag, remove){
    onEvent('item.tags', event => {
    event.get(tag)
        .remove(remove)
})}
function blokTagAdd(tag, add){
    onEvent('block.tags', event => {
        event.get(tag)
            .add(add)
    })}
function blokTagRem(tag, remove){
    onEvent('block.tags', event => {
        event.get(tag)
            .remove(remove)
    })}
function fluidTagAdd(tag, add){
    onEvent('fluid.tags', event => {
        event.get(tag)
            .add(add)
    })
}
function genericTagRem(event, tag, remove){
        event.get(tag)
            .remove(remove)
    }
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
    global.specProfessions.forEach(element => {
        event.get('forge:profession_cards').add(`kubejs:specialized_profession_card_${element}`)
    });
    event.get('thermal:crafting/dies').add('#forge:trade_cards')
    event.get('thermal:crafting/dies').add('#forge:profession_cards')
    event.get('mw_industry_additions:cards').add(['#forge:profession_cards', '#forge:trade_cards'])
    event.get("tconstruct:anvil_metal")
    //.remove("#forge:storage_blocks/nethersteel")
    event.get('forge:dusts/processed/tin')
        .add(TE('tin_dust'))
    event.get('forge:dusts/tin')
        .remove(TE('tin_dust'))
        .add(MW('tin_ore_dust'))
    event.get('create:upright_on_belt')
        .add(/mw_core:.*_plush/)
        .add(/mw_core:sweet_berry_juice/)
    event.get('thermal:crafting/casts')
        .add(TC('ingot_cast'))
})
blacklist([/.*creative.*/, /.*insulation.*/, /ftblibrary.*/, /ftbquests.*/, /mw_core:.*_bucket/, /mw_core:.*_mechanism/, /mw_core:.*_charm/, /tconstruct:.*_bucket/,
    /mw_core:music_disc.*/, /create:precision_mechanism/, /quark:diamond_heart/, /refinedstorage:.*storage_block.*/, /refinedstorage:.*quartz_enriched_iron.*/, /refinedstorage:.*portable.*/, /refinedstorage:.*pattern.*/,
    /refinedstorage:.*disk_manipulator.*/, /refinedstorage:.*storage_housing.*/, MW('#jei_hidden'),
    /thermal:.*augment.*/, /tconstruct:raw_cobalt.*/])
jeiHide([/thermal:press.*_die/, RS('#disk_manipulator'), RS('#detector'), RS('#wireless_transmitter'), /refinedstorage:.*storage_block/, RS('storage_monitor'),
    RS('storage_housing'), RS('machine_casing'), RS('wrench'), RS('pattern'), RS('filter'), TE('device_water_gen'), TE('device_fisher'), TE('device_composter'),
    TE('device_collector'), TE('device_nullifier'), TE('device_potion_diffuser'), TE('machine_furnace'), TE('machine_sawmill'),])
onEvent('block.tags', event => {
    event.get("create:windmill_sails")
        .remove(MC('#wool'))
        .remove(CR('sail_frame'))
})
tagRem(F('silicon'), [AE2('silicon')])
tagRem(F('ingots/bronze'), [TE('bronze_ingot')])
tagRem(F('ingots/steel'), [TE('steel_ingot')])

tagRem(F('nuggets/copper'), [TC('copper_nugget'), TE('copper_nugget')])
dustMetals.forEach(e => {
    tagRem(F('dusts/' + e), [TE(e + '_dust')])
})
tool_types.forEach(e => {
    tagRem(F('tools/' + e + 's'), [MW('aluminium_' + e), MW('creatite_' + e)])
})
coin_metals.forEach(e => {
    tagRem(F('plates/' + e), [TE(e + '_plate')])
    tagRem(F('coins/' + e), [TE(e + '_coin')])
    tagRem(F('coins'), [TE(e + '_coin')])
})
blokTagAdd(F('stone_gold_ores'), [MC('gold_ore'), MC('deepslate_gold_ore')])
fluidTagAdd(TC('tooltips/metal'), MKW('copper_concentrate'))
fluidTagAdd(TC('tooltips/gem_small'), [MKW('molten_monazite'), MKW('molten_heliodor')])
fluidTagAdd(TC('tooltips/gem_small'), MKW('molten_ekanite'))
ow_vanilla_metals.forEach(e => {
})
wood_types.forEach(wt => {
    tagAdd(MW('2x2_drawers'), SD(`${wt}_full_drawers_4`))
})
tagAdd(FD('stew_cups'), /miners_delight:.*_stew_cup/)
tagAdd(FD('soup_cups'), /miners_delight:.*_soup_cup/)
tagAdd(FD('large_meals'), /farmersdelight:.*_block/)
tagAdd(FD('large_meals'), ['miners_delight:stuffed_squid', 'endersdelight:stuffed_shulker'])
tagAdd(FD('soups'), /farmersdelight:.*_soup/)
tagAdd(FD('stews'), /farmersdelight:.*_stew/)
tagAdd(FD('soups'), ['alexsdelight:acacia_blossom_soup', 'miners_delight:cave_soup', MC('beetroot_soup')])
tagAdd(FD('stews'), 'bundledelight:borscht')
tagAdd(FD('soups'), 'bundledelight:nettle_soup')
tagAdd(FD('stews'), /minecraft:.*_stew/)
tagAdd(FD('stews'), /endersdelight:.*_stew_.*/)
tagAdd('endersdelight:shulker_bowl_foods', ['endersdelight:chorus_stew', 'endersdelight:endermite_stew', 'endersdelight:twisted_cereal', 'endersdelight:pearl_pasta', 'endersdelight:ender_paella'])
tagRem('forge:nuggets/bronze', 'thermal:bronze_nugget')
tagRem('forge:nuggets/bronze', 'createbigcannons:bronze_scrap')
tagRem('forge:nuggets/steel', 'thermal:steel_nugget')
tagRem('forge:nuggets/steel', 'createbigcannons:steel_scrap')
tagAdd('milkyway:mechanisms', /mw_core:.*_mechanism/)
tagAdd('milkyway:mechanisms', 'create:precision_mechanism')
tagRem('forge:storage_blocks/steel', 'thermal:steel_block')
tagRem('forge:storage_blocks', 'thermal:steel_block')
tagRem('forge:dusts/zinc', 'createindustrialchemistry:zinc_dusts')
tagRem('forge:dusts/zinc', 'createbb:crushed_zinc')
tagRem('forge:dusts', 'createindustrialchemistry:zinc_dusts')
tagRem('forge:dusts', 'createbb:crushed_zinc')
tagRem('forge:dusts/copper', 'createindustrialchemistry:copper_dusts')
tagRem('forge:dusts/copper', 'createbb:crushed_copper')
tagRem('forge:dusts', 'createindustrialchemistry:copper_dusts')
tagRem('forge:dusts', 'createbb:crushed_copper')
tagRem('forge:dusts', 'createindustrialchemistry:iron_dusts')
tagRem('forge:dusts/iron', 'createindustrialchemistry:iron_dusts')
uprightOnBelt('bundledelight:sweet_berry_juice')
uprightOnBelt(/tconstruct:.*_cake/)
uprightOnBelt(/create_things_and_misc:.*_cake/)
uprightOnBelt('farmersrespite:coffee_cake')
uprightOnBelt('bundledelight:carrot_cake')
uprightOnBelt('farmersdelight:melon_juice')
uprightOnBelt('farmersdelight:apple_cider')
uprightOnBelt('nethersdelight:magma_gelatin')
uprightOnBelt('endersdelight:chorus_juice')
uprightOnBelt('endersdelight:chorus_pie')
leveledDrinkTag('green_tea')
leveledDrinkTag('yellow_tea')
leveledDrinkTag('black_tea')
leveledDrinkTag('coffee')
longDrinkTag('dandelion_tea')
strongDrinkTag('purulent_tea')
strongDrinkTag('rose_hip_tea')
uprightOnBelt('farmersrespite:dandelion_tea')
uprightOnBelt('farmersrespite:purulent_tea')
uprightOnBelt('farmersrespite:rose_hip_tea')
uprightOnBelt('farmersrespite:long_dandelion_tea')
uprightOnBelt('farmersrespite:strong_purulent_tea')
uprightOnBelt('farmersrespite:strong_rose_hip_tea')


jeiHide(
[
'thermal:steel_block',
'thermal:machine_insolator',
'thermal:machine_brewer',
'thermal:machine_crafter',
'thermal:machine_chiller',
'thermal:machine_sawmill',
'thermal:machine_furnace',
'waystones:mossy_waystone',
'waystones:sandy_waystone',
'waystones:warp_plate',
'ae2:ender_dust',
'createbb:crushed_zinc',
'createbb:crushed_copper',
'createbb:copper_zinc_catalyst',
'createindustrialchemistry:zinc_dusts',
'createindustrialchemistry:copper_dusts',
'createindustrialchemistry:iron_dusts',
'thermal:sugar_cane_block',
'thermal:bamboo_block',
'thermal:beetroot_block',
'thermal:carrot_block',
'thermal:potato_block',
'thermal:apple_block',
'quark:carrot_crate',
'quark:potato_crate',
'quark:glowberry_sack',
'quark:sugar_cane_block',
'quark:berry_sack',
'quark:beetroot_crate',
'quark:apple_crate',
'quark:golden_apple_crate',
'quark:cocoa_beans_sack',
'quark:bamboo_block',
'mw_core:sweet_berry_juice',
'quark:chorus_fruit_block',
]
)


