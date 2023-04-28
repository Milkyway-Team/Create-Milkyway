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



let colours = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
let native_metals = ['iron', 'zinc', 'lead', 'copper', 'nickel', 'gold', 'silver', 'aluminum', 'uranium', 'cobalt', 'tin']
let wood_types = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped']
let tool_types = ['pickaxe', 'axe', 'shovel', 'hoe', 'sword']
let armoryGuns = ['rpg', 'mac_ten', 'double_barrel']
let armoryParts = ['minigun_base', 'barret_lower', 'm_four_lower']

let cck = ['create:crafting/kinetics/']
let ccl = ['create:crafting/logistics/']
let ccm = ['create:crafting/materials/']
let aen = ['ae2:network/']
let tm = ['thermal:machines/']
let sml = ['smelter']
let pulv = ['pulverizer']
let crys = ['crystallizer']

onEvent('recipes', event => {
    log.push('Removing Recipes')
    unwantedRecipes(event)
    log.push('Recipes Removed')
})
function removeByID(recipeId) {
    onEvent('recipes', event => {
        event.remove({ id: recipeId });
    })
}
function smeltingRemove(event, recipeOutput) {
event.remove({ output: recipeOutput, type: 'minecraft:smelting' })
event.remove({ output: recipeOutput, type: 'minecraft:blasting'} );
}
function remMetalCraft(mod, metal) {
    onEvent('recipes', event => {
        event.remove({output: F('#ingots/' + metal), type: 'minecraft:crafting_shaped'})
        event.remove({output: F('#ingots/' + metal), type: 'minecraft:crafting_shapeless'})
        event.remove({output: F('#nuggets/' + metal), type: 'minecraft:crafting_shapeless'})
        event.remove({output: F('#storage_blocks/' + metal), type: 'minecraft:crafting_shaped'})
    })
}
function blastRem(event, recipeOutput) {
    event.remove({ output: recipeOutput, type: 'minecraft:blasting'} );
}
let unwanted_IE_metals = ['aluminum', 'lead', 'nickel', 'silver']

function unwantedRecipes(event) {

    function replaceIn(originIn, newIn) {
        event.replaceInput({}, originIn, newIn);
    }
    function replaceOut(originOut, newOut) {
        event.replaceOutput({}, originOut, newOut);
    }
    function replaceInById(id, originIn, newIn) {
        event.replaceInput({ id: id }, originIn, newIn);
    }
    function replaceOutById(id, originOut, newOut) {
        event.replaceOutput({ id: id }, originOut, newOut);
    }
    function removeRecID(recipeId) {
        event.remove({ id: recipeId });
    }
    function removeRecTyp(recipeType) {
        event.remove({ type: recipeType });
    }
    function removeRecOut(recipeOutput) {
        event.remove({ output: recipeOutput });
    }
    function removeRecIn(recipeInput) {
        event.remove({ input: recipeInput });
    }
    replaceInById('brewinandchewin:fermenting/steel_toe_stout', 'minecraft:iron_ingot', 'alloyed:steel_ingot')
    armoryGuns.forEach(e => {
        replaceInById(`createarmory:${e}_recipe`, 'create:precision_mechanism', 'mw_core:action_mechanism')
    })
    armoryParts.forEach(e => {
        replaceInById(`createarmory:${e}_recipe`, 'create:precision_mechanism', 'mw_core:action_mechanism')
    })

    replaceIn(IE('fluid_pipe'), CR('fluid_pipe'))
    replaceIn(IE('redstone_acid_bucket'), TE('redstone_bucket'))
    replaceOut(IE('ingot_aluminum'), 'mw_core:aluminium_ingot')
    replaceOut(IE('dust_aluminum'), 'mw_core:aluminium_ore_dust')
    removeRecID(/refinedstorage:.*pattern.*/)
    removeRecID('waystones:warp_stone')
    removeRecID('waystones:sharestone')
    removeRecID('waystones:portstone')
    removeRecID('waystones:warp_plate')
    removeRecID(/thermal:parts.*_gear/)
    removeRecID(/waystones:.*waystone.*/)
    removeRecID(/refinedstorage:.*quartz_enriched_iron.*/)
    removeRecID(IE('crafting/fluid_pump'))
    removeRecID(IE('crafting/fluid_pipe'))
    removeRecID(/createaddition:compat.tconstruct.*/)
    removeRecID(/thermal:compat.create.centrifuge_.*/)
    removeRecID(/thermal:compat.create_ie.centrifuge_.*/)
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
    removeRecID(/mw_core:compacting.*coin/)
    removeRecID(/mw_core:mixer.mixer_alloying.*/)
    removeRecID('tconstruct:smeltery/melting/metal/cobalt/ore_singular')
    removeRecID('mw_core:refinery/copper_refining')
    removeRecID('mw_core:refinery/nickel_refining')
    removeRecID('mw_core:refinery/iron_refining')
    removeRecID('thermal:compat/tconstruct/smelter_tconstruct_cobalt_ore')
    removeRecID('thermal:compat/tconstruct/smelter_tconstruct_raw_cobalt')
    removeRecID('tconstruct:common/materials/cobalt_ingot_from_block')
    removeRecID('tconstruct:common/materials/cobalt_ingot_from_nuggets')
    removeRecID('tconstruct:common/materials/cobalt_nugget_from_ingot')
    removeRecID('tconstruct:common/materials/cobalt_block_from_ingots')
    removeByID('mw_core:compacting/creative_alloy')
    removeByID('createarmory:fifty_cal_mold_complete_recipe')
    removeByID('createarmory:five_five_six_mold_complete_recipe')
    removeByID('createarmory:nine_mm_mold_complete_recipe')
    removeByID('createarmory:fifty_cal_mold_break')
    removeByID('createarmory:five_five_six_mold_break')
    removeByID('createarmory:nine_mm_mold_break')
    removeByID('createarmory:fifty_cal_mold_recipe')
    removeByID('createarmory:five_five_six_mold_recipe')
    removeByID('createarmory:nine_mm_mold_recipe')
    removeByID('createarmory:casing_mold_recipe')

    //removeRecTyp([IE('alloy'), IE('arc_furnace'), IE('blast_furnace_fuel'), IE('blast_furnace'), IE('bottling_machine'), IE('coke_oven'), IE('fermenter'),
    //    IE('metal_press'), IE('mixer'), IE('refinery'), IE('sawmill'), IE('squeezer')])
removeRecTyp([IE('bottling_machine'), IE('cokeoven')])

    removeRecOut(RS('processor_binding'))
    removeRecOut(AE2('inscriber'))
    removeRecOut(TE('device_water_gen'))
    removeRecOut(TE('device_fisher'))
    removeRecOut(TE('device_composter'))
    removeRecOut(TE('device_collector'))
    removeRecOut(TE('device_nullifier'))
    removeRecOut(TE('device_potion_diffuser'))
    removeRecOut(TE('machine_furnace'))
    removeRecOut(TE('machine_sawmill'))
    //removeRecOut(TE('machine_centrifuge'))
    removeRecOut(TE('machine_crafter'))
    removeRecOut(TE('machine_brewer'))
    removeRecOut(TE('machine_chiller'))
    removeRecOut([IE('watermill'), IE('coal_coke'), IE('windmill'), IE('waterwheel_segment'), IE('windmill_sail'), IE('windmill_blade')])

    replaceIn(TE('iron_coin'), TE('silver_coin'))
    replaceIn(AL('bronze_sheet'), KJ('bronze_sheet'))

    smeltingRemove(event, MC('iron_ingot'))
    smeltingRemove(event, MC('copper_ingot'))
    smeltingRemove(event, MC('gold_ingot'))
    smeltingRemove(event, MW('aluminium_ingot'))
    smeltingRemove(event, TE('tin_ingot'))
    smeltingRemove(event, TE('lead_ingot'))
    smeltingRemove(event, TE('silver_ingot'))
    smeltingRemove(event, TE('nickel_ingot'))
    smeltingRemove(event, CR('zinc_ingot'))
    smeltingRemove(event, TE('constantan_ingot'))
    smeltingRemove(event, TE('invar_ingot'))
    smeltingRemove(event, TE('electrum_ingot'))
    smeltingRemove(event, TE('bronze_ingot'))
    smeltingRemove(event, TE('signalum_ingot'))
    smeltingRemove(event, TE('lumium_ingot'))
    smeltingRemove(event, TE('enderium_ingot'))
    smeltingRemove(event, IE('ingot_aluminum'))
    smeltingRemove(event, IE('nugget_aluminum'))
    smeltingRemove(event, MC('netherite_ingot'))
    smeltingRemove(event, IE('ingot_nickel'))
    smeltingRemove(event, IE('ingot_silver'))
    smeltingRemove(event, IE('ingot_electrum'))
    smeltingRemove(event, IE('ingot_steel'))
    smeltingRemove(event, IE('ingot_constantan'))
    smeltingRemove(event, IE('ingot_uranium'))
    smeltingRemove(event, IE('ingot_lead'))
    smeltingRemove(event, AE2('silicon'))


    event.remove({ output: TC('cobalt_ingot'), type: 'minecraft:blasting'} );
    event.remove({ output: 'create:scoria', type: 'minecraft:smelting'} );

    unwanted_IE_metals.forEach(e => {
        removeRecOut(IE('ingot_' + e))
        removeRecOut(IE('nugget_' + e))
        removeRecOut(IE('storage_' + e))
    })
    removeRecIn(/tconstruct:raw_cobalt.*/)



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
    event.replaceInput({id: /mw_core:milkyway.machines.cobalt.refinedstorage.*/}, MW('cobalt_mechanism'), MKW('refined_machine'))
    event.replaceInput({id: /mw_core:milkyway.machines.cobalt.refinedstorage.*/}, MW('reinforced_tin_sheet'), MW('reinforced_zinc_sheet'))
    event.replaceInput({id: 'mw_core:milkyway/machines/cobalt/refinedstorage/controller'}, MW('certus_core'), MW('rave_tube'))
    event.replaceInput({id: /mw_core:milkyway.machines.cobalt.refinedstorage.*/}, TE('invar_ingot'), MW('reinforced_zinc_sheet'))
    event.remove({id: 'mw_core:milkyway/machines/cobalt/refinedstorage/cable'})
    event.replaceInput({id: /mw_core:milkyway.machines.cobalt.refinedstorage.interface/}, MW('reinforced_lead_sheet'), MW('reinforced_zinc_sheet'))
    event.remove({ type: AE2('inscriber') })
}
let main_ores = ['coal', 'iron', 'copper', 'zinc', 'gold', 'redstone', 'lapis', 'diamond', 'emerald']
let nether_ores = ['nether_quartz', 'nether_gold']
let thermal_ores = ['apatite', 'cinnabar', 'niter', 'sulfur']

main_ores.forEach(e => {
    removeByID('create:crushing/' + e + '_ore')
    removeByID('create:crushing/deepslate_' + e + '_ore')

})
nether_ores.forEach(e => {
    removeByID('create:crushing/' + e + '_ore')
})
thermal_ores.forEach(e => {
    removeByID('create:compat/thermal/crushing/' + e + '_ore')
})

removeByID(/thermal.machines.press.*/)

remMetalCraft(['thermal:'], 'tin')
remMetalCraft(['thermal:'], 'lead')
remMetalCraft(['thermal:'], 'silver')
remMetalCraft(['thermal:'], 'nickel')
remMetalCraft(['thermal:'], 'constantan')
remMetalCraft(['thermal:'], 'invar')
remMetalCraft(['thermal:'], 'electrum')
remMetalCraft(['thermal:'], 'bronze')
remMetalCraft(['thermal:'], 'signalum')
remMetalCraft(['thermal:'], 'lumium')
remMetalCraft(['thermal:'], 'enderium')
remMetalCraft(['mw_core:'], 'transium')
remMetalCraft(['tconstruct:'], 'pig_iron')
remMetalCraft(['tconstruct:'], 'hepatizon')
remMetalCraft(['tconstruct:'], 'manyullyn')
remMetalCraft(['tconstruct:'], 'queens_slime')
remMetalCraft(['tconstruct:'], 'slimesteel')
remMetalCraft(['tconstruct:'], 'amethyst_bronze')
remMetalCraft(['tconstruct:'], 'rose_gold')
remMetalCraft(['minecraft:'], 'iron')
remMetalCraft(['minecraft:'], 'copper')
remMetalCraft(['minecraft:'], 'gold')
remMetalCraft(['minecraft:'], 'netherite')

removeByID(cck + 'portable_fluid_interface')
removeByID(cck + 'mechanical_pump')
removeByID(cck + 'fluid_valve')
removeByID(cck + 'smart_fluid_pipe')
removeByID(cck + 'fluid_tank')
removeByID(cck + 'hose_pulley')
removeByID(cck + 'brass_hand')
removeByID(cck + 'spout')
removeByID(cck + 'item_drain')
removeByID(cck + 'mechanical_saw')
removeByID(cck + 'mechanical_drill')
removeByID(cck + 'millstone')
removeByID(cck + 'mechanical_mixer')
removeByID(cck + 'mechanical_press')
removeByID(cck + 'encased_fan')
removeByID(cck + 'deployer')
removeByID(cck + 'mechanical_crafter')
removeByID(cck + 'cart_assembler')
removeByID(cck + 'display_board')
removeByID(cck + 'track_station')
removeByID(cck + 'track_signal')
removeByID(cck + 'track_observer')
removeByID(cck + 'track_observer_from_other_plates')
removeByID(cck + 'sequenced_gearshift')
removeByID(cck + 'weighted_ejector')
removeByID(cck + 'mechanical_arm')
removeByID(cck + 'rotation_speed_controller')
removeByID(cck + 'controls')
removeByID(ccl + 'content_observer')
removeByID(ccl + 'content_observerfrom_conversion')
removeByID(ccl + 'stockpile_switchfrom_conversion')
removeByID(ccl + 'display_link')
removeByID(ccl + 'andesite_alloy')
removeByID(ccl + 'andesite_alloy_from_zinc')
removeByID(aen + 'blocks/spatial_io_port')
removeByID(aen + 'blocks/io_port')
removeByID(aen + 'blocks/interfaces_interface')
removeByID(aen + 'blocks/security_station')
removeByID(aen + 'blocks/storage_chest')
removeByID(aen + 'blocks/energy_energy_acceptor')
removeByID(aen + 'crafting/molecular_assembler')
removeByID(aen + 'blocks/cell_workbench')
removeByID(aen + 'crafting/cpu_crafting_unit')
removeByID(aen + 'blocks/crystal_processing_quartz_growth_accelerator')
removeByID(aen + 'cells/spatial_components')
removeByID(aen + 'blocks/spatial_anchor')
removeByID(aen + 'blocks/quantum_ring')
removeByID(aen + 'blocks/quantum_link')
removeByID(aen + 'wireless_part')
removeByID(aen + 'blocks/pattern_providers_interface')
removeByID(aen + 'crafting/cpu_crafting_accelerator')
removeByID(aen + 'crafting/cpu_crafting_monitor')
removeByID(aen + 'parts/tunnels_me')
removeByID(aen + 'cells/item_storage_components_cell_1k_part')
removeByID(aen + 'blocks/controller')
removeByID(aen + 'blocks/energy_energy_cell')
removeByID(aen + 'blocks/crystal_processing_charger')
removeByID(aen + 'blocks/storage_drive')
removeByID(/refinedstorage:.*storage_disk.*/)
removeByID(/refinedstorage:.*_processor/)
removeByID(/refinedstorage:.*upgrade.*/)
removeByID(RS('controller'))
removeByID(RS('grid'))
removeByID(RS('crafter'))
removeByID(RS('disk_drive'))
removeByID(RS('fluid_interface'))
removeByID(RS('interface'))
removeByID(RS('security_manager'))
removeByID(RS('network_receiver'))
removeByID(RS('network_transmitter'))
removeByID(RS('relay'))
removeByID(RS('external_storage'))
removeByID(RS('cable'))
removeByID(RS('security_card'))

removeByID(TE('enderium_dust_2'))
removeByID(TE('lumium_dust_4'))
removeByID(TE('signalum_dust_4'))
removeByID(TE('constantan_dust_2'))
removeByID(TE('invar_dust_3'))
removeByID(TE('electrum_dust_2'))
removeByID(TE('bronze_dust_4'))

removeByID(/network.cells.fluid.*/)
removeByID(/network.cells.item.*/)
removeByID(/mw_core:.*storage_part.*/)


removeByID(tm + sml + '/' + sml + '_iron_dust')
removeByID(tm + sml + '/' + sml + '_bronze_dust')
removeByID(tm + sml + '/' + sml + '_gold_dust')
removeByID(tm + sml + '/' + sml + '_copper_dust')
removeByID(tm + sml + '/' + sml + '_lead_dust')
removeByID(tm + sml + '/' + sml + '_nickel_dust')
removeByID(tm + sml + '/' + sml + '_silver_dust')
removeByID(tm + sml + '/' + sml + '_alloy_electrum')
removeByID(tm + sml + '/' + sml + '_alloy_signalum')
removeByID(tm + sml + '/' + sml + '_alloy_constantan')
removeByID(tm + sml + '/' + sml + '_alloy_lumium')
removeByID(tm + sml + '/' + sml + '_alloy_bronze')
removeByID(tm + sml + '/' + sml + '_alloy_invar')
removeByID(tm + sml + '/' + sml + '_alloy_enderium')
removeByID(tm + sml + '/' + sml + '_alloy_netherite')
removeByID(tm + sml + '/' + sml + '_raw_nickel')
removeByID(tm + sml + '/' + sml + '_raw_gold')

removeByID(tm + pulv + '/' + pulv + '_iron_ingot_to_dust')
removeByID(tm + pulv + '/' + pulv + '_silver_ingot_to_dust')
removeByID(tm + pulv + '/' + pulv + '_copper_ingot_to_dust')
removeByID(tm + pulv + '/' + pulv + '_gold_ingot_to_dust')
removeByID(tm + pulv + '/' + pulv + '_lead_ingot_to_dust')
removeByID(tm + pulv + '/' + pulv + '_nickel_ingot_to_dust')
removeByID(tm + pulv + '/' + pulv + '_tin_ingot_to_dust')
removeByID(tm + pulv + '/' + pulv + '_sulfur')
removeByID(tm + pulv + '/' + pulv + '_emerald')
removeByID(tm + pulv + '/' + pulv + '_apatite')
removeByID(tm + pulv + '/' + pulv + '_diamond')
removeByID(tm + pulv + '/' + pulv + '_cinnabar')
removeByID(tm + pulv + '/' + pulv + '_quartz')
removeByID(tm + pulv + '/' + pulv + '_lapis')
removeByID(tm + pulv + '/' + pulv + '_niter')

removeByID(tm + crys + '/' + crys + '_' + 'amethyst_cluster')
removeByID(tm + crys + '/' + crys + '_' + 'emerald')
removeByID(tm + crys + '/' + crys + '_' + 'cinnabar')
removeByID(tm + crys + '/' + crys + '_' + 'apatite')
removeByID(tm + crys + '/' + crys + '_' + 'quartz')
removeByID(tm + crys + '/' + crys + '_' + 'sulfur')
removeByID(tm + crys + '/' + crys + '_' + 'diamond')
removeByID(tm + crys + '/' + crys + '_' + 'lapis')
removeByID(tm + crys + '/' + crys + '_' + 'niter')

removeByID("create:mixing/andesite_alloy_from_zinc")
removeByID("create:mixing/andesite_alloy")
//removeByID("tconstruct:smeltery/entity_melting/bee")
//removeByID("tconstruct:smeltery/melting/slime/honey_block")
removeByID("thermal:machines/crucible/crucible_honey_block_to_honey")
removeByID("ae2:materials/advancedcard")
removeByID("ae2:materials/basiccard")
removeByID("thermal:rubber_from_dandelion")
removeByID("create:splashing/red_sand")
removeByID("create:splashing/gravel")
removeByID("ae2:misc/tank_sky_stone")
removeByID("create:sequenced_assembly/precision_mechanism")
removeByID("thermal:machine_press")
removeByID("thermal:machine_refinery")
removeByID("ae2:materials/annihilationcore")
removeByID("ae2:materials/formationcore")
removeByID("create:crafting/materials/electron_tube")
//removeByID("tconstruct:smeltery/casting/seared/smeltery_controller")
removeByID("create:mechanical_crafting/potato_cannon")
removeByID("create:mechanical_crafting/wand_of_symmetry")
removeByID("tconstruct:smeltery/seared/drain")
removeByID("tconstruct:smeltery/seared/chute")
removeByID("tconstruct:smeltery/seared/duct")
removeByID("tconstruct:smeltery/scorched/drain")
removeByID("tconstruct:smeltery/scorched/chute")
removeByID("tconstruct:smeltery/scorched/duct")
//removeByID("tconstruct:smeltery/casting/scorched/foundry_controller")
removeByID("alloyed:mixing/steel_ingot")
removeByID("thermal:fluid_cell")
removeByID("thermal:rubber_from_vine")
removeByID("thermal:rubber_3")
removeByID("thermal:energy_cell")
removeByID("thermal:energy_cell_frame")
removeByID(/thermal:earth_charge.*_from_.*/)
removeByID(/refinedstorage:coloring_recipes.*/)
//removeByID()
//removeByID()
//removeByID()



