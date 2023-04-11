let metals = ['invar', 'cobalt', 'bronze', 'constantan', 'copper', 'queens_slime', 'iron', 'pig_iron', 'slimesteel', 'hepatizon', 'manyullyn', 'amethyst_bronze', 'electrum', 'rose_gold', 'lead', 'steel', 'silver']
let mwMetals = ['nethersteel', 'magisteel', 'transium', ]
onEvent('recipes', event => {
    log.push('Registering Tinkers Compat')
    crucible(event)
    log.push('Registered Tinkers Compat')
})
let tinkerCrucible = (event, input, output, fluidAmount) => {
    event.custom({
        "type": "thermal:crucible",
        "ingredient": [
            input
        ],
        "result": [
            {
                "fluid": output,
                "amount": fluidAmount
            }
        ],
        "energy": 20000
    }).id('milkyway:processing/crucible/' + input.split(':')[1])
}
function crucible(event){
    metals.forEach(e => {
    })
}
