// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

onEvent('client.generate_assets', event => {
    const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
    // rename mutton to BAAAAAAA
    rename('create:brass_hand', "Nickel Hand")
    rename('mw_core:incomplete_manyullyn_mechanism', "Incomplete Manyullyn Mechanism")
    rename('mw_core:rave_tube', "Chromatic Core")
    rename('create:crushed_constantan', 'Blister Copper')
    rename('ae2:silicon', "Certus Silicon")
    rename('tconstruct:cobalt_ore', "Nether Cobalithron Ore")
    rename('thermal:machine_centrifuge', 'Separator')
    rename('mw_core:unwrapped_light_bulb', 'Unwrapped Lightbulb')
    rename('createarmory:five_five_six_mold', '556 Casing Gold Cast')
    rename('createarmory:nine_mm_mold', '9mm Casing Gold Cast')
    rename('createarmory:fifty_cal_mold', '50 Caliber Casing Gold Cast')


    //event.addLang("desc.immersiveengineering.info.blueprint.weaponry","Weaponry")
    console.info('Custom Item Names Reloaded!')
})
