// priority: 0
console.info('Hello, World! (You will only see this line once in console, during startup)')
onEvent('item.registry', event => {
	//const BlueprintCraftingRecipe = java("blusunrize.immersiveengineering.api.crafting.BlueprintCraftingRecipe")
    //BlueprintCraftingRecipe.recipeCategories.add("weaponry")
	//event.create('infernal_mesh','createsifter:mesh').displayName('Infernal mesh')
	// Register new items here
	 event.create('mw_core:tin_ore_dust').displayName('Tin Ore Dust')
	event.create('immersiveengineering:filled_shell').displayName('Filled Shell').texture('kubejs:item/filled_shell')
	event.create('immersiveengineering:filled_casing').displayName('Filled Casing').texture('kubejs:item/filled_casing')
	event.create('milkyway:copper_concentrate').displayName('Cobalithron').texture('milkyway:item/crushed_copper_cobalt_ore')
	event.create('milkyway:cobalt_slag').displayName('Cobalt Slag').texture('milkyway:item/cobalt_slag')
	event.create('milkyway:monazite_rod').displayName('Monazite Rod').texture('milkyway:item/monazite_rod')
	event.create('milkyway:ekanite_rod').displayName('Ekanite Rod').texture('milkyway:item/ekanite_rod')
	event.create('milkyway:heliodor_rod').displayName('Heliodor Rod').texture('milkyway:item/heliodor_rod')
	event.create('milkyway:monazite_dust').displayName('Monazite Dust').texture('milkyway:item/monazite_dust')
	event.create('milkyway:ekanite_dust').displayName('Ekanite Dust').texture('milkyway:item/ekanite_dust')
	event.create('milkyway:heliodor_dust').displayName('Heliodor Dust').texture('milkyway:item/heliodor_dust')

	event.create('thermal:fluid_upgrade_augment_1').displayName('Hardened Sealed Components').parentModel('kubejs:item/upgrade_augment_1').texture('milkyway:item/fluid_upgrade_augment_1')
	event.create('thermal:fluid_upgrade_augment_2').displayName('Reinforced Sealed Components').parentModel('kubejs:item/upgrade_augment_2').texture('milkyway:item/fluid_upgrade_augment_2')
	event.create('thermal:fluid_upgrade_augment_3').displayName('Inductive Sealed Components').parentModel('kubejs:item/upgrade_augment_3').texture('milkyway:item/fluid_upgrade_augment_3')

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
onEvent('fluid.registry', event => {
	event.create('mw_core:soda')
		.thinTexture(0x321705)
		.bucketColor(0x321705)
		.displayName('Soda')
		.stillTexture('tconstruct:block/fluid/slime_channel_still_diagonal')
		.flowingTexture('milkyway:block/slime_channel_diagonal')
	event.create('milkyway:copper_concentrate')
		.thickTexture(0x410412)
		.bucketColor(0x2a011d)
		.displayName('Molten Cobalithron')
		.stillTexture('tconstruct:block/fluid/molten/still')
		.flowingTexture('tconstruct:block/fluid/molten/flowing')
	event.create('milkyway:molten_monazite')
		.bucketColor(0xde994b)
		.displayName('Molten Monazite')
		.stillTexture('milkyway:block/monazite_still')
		.flowingTexture('milkyway:block/monazite_flowing')
	event.create('milkyway:molten_ekanite')
		.bucketColor(0x005f11)
		.displayName('Molten Ekanite')
		.stillTexture('milkyway:block/ekanite_still')
		.flowingTexture('milkyway:block/ekanite_flowing')
	event.create('milkyway:molten_heliodor')
		.bucketColor(0xd6ce89)
		.displayName('Molten Heliodor')
		.stillTexture('milkyway:block/heliodor_still')
		.flowingTexture('milkyway:block/heliodor_flowing')
	event.create('milkyway:liquified_logic')
		.bucketColor(0x8dffcc)
		.displayName('Liquified Logic')
		.stillTexture('milkyway:block/logic_still')
		.flowingTexture('milkyway:block/logic_flowing')
})
onEvent('block.modification', event => {
	event.modify('tconstruct:cobalt_ore', block => {
		block.material = "Lantern"
	})
})

