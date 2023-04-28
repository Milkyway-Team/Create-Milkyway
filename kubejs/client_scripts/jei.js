let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let IE = (id, x) => MOD("immersiveengineering", id, x)

onEvent('jei.hide.items', event => {
	 event.hide("#mw_core:jei_hidden")
})
onEvent('jei.remove.categories', event => {
	//event.remove([IE('arcfurnace'), IE('arcfurnace_recycling'), IE('blastfurnace'), IE('blastfurnace_fuel'), IE('alloysmelter'), IE('bottlingmachine'), IE('fermenter'), IE('metalpress'), IE('mixer'), IE('refinery'), IE('sawmill'), IE('squeezer')])
	event.remove([IE('blastfurnace'), IE('blastfurnace_fuel'), IE('bottlingmachine')])
})

