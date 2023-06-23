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
let CEI = (id, x) => MOD("create_enchantment_industry", id, x)
let CTM = (id, x) => MOD("create_things_and_misc", id, x)


let create_sheet_metals = ['iron', 'copper', 'brass']
let mw_sheet_metals = ['lead', 'nickel', 'silver', 'tin']
let native_metals = ['iron', 'zinc', 'lead', 'copper', 'nickel', 'gold', 'silver', 'aluminum', 'uranium', 'tin']
let procPress = [MW('upgrade_processor_press'), AE2('logic_processor_press'), AE2('engineering_processor_press'), AE2('calculation_processor_press'), AE2('silicon_press')]

const EM = MC('emerald')
let fEng = 'spacecatcustomprofessions:flux_engineer'
let mEng = 'spacecatcustomprofessions:mechanical_engineer'
let fRes = 'spacecatcustomprofessions:fluix_researcher'
onEvent("morejs.villager.trades", (event) => {
    function buyTrade(type, lvl, emeraldAmount, soldItem, villagerExperience, maxUses, soldItemAmount) {
        event.addTrade(type, lvl, [`${emeraldAmount}x ` + EM], `${soldItemAmount}x ` + soldItem)
            .villagerExperience(villagerExperience)
            .maxUses(maxUses)
    }
    let doubleBuyTrade = (type, lvl, emeraldAmount, buyItem, soldItem, villagerExperience, maxUses, soldItemAmount) => {
        event.addTrade(type, lvl, [`${emeraldAmount}x ` + EM, buyItem], `${soldItemAmount}x ` + soldItem)
        .villagerExperience(villagerExperience)
        .maxUses(maxUses);
    }
    let sellTrade = (type, lvl, emeraldAmount, soldItem, soldItemAmount, villagerExperience, maxUses) => {
        event.addTrade(type, lvl, [`${soldItemAmount}x ` + soldItem], `${emeraldAmount}x ` + EM)
        .villagerExperience(villagerExperience)
        .maxUses(maxUses);
    }
    //fEng Buying
    buyTrade(fEng, 1, 6, TE('rf_coil'), 3, 16, 4);
    //event.addTrade(fEng, 1, ['8x ' + EM], TE('wrench'));
    buyTrade(fEng, 1, 8, TE('wrench'), 1, 8, 1);
    //event.addTrade(fEng, 2, ['11x ' + EM], TE('rf_potato'));
    buyTrade(fEng, 2, 12, TE('rf_potato'), 2, 10, 1);
    //event.addTrade(fEng, 3, ['16x ' + EM], TE('detonator'));
    buyTrade(fEng, 3, 16, TE('detonator'), 3, 12, 1);
    //event.addTrade(fEng, 4, ['15x ' + EM], TE('satchel'));
    buyTrade(fEng, 4, 16, TE('satchel'), 4, 12, 1);
    //event.addTrade(fEng, 4, ['10x ' + EM], TE('upgrade_augment_1'));
    buyTrade(fEng, 4, 12, TE('upgrade_augment_1'), 5, 12, 1);
    //event.addTrade(fEng, 4, ['24x ' + EM], TE('upgrade_augment_2'));
    buyTrade(fEng, 4, 28, TE('upgrade_augment_2'), 5, 12, 1);
    //event.addTrade(fEng, 4, ['32x ' + EM], TE('upgrade_augment_3'));
    buyTrade(fEng, 4, 36, TE('upgrade_augment_3'), 6, 12, 1);
    //event.addTrade(fEng, 5, ['33x ' + EM], TE('dynamo_stirling'));
    buyTrade(fEng, 5, 36, TE('dynamo_stirling'), 8, 12, 1);
    //event.addTrade(fEng, 5, ['64x ' + EM], TE('machine_press'));
    buyTrade(fEng, 5, 64, TE('machine_press'), 9, 12, 1);
    //event.addTrade(fEng, 5, ['48x ' + EM, CR('precision_mechanism')], MW('cobalt_mechanism'));
    doubleBuyTrade(fEng, 5, 64, CR('precision_mechanism'), MW('cobalt_mechanism'), 15, 12, 1);
    //fEng Selling
    //event.addTrade(fEng, 4, [TE('dynamo_stirling')], '25x ' + EM);
    sellTrade(fEng, 4, 25, TE('dynamo_stirling'), 1, 5, 12);
    //event.addTrade(fEng, 4, [TE('machine_press')], '38x ' + EM);
    sellTrade(fEng, 4, 38, TE('machine_press'), 1, 5, 12);
    //event.addTrade(fEng, 4, [TE('machine_refinery')], '38x ' + EM);
    sellTrade(fEng, 4, 38, TE('machine_refinery'), 1, 5, 12);
    //event.addTrade(fEng, 4, [TE('machine_pulverizer')], '38x ' + EM);
    sellTrade(fEng, 4, 38, TE('machine_pulverizer'), 1, 5, 12);
    //event.addTrade(fEng, 1, ['8x ' + TE('rich_slag')], '4x ' + EM);
    sellTrade(fEng, 1, 4, TE('rich_slag'), 8, 2, 12);
    //event.addTrade(fEng, 1, ['16x ' + TE('cured_rubber')], '8x ' + EM);
    sellTrade(fEng, 1, 8, TE('cured_rubber'), 16, 2, 12);
    //event.addTrade(fEng, 2, ['12x ' + TE('coal_coke')], '6x ' + EM);
    sellTrade(fEng, 2, 6, TE('coal_coke'), 12, 3, 12);

    //mEng Buying
    //event.addTrade(mEng, 1, ['8x ' + EM], '8x ' + CR('cogwheel'));
    buyTrade(mEng, 1, 8, CR('cogwheel'), 2, 8, 8);
    //event.addTrade(mEng, 1, ['4x ' + EM], '1x ' + CR('whisk'));
    buyTrade(mEng, 1, 4, CR('whisk'), 1, 8, 1);
    //event.addTrade(mEng, 1, ['4x ' + EM], '1x ' + CR('propeller'));
    buyTrade(mEng, 1, 4, CR('propeller'), 1, 8, 1);
    //event.addTrade(mEng, 1, ['4x ' + EM], '2x ' + CR('brass_hand'));
    buyTrade(mEng, 1, 4, CR('brass_hand'), 1, 8, 2);
    //event.addTrade(mEng, 2, ['8x ' + EM], '12x ' + CR('metal_girder'));
    buyTrade(mEng, 2, 8, CR('metal_girder'), 2, 8, 12);
    //event.addTrade(mEng, 2, ['8x ' + EM], '6x ' + CR('chute'));
    buyTrade(mEng, 2, 8, CR('chute'), 2, 8, 6);
    //event.addTrade(mEng, 2, ['6x ' + EM], '1x ' + CR('speedometer'));
    buyTrade(mEng, 2, 6, CR('speedometer'), 2, 8, 1);
    //event.addTrade(mEng, 2, ['6x ' + EM], '1x ' + CR('stressometer'));
    buyTrade(mEng, 2, 6, CR('stressometer'), 3, 8, 1);
    //event.addTrade(mEng, 3, ['8x ' + EM], '8x ' + CR('andesite_alloy'));
    buyTrade(mEng, 3, 8, CR('andesite_alloy'), 3, 8, 8);
    //event.addTrade(mEng, 3, ['4x ' + EM], '2x ' + CR('belt_connector'));
    buyTrade(mEng, 3, 4, CR('belt_connector'), 3, 8, 2);
    //event.addTrade(mEng, 3, ['8x ' + EM], '8x ' + CR('rose_quartz'));
    buyTrade(mEng, 3, 8, CR('rose_quartz'), 3, 8, 8);
    //event.addTrade(mEng, 3, ['12x ' + EM], '8x ' + CR('fluid_pipe'));
    buyTrade(mEng, 3, 12, CR('fluid_pipe'), 3, 8, 8);
    //event.addTrade(mEng, 3, ['12x ' + EM], '16x ' + CR('experience_nugget'));
    buyTrade(mEng, 3, 12, CR('experience_nugget'), 3, 8, 16);
    //event.addTrade(mEng, 3, ['6x ' + EM, CR('polished_rose_quartz')], '1x ' + CR('electron_tube'));
    doubleBuyTrade(mEng, 3, 6, CR('polished_rose_quartz'), CR('electron_tube'), 4, 8, 1);
    //event.addTrade(mEng, 3, ['6x ' + EM, CR('iron_sheet')], '1x ' + CR('super_glue'));
    doubleBuyTrade(mEng, 3, 6, CR('iron_sheet'), CR('super_glue'), 4, 8, 1);
    create_sheet_metals.forEach(e => {
        //event.addTrade(mEng, 4, ['4x ' + EM, '#forge:ingots/' + e], 'create:' + e + '_sheet');
        doubleBuyTrade(mEng, 4, 4, '#forge:ingots/' + e, 'create:' + e + '_sheet', 5, 8, 1);
    })
    //event.addTrade(mEng, 4, ['4x ' + EM, MC('gold_ingot')], CR('golden_sheet'));
    doubleBuyTrade(mEng, 4, 4, MC('gold_ingot'), CR('golden_sheet'), 6, 8, 1);
    mw_sheet_metals.forEach(e => {
        //event.addTrade(mEng, 4, ['4x ' + EM, '#forge:ingots/' + e], MW(e + '_sheet'));
        doubleBuyTrade(mEng, 4, 4, '#forge:ingots/' + e, MW(e + '_sheet'), 6, 8, 1);
    })
    //event.addTrade(mEng, 5, ['48x ' + EM, MW('basic_mechanism')], '1x ' + CR('precision_mechanism'));
    doubleBuyTrade(mEng, 5, 48, MW('basic_mechanism'), CR('precision_mechanism'), 15, 8, 1);
    //event.addTrade(mEng, 5, ['16x ' + EM], '1x ' + CR('schedule'));
    buyTrade(mEng, 5, 16, CR('schedule'), 8, 8, 1);
    //event.addTrade(mEng, 5, ['21x ' + EM], '1x ' + CEI('enchanting_guide'));
    buyTrade(mEng, 5, 21, CEI('enchanting_guide'), 7, 8, 1);
    //event.addTrade(mEng, 5, ['16x ' + EM], '8x ' + CR('track'));
    buyTrade(mEng, 5, 16, CR('track'), 7, 8, 8);
    //event.addTrade(mEng, 5, ['14x ' + EM], '4x ' + CR('sturdy_sheet'));
    buyTrade(mEng, 5, 14, CR('sturdy_sheet'), 7, 8, 4);
    //event.addTrade(mEng, 5, ['8x ' + EM], '1x ' + CR('schematic_and_quill'));
    buyTrade(mEng, 5, 8, CR('schematic_and_quill'), 8, 8, 1);
    //mEng Selling
    //event.addTrade(mEng, 5, [CR('blaze_burner')], '28x ' + EM);
    sellTrade(mEng, 5, CR('blaze_burner'), 8, 28, 8, 4);
    native_metals.forEach(e => {
        //event.addTrade(mEng, 4, ['16x ' + CR('crushed_' + e + '_ore')], '12x ' + EM);
        sellTrade(mEng, 4, 12, CR('crushed_' + e + '_ore'), 5, 8, 12);
    })
    event.addTrade(mEng, 1, ['8x ' + CR('shaft')], '6x ' + EM);
    event.addTrade(mEng, 1, ['2x ' + CR('filter')], '4x ' + EM);
    event.addTrade(mEng, 1, ['4x ' + CR('sail_frame')], '6x ' + EM);
    event.addTrade(mEng, 2, ['10x ' + CR('andesite_casing')], '8x ' + EM);
    event.addTrade(mEng, 2, ['8x ' + CR('cinder_flour')], '7x ' + EM);
    event.addTrade(mEng, 4, ['1x ' + CTM('mending_rune')], '16x ' + EM);
    event.addTrade(mEng, 4, ['4x ' + CSA('heap_of_experience')], '6x ' + EM);
    event.addTrade(mEng, 4, ['4x ' + CR('powdered_obsidian')], '12x ' + EM);
    event.addTrade(mEng, 3, ['2x ' + CR('builders_tea')], '4x ' + EM);
    event.addTrade(mEng, 5, ['6x ' + CR('brass_ingot')], '8x ' + EM);
    event.addTrade(mEng, 5, ['2x ' + CR('attribute_filter')], '6x ' + EM);

    //fRes Buying
    event.addTrade(fRes, 1, ['3x ' + EM], '4x ' + AE2('certus_quartz_crystal'));
    event.addTrade(fRes, 1, ['2x ' + EM], '1x ' + AE2('sky_compass'));
    event.addTrade(fRes, 2, ['5x ' + EM], '8x ' + AE2('sky_stone_block'));
    event.addTrade(fRes, 3, ['5x ' + EM], '4x ' + AE2('fluix_crystal'));
    event.addTrade(fRes, 3, ['5x ' + EM], '4x ' + AE2('fluix_crystal'));
    procPress.forEach(e => {
        event.addTrade(fRes, 4, ['10x ' + EM], e);
    })
    event.addTrade(fRes, 5, ['8x ' + EM], '5x ' + MC('slime_ball'));
    event.addTrade(fRes, 5, ['48x ' + EM, AE2('logic_processor')], '1x ' + MW('logic_mechanism'));
    //fRes Selling
    event.addTrade(fRes, 2, ['5x ' + AE2('charged_certus_quartz_crystal')], '7x ' + EM);
    event.addTrade(fRes, 2, ['5x ' + AE2('silicon')], '6x ' + EM);
    event.addTrade(fRes, 3, ['2x ' + AE2('quartz_glass')], '5x ' + EM);
    event.addTrade(fRes, 4, ['5x ' + AE2('matter_ball')], '7x ' + EM);
    event.addTrade(fRes, 5, ['8x ' + MW('core_casing')], '12x ' + EM);


})
onEvent("morejs.wanderer.trades", (event) => {
    event.addTrade(2, ['8x ' + EM], '1x ' + 'milkyway:tome_alchemy');
    event.addTrade(2, ['8x ' + EM], '1x ' + 'milkyway:alloying_tome');
    event.addTrade(2, ['8x ' + EM], '1x ' + 'milkyway:tome_necromancy');
})
onEvent('tags.items', event =>{
    global.trades.forEach(i => {
        if (global.transactions[i]){
                event.add("forge:trade_cards",KJ('trade_card_' + i))
        }
    })
})