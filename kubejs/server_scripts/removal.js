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

let cck = ['create:crafting/kinetics/']
let ccl = ['create:crafting/logistics/']
let aen = ['ae2:network/']
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
function unwantedRecipes(event) {

    function replaceIn(originIn, newIn) {
        event.replaceInput({}, originIn, newIn)
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
    removeRecID(/mw_core:compacting.*coin/)

    removeRecTyp([IE('alloy'), IE('arc_furnace'), IE('blast_furnace_fuel'), IE('blast_furnace'), IE('bottling_machine'), IE('coke_oven'), IE('fermenter'),
        IE('metal_press'), IE('mixer'), IE('refinery'), IE('sawmill'), IE('squeezer'), TE('centrifuge')])


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
    removeRecOut(TE('machine_centrifuge'))
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
removeByID(RS('security_card'))



