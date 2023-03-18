// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')
onEvent('item.registry', event => {
	//event.create('infernal_mesh','createsifter:mesh').displayName('Infernal mesh')
	// Register new items here
	 event.create('mw_core:tin_ore_dust').displayName('Tin Ore Dust')
	 let crystal = (name, rarity) => {
		 let id = name.toLowerCase()
		 event.create('ae2:growing_' + id + '_seed').texture("ae2:item/crystal_seed_" + id).displayName(name + ' Quartz Seed').rarity(rarity ? rarity : RARITY_COMMON)
		 event.create('ae2:tiny_' + id + '_crystal').texture("ae2:item/crystal_seed_" + id + "2").displayName('Tiny ' + name + ' Quartz Crystal').rarity(rarity ? rarity : RARITY_COMMON)
		 event.create('ae2:growing_tiny_' + id + '_crystal').texture("ae2:item/crystal_seed_" + id + "2").displayName('Tiny ' + name + ' Quartz Crystal').rarity(rarity ? rarity : RARITY_COMMON)
		 event.create('ae2:small_' + id + '_crystal').texture("ae2:item/crystal_seed_" + id + "3").displayName('Small ' + name + ' Quartz Crystal').rarity(rarity ? rarity : RARITY_COMMON)
		 event.create('ae2:growing_small_' + id + '_crystal').texture("ae2:item/crystal_seed_" + id + "3").displayName('Small ' + name + ' Quartz Crystal').rarity(rarity ? rarity : RARITY_COMMON)
	 }
	 crystal('Certus')
	crystal('Fluix')
let sheetSet = (name, rarity) => {
	let id = name.toLowerCase()
	event.create('mw_core:unprocessed_' + id + '_sheet').texture("kubejs:item/unprocessed_" + id + "_sheet").displayName('Unprocessed ' + name + ' Sheet').rarity(rarity ? rarity : RARITY_COMMON)
	event.create('mw_core:sturdy_' + id + '_sheet').texture("kubejs:item/sturdy_" + id + "_sheet").displayName('Sturdy ' + name + ' Sheet').rarity(rarity ? rarity : RARITY_COMMON)
	event.create('mw_core:reprocessed_' + id + '_sheet').texture("kubejs:item/reprocessed_" + id + "_sheet").displayName('Reprocessed ' + name + ' Sheet').rarity(rarity ? rarity : RARITY_COMMON)
	event.create('mw_core:reinforced_' + id + '_sheet').texture("kubejs:item/reinforced_" + id + "_sheet").displayName('Reinforced ' + name + ' Sheet').rarity(rarity ? rarity : RARITY_COMMON)
}
	sheetSet('Zinc')

let metalSet = (name, rarity) => {
	let id = name.toLowerCase()
	event.create('milkyway:' + id + '_ingot').texture("kubejs:item/" + id + "_ingot").displayName(name + ' Ingot').rarity(rarity ? rarity : RARITY_COMMON)
	event.create('milkyway:' + id + '_nugget').texture("kubejs:item/" + id + "_nugget").displayName(name + ' Nugget').rarity(rarity ? rarity : RARITY_COMMON)
	event.create('milkyway:' + id + '_sheet').texture("kubejs:item/" + id + "_sheet").displayName(name + ' Sheet').rarity(rarity ? rarity : RARITY_COMMON)
}
    //metalSet('Bronze')
	//metalSet('Steel')
	let mechanism = (name, rarity) => {
		let id = name.toLowerCase()
		event.create('mw_core:' + id + '_mechanism').texture("kubejs:item/" + id + "_mechanism").displayName(name + ' Mechanism').rarity(rarity ? rarity : RARITY_COMMON)
		event.create('mw_core:incomplete_' + id + '_mechanism').texture("kubejs:item/incomplete_" + id + "_mechanism").type('create:sequenced_assembly').displayName('Incomplete ' + name + ' Mechanism')
	}
	mechanism('Refined', RARITY_UNCOMMON)
})

onEvent('block.registry', event => {
	// Register new blocks here
	 event.create('gem_rock').material('stone').hardness(1.0).displayName('Rock')
	 event.create('metal_rock').material('stone').hardness(1.0).displayName('Rock')
	 event.create('alloy_rock').material('stone').hardness(1.0).displayName('Rock')
	let machine = (name, layer) => {
		let id = name.toLowerCase()
		event.create('milkyway:' + id + '_machine')
			.model('kubejs:block/' + id + '_machine')
			.material('lantern')
			.hardness(3.0)
			.displayName(name + ' Machine')
			.notSolid()
			.renderType(layer)
	}
	machine('Refined', "cutout")

})

