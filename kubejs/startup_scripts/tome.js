


onEvent('item.registry', event => {

    global.tomeTypes = []
    global.rituals = []

    global.alloyTome = []
    global.alloyRituals = []
    let tome = (name, c1, rituals) => {
        let id = name.toLowerCase().replace("'", "").split(' ').join('_')
        global.tomeTypes.push(id)
        global.rituals[id] = rituals
        event.create(`milkyway:tome_${id}`)
            .color(1, c1)
            .parentModel("milkyway:item/tome")
            .texture("milkyway:item/tome")
            .displayName(`Tome of ${name}`)
            .unstackable()
    }
    let alTome = (c1, rituals) => {
        global.alloyTome.push(`milkyway:alloying_tome`)
        global.alloyRituals[`milkyway:alloying_tome`] = rituals
        event.create(`milkyway:alloying_tome`)
            .color(1, c1)
            .parentModel("milkyway:item/tome")
            .texture("milkyway:item/tome")
            .displayName(`Tome of Smithing`)
            .unstackable()
    }
    tome('Alchemy', 0x00FF00, [])
    alTome(0x00FFFF, [
    ])
    tome('Necromancy', 0xFF0000, [])
})