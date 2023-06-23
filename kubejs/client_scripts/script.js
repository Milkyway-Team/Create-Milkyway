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
    rename('ae2:silicon', "Advanced Silicon")
    rename('tconstruct:cobalt_ore', "Nether Cobalithron Ore")
    rename('thermal:machine_centrifuge', 'Separator')
    rename('ironchest:copper_chest', 'Andesite Chest')
    rename('ironchest:iron_chest', 'Coppper Chest')
    rename('ironchest:gold_chest', 'Brass Chest')
    rename('ironchest:trapped_copper_chest', 'Trapped Andesite Chest')
    rename('ironchest:trapped_iron_chest', 'Trapped Copper Chest')
    rename('ironchest:trapped_gold_chest', 'Trapped Brass Chest')
    rename('ironchest:wood_to_copper_chest_upgrade', 'Wood to Andesite Chest Upgrade')
    rename('ironchest:copper_to_iron_chest_upgrade', 'Andesite to Copper Chest Upgrade')
    rename('ironchest:iron_to_gold_chest_upgrade', 'Copper to Brass Chest Upgrade')

    //event.addLang("desc.immersiveengineering.info.blueprint.weaponry","Weaponry")
    console.info('Custom Item Names Reloaded!')
})
