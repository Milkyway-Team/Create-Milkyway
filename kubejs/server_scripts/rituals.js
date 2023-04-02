onEvent('recipes', event => {
    log.push('Registering Rituals')
    summoningRituals(event)
    alloyingRituals(event)
    necromancyRituals(event)

    log.push('Rituals Updated')
})
const necroTome = 'milkyway:tome_necromancy'
const alloyTome = 'milkyway:alloying_tome'

function summoningRituals(event){
    event.recipes.summoningrituals
        .altar(Ingredient.of("tconstruct:piglin_head"))
        .itemOutput('3x minecraft:blackstone')
        .itemOutput('6x minecraft:emerald_block')
        .mobOutput('villager')
        .input('5x minecraft:emerald')
        .input('10x amethyst_shard')
        .input(Ingredient.of('10x #minecraft:piglin_loved'))
        .sacrifice('pig', 3)
        .sacrificeRegion(5, 5)
        .recipeTime(200)
        .blockBelow(FA('arcane_polished_darkstone_pillar'))
        .weather('rain')
        .id('milkyway:summoningrituals/villager');
    event.recipes.summoningrituals
        .altar(Ingredient.of("forbidden_arcanus:mundabitur_dust"))
        .itemOutput('32x forbidden_arcanus:arcane_gold_ingot')
        .input('32x minecraft:gold_ingot')
        .input('32x forbidden_arcanus:arcane_crystal_dust')
        .input('16x minecraft:charcoal')
        .blockBelow(FA('arcane_polished_darkstone_pillar'))
        .recipeTime(200)
        .id('milkyway:summoningrituals/arcane_gold_ingot');

}
function alloyingRituals(event){
    event.recipes.summoningrituals
        .altar(Ingredient.of(alloyTome))
        .itemOutput('8x alloyed:bronze_ingot')
        .itemOutput('milkyway:alloying_tome')
        .input('thermal:tin_ingot')
        .input('3x minecraft:copper_ingot')
        .input("forbidden_arcanus:mundabitur_dust")
        .sacrifice('pig', 8)
        .sacrificeRegion(8, 8)
        .recipeTime(400)
        .blockBelow('forbidden_arcanus:clibano_core')
        .id('milkyway:summoningrituals/alloying/bronze_ingot');
    event.recipes.summoningrituals
        .altar(Ingredient.of("milkyway:alloying_tome"))
        .itemOutput('4x create:brass_ingot')
        .itemOutput('milkyway:alloying_tome')
        .input('create:zinc_ingot')
        .input('minecraft:copper_ingot')
        .input("forbidden_arcanus:mundabitur_dust")
        .sacrifice('pig', 8)
        .sacrificeRegion(8, 8)
        .recipeTime(400)
        .blockBelow('forbidden_arcanus:clibano_core')
        .id('milkyway:summoningrituals/alloying/brass_ingot');
    event.recipes.summoningrituals
        .altar(Ingredient.of(alloyTome))
        .itemOutput('6x thermal:invar_ingot')
        .itemOutput('milkyway:alloying_tome')
        .input('2x minecraft:iron_ingot')
        .input('thermal:nickel_ingot')
        .input("forbidden_arcanus:mundabitur_dust")
        .sacrifice('pig', 8)
        .sacrificeRegion(8, 8)
        .recipeTime(400)
        .blockBelow('forbidden_arcanus:clibano_core')
        .id('milkyway:summoningrituals/alloying/invar_ingot');
    event.recipes.summoningrituals
        .altar(Ingredient.of(alloyTome))
        .itemOutput('4x tconstruct:rose_gold_ingot')
        .itemOutput('milkyway:alloying_tome')
        .input('minecraft:copper_ingot')
        .input('minecraft:gold_ingot')
        .input("forbidden_arcanus:mundabitur_dust")
        .sacrifice('pig', 8)
        .sacrificeRegion(8, 8)
        .recipeTime(400)
        .blockBelow('forbidden_arcanus:clibano_core')
        .id('milkyway:summoningrituals/alloying/rose_gold_ingot');
    event.recipes.summoningrituals
        .altar(Ingredient.of(alloyTome))
        .itemOutput('4x createbigcannons:cast_iron_ingot')
        .itemOutput('milkyway:alloying_tome')
        .input('2x minecraft:iron_ingot')
        .input('tconstruct:pig_iron_ingot')
        .input("forbidden_arcanus:mundabitur_dust")
        .sacrifice('pig', 8)
        .sacrificeRegion(8, 8)
        .recipeTime(400)
        .blockBelow('forbidden_arcanus:clibano_core')
        .id('milkyway:summoningrituals/alloying/cast_iron_ingot');
    event.recipes.summoningrituals
        .altar(Ingredient.of(alloyTome))
        .itemOutput('8x createbigcannons:nethersteel_ingot')
        .itemOutput('milkyway:alloying_tome')
        .input('3x alloyed:steel_ingot')
        .input('minecraft:netherite_scrap')
        .input("forbidden_arcanus:mundabitur_dust")
        .sacrifice('pig', 8)
        .sacrificeRegion(8, 8)
        .recipeTime(400)
        .blockBelow('forbidden_arcanus:clibano_core')
        .id('milkyway:summoningrituals/alloying/nethersteel_ingot');
    event.recipes.summoningrituals
        .altar(Ingredient.of(alloyTome))
        .itemOutput('2x tconstruct:amethyst_bronze_ingot')
        .itemOutput('milkyway:alloying_tome')
        .input('minecraft:copper_ingot')
        .input('minecraft:amethyst_shard')
        .input("forbidden_arcanus:mundabitur_dust")
        .sacrifice('pig', 8)
        .sacrificeRegion(8, 8)
        .recipeTime(400)
        .blockBelow('forbidden_arcanus:clibano_core')
        .id('milkyway:summoningrituals/alloying/amethyst_bronze_ingot');
}
function necromancyRituals(event){
    event.recipes.summoningrituals
        .altar(Ingredient.of(necroTome))
        .itemOutput('10x minecraft:glass_bottle')
        .mobOutput(
        SummoningOutput.mob('zombie')
        .count(5)
        .offset(2, 1, 2)
        .spread(2, 0, 2)
        .data({ Attributes: [{ Name: 'Summoned Zombie'}] })
        )
        .input('5x forbidden_arcanus:corrupti_dust')
        .input('10x tconstruct:blood_bottle')
        .input(Ingredient.of('5x #forge:foods/meat/raw'))
        .input('5x forbidden_arcanus:dark_soul')
        .sacrificeRegion(5, 5)
        .recipeTime(200)
        .blockBelow('forbidden_arcanus:runic_chiseled_polished_darkstone', { activated: true })
        .dayTime('nIGhT')
        .id('milkyway:summoningrituals/necromancy/zombie');
    event.recipes.summoningrituals
        .altar(Ingredient.of(necroTome))
        .itemOutput('10x minecraft:glass_bottle')
        .mobOutput(
            SummoningOutput.mob('husk')
                .count(5)
                .offset(2, 1, 2)
                .spread(2, 0, 2)
                .data({ Attributes: [{ Name: 'Summoned Husk'}] })
        )
        .input('5x forbidden_arcanus:corrupti_dust')
        .input('10x tconstruct:blood_bottle')
        .input('5x forbidden_arcanus:dark_soul')
        .input('5x minecraft:sand')
        .sacrificeRegion(5, 5)
        .recipeTime(200)
        .blockBelow('forbidden_arcanus:runic_chiseled_polished_darkstone', { activated: true })
        .dayTime('day')
        .id('milkyway:summoningrituals/necromancy/husk');
    event.recipes.summoningrituals
        .altar(Ingredient.of(necroTome))
        .itemOutput('10x minecraft:glass_bottle')
        .mobOutput(
            SummoningOutput.mob('drowned')
                .count(5)
                .offset(2, 1, 2)
                .spread(2, 0, 2)
                .data({ Attributes: [{ Name: 'Summoned Drowned'}] })
        )
        .input('5x forbidden_arcanus:corrupti_dust')
        .input('10x tconstruct:blood_bottle')
        .input('5x forbidden_arcanus:dark_soul')
        .input('5x minecraft:prismarine_crystals')
        .sacrificeRegion(5, 5)
        .recipeTime(200)
        .blockBelow('forbidden_arcanus:runic_chiseled_polished_darkstone', { activated: true })
        .dayTime('nIGhT')
        .weather('rain')
        .id('milkyway:summoningrituals/necromancy/drowned');
    event.recipes.summoningrituals
        .altar(Ingredient.of(necroTome))
        .mobOutput(
            SummoningOutput.mob('blaze')
                .count(5)
                .offset(2, 1, 2)
                .spread(2, 0, 2)
                .data({ Attributes: [{ Name: 'Summoned Blaze'}] })
        )
        .input('5x forbidden_arcanus:corrupti_dust')
        .input('5x minecraft:fire_charge')
        .input('5x minecraft:skeleton_skull')
        .input('5x forbidden_arcanus:dark_soul')
        .input('8x minecraft:blaze_rod')
        .sacrificeRegion(5, 5)
        .recipeTime(200)
        .blockBelow('forbidden_arcanus:runic_chiseled_polished_darkstone', { activated: true })
        .weather('clear')
        .id('milkyway:summoningrituals/necromancy/blaze');
}