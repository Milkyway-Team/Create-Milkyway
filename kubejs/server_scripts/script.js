// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
onEvent('block.right_click', event => {
    if (event.player.isFake() && event.player.mainHandItem.id == 'forbidden_arcanus:soul_extractor' && event.block.id == 'soul_sand') {
        event.block.popItemFromFace('forbidden_arcanus:soul', event.getFacing())
        event.block.set('forbidden_arcanus:soulless_sand')
        event.player.damageHeldItem("MAIN_HAND", 1)
    }
})
onEvent('entity.death', event => {
    if (event.entity.block.id == 'forbidden_arcanus:soulless_sand') {
        event.entity.block.set('minecraft:soul_sand')
        event.server.runCommandSilent(`particle minecraft:soul ${event.entity.block.x + 0.5} ${event.entity.block.y + 0.5} ${event.entity.block.z + 0.5} 0 0.1 0 0.1 10`)
    } else if (event.entity.block.down.id == 'forbidden_arcanus:soulless_sand' && event.entity.block.id == 'air') {
        event.entity.block.down.set('minecraft:soul_sand')
        event.server.runCommandSilent(`particle minecraft:soul ${event.entity.block.down.x + 0.5} ${event.entity.block.down.y + 0.5} ${event.entity.block.down.z + 0.5} 0 0.1 0 0.1 10`)
    }
})