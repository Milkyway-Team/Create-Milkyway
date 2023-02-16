// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')
let types = ['Certus', 'Fluix']
onEvent('item.registry', event => {
	// Register new items here
	 event.create('tin_ore_dust').displayName('Tin Ore Dust')

	types.forEach(e => {
		let id = e.toLowerCase()
		event.create('growing_' + id + '_seed').texture("ae2:item/crystal_seed_" + id).displayName(e + ' Quartz Seed')
		event.create('tiny_' + id + '_crystal').texture("ae2:item/crystal_seed_" + id + "2").displayName('Tiny ' + e + ' Quartz Crystal')
		event.create('growing_tiny_' + id + '_crystal').texture("ae2:item/crystal_seed_" + id + "2").displayName('Tiny ' + e + ' Quartz Crystal')
		event.create('small_' + id + '_crystal').texture("ae2:item/crystal_seed_" + id + "3").displayName('Small ' + e + ' Quartz Crystal')
		event.create('growing_small_' + id + '_crystal').texture("ae2:item/crystal_seed_" + id + "3").displayName('Small ' + e + ' Quartz Crystal')
	});
})

onEvent('block.registry', event => {
	// Register new blocks here
	 event.create('gem_rock').material('stone').hardness(1.0).displayName('Rock')
	 event.create('metal_rock').material('stone').hardness(1.0).displayName('Rock')
	 event.create('alloy_rock').material('stone').hardness(1.0).displayName('Rock')

})
