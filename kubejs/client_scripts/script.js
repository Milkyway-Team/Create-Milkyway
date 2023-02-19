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
    rename('minecraft:enchanted_golden_apple', "Arcane Apple")
    rename('mw_core:incomplete_manyullyn_mechanism', "Incomplete Manyullyn Mechanism")
    rename('thermal:machine_press', "Capitalism-inator")
    rename('immersiveengineering:plate_aluminum', "Aluminium Sheet")
    console.info('Custom Item Names Reloaded!')
})