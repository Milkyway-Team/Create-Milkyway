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
let EG = (id, x) => MOD("extendedgears", id, x)

let CEI = (id, x) => MOD('createenchantmentindustry', id, x)

let native_metals = ['iron', 'zinc', 'lead', 'copper', 'nickel', 'gold', 'silver', 'aluminum', 'uranium', 'cobalt', 'tin']
let wood_types = [MC('oak'), MC('spruce'), MC('birch'), MC('jungle'), MC('acacia'), MC('dark_oak'), MC('crimson'), MC('warped'), FA('edelwood'), FA('cherry'), FA('mysterywood'), QA('blossom'), QA('azalea'), TC('skyroot'), TC('greenheart')]
let fruitnvegcrates = [FD('tomato_crate'), FD('onion_crate'), FD('rice_bale'), FD('rice_bag'), QA('apple_crate'), MC('melon'), FD('carrot_crate'), FD('potato_crate'), FD('beetroot_crate'), FD('cabbage_crate'), MC('pumpkin'), QA('berry_sack'), QA('glowberry_sack')]
let fruitnveg = [FD('tomato'), FD('onion'), FD('rice_panicle'), MC('apple'), MC('melon_slice'), MC('carrot'), MC('potato'), MC('beetroot'), MC('sweet_berries'), MC('glow_berries'), FD('cabbage'), FD('pumpkin_slice')]
let IC = TE('iron_coin')
let RA = IE('redstone_acid')

onEvent('recipes', event => {
    log.push('Abandoning Communism')
    capitalism(event)
    log.push('Capitalism Achieved!')
})
function capitalism(event){
    fruitnvegcrates.forEach(fvc => {
        event.custom({
            "type": "thermal:centrifuge",
            "ingredient": {
                "item": fvc
            },
            "result": [
                {
                    "item": IC,
                    "count": 18
                },
                {
                    "fluid": RA,
                    "amount": 180
                }
            ],
            "energy": 1600
        })
    })
    fruitnveg.forEach(fv => {
        event.custom({
            "type": "thermal:centrifuge",
            "ingredient": {
                "item": fv
            },
            "result": [
                {
                    "item": IC,
                    "count": 2
                },
                {
                    "fluid": RA,
                    "amount": 20
                }
            ],
            "energy": 1600
        })
    })
}

