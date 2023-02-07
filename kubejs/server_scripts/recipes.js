settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

var seed
var log = []

let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) => MOD("ae2", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let CR = (id, x) => MOD("create", id, x)
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

let colours = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
let native_metals = ['iron', 'zinc', 'lead', 'copper', 'nickel', 'gold', 'silver', 'aluminum', 'uranium', 'cobalt', 'tin']
let wood_types = [MC('oak'), MC('spruce'), MC('birch'), MC('jungle'), MC('acacia'), MC('dark_oak'), MC('crimson'), MC('warped'), FA('edelwood'), FA('cherry'), FA('mysterywood'), QA('blossom'), QA('azalea'), TC('skyroot'), TC('greenheart')]


let donutCraft = (event, output, center, ring) => {
	event.shaped(output, [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: center,
		S: ring
	})
}
let cobaltMachine = (event, output, middle, topMiddle, middleSide, lowerSheet) => {
	event.shaped(output, [
		'B1B',
		'232',
		'SMS'
	], {
		3: middle,
		2: middleSide,
		1: topMiddle,
		S: lowerSheet,
		B: 'mw_core:sturdy_brass_sheet',
		M: 'mw_core:cobalt_mechanism'
	})
}
function ifiniDeploying(output, input, tool) {
	return {
		"type": "create:deploying",
		"ingredients": [
			Ingredient.of(input).toJson(),
			Ingredient.of(tool).toJson()
		],
		"results": [
			Item.of(output).toResultJson()
		],
		"keepHeldItem": true
	}
}

onEvent('recipes', event => {
	log.push('Registering Recipes')
	basicMechanism(event)
	unwantedRecipes(event)
	tweaks(event)
	cobaltMechanism(event)
	log.push('Recipes Updated')
	})
	onEvent('item.tags', event => {
		event.get("tconstruct:anvil_metal")
		.remove("#forge:storage_blocks/nethersteel")
		event.get('randomium:blacklist')
		.add(/.*creative.*/)
		.add(/.*insulation.*/)
		.add(/ftblibrary.*/)
		.add(/ftbquests.*/)
		.add(/mw_core:.*_bucket/)
		.add(/mw_core:.*_mechanism/)
		.add(/mw_core:.*_charm/)
		.add(/tconstruct:.*_bucket/)
		.add(/mw_core:music_disc.*/)
		.add(/create:precision_mechanism/)
		.add(/quark:diamond_heart/)

    event.get('create:upright_on_belt')
		.add(/mw_core:.*_plush/)
		.add(/mw_core:sweet_berry_juice/)
	})
	onEvent('block.tags', event => {
		event.get("tconstruct:anvil_metal")
		.remove("#forge:storage_blocks/nethersteel")
	})

function unwantedRecipes(event) {

	native_metals.forEach(e => {
		event.remove({ type: MC("smelting"), input: F("#dusts/" + e) })
		event.remove({ type: MC("blasting"), input: F("#dusts/" + e) })
		event.remove({ type: TC("melting"), input: F("#dusts/" + e) })
		event.replaceInput({ type: "tconstruct:melting"}, F('#dusts/' + e), F('#dusts/processed' + e))
	})
}
function tweaks(event){

}

function basicMechanism(event) {

}

function cobaltMechanism(event){
	event.remove({ id: "thermal:machine_crystallizer" })
	cobaltMachine(event, TE("machine_crystallizer"), CR("fluid_tank"), CR("rose_quartz_lamp"), TE("signalum_gear"), MW("sturdy_copper_sheet"))
}
