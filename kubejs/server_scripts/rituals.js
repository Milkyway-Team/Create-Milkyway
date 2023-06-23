onEvent('recipes', event => {
    log.push('Registering Rituals')
    alchemyRituals(event)
    alloyingRituals(event)
    necromancyRituals(event)

    log.push('Rituals Updated')
})
const necroTome = 'milkyway:tome_necromancy'
const alloyTome = 'milkyway:alloying_tome'
const alchTome = 'milkyway:tome_alchemy'

function alchemyRituals(event){
    event.recipes.summoningrituals
        .altar(Ingredient.of(alchTome))
        .itemOutput('4x thermal:tin_ingot')
        .itemOutput('2x create:zinc_ingot')
        .itemOutput(alchTome)
        .input("3x thermal:lead_ingot")
        .sacrifice('pig', 6)
        .blockBelow('architects_palette:sunmetal_pillar')
        .recipeTime(200)
        .id('milkyway:summoningrituals/alchemy/lead_ingot');
    event.recipes.summoningrituals
        .altar(Ingredient.of(alchTome))
        .itemOutput('4x minecraft:gold_ingot')
        .itemOutput('2x thermal:tin_ingot')
        .itemOutput(alchTome)
        .input("3x minecraft:copper_ingot")
        .sacrifice('pig', 6)
        .blockBelow('architects_palette:sunmetal_pillar')
        .recipeTime(200)
        .id('milkyway:summoningrituals/alchemy/copper_ingot');
    event.recipes.summoningrituals
        .altar(Ingredient.of(alchTome))
        .itemOutput('4x minecraft:copper_ingot')
        .itemOutput('2x thermal:nickel_ingot')
        .itemOutput(alchTome)
        .input("3x minecraft:iron_ingot")
        .sacrifice('pig', 6)
        .blockBelow('architects_palette:sunmetal_pillar')
        .recipeTime(200)
        .id('milkyway:summoningrituals/alchemy/iron_ingot');
    event.recipes.summoningrituals
        .altar(Ingredient.of(alchTome))
        .itemOutput('4x minecraft:copper_ingot')
        .itemOutput('2x thermal:silver_ingot')
        .itemOutput(alchTome)
        .input("3x create:zinc_ingot")
        .sacrifice('pig', 6)
        .blockBelow('architects_palette:sunmetal_pillar')
        .recipeTime(200)
        .id('milkyway:summoningrituals/alchemy/zinc_ingot');
    event.recipes.summoningrituals
        .altar(Ingredient.of(alchTome))
        .itemOutput('4x minecraft:gold_ingot')
        .itemOutput('2x thermal:nickel_ingot')
        .itemOutput(alchTome)
        .input("3x thermal:silver_ingot")
        .sacrifice('pig', 6)
        .blockBelow('architects_palette:sunmetal_pillar')
        .recipeTime(200)
        .id('milkyway:summoningrituals/alchemy/silver_ingot');
    event.recipes.summoningrituals
        .altar(Ingredient.of(alchTome))
        .itemOutput('4x thermal:tin_ingot')
        .itemOutput('2x thermal:silver_ingot')
        .itemOutput(alchTome)
        .input("3x minecraft:gold_ingot")
        .sacrifice('pig', 6)
        .blockBelow('architects_palette:sunmetal_pillar')
        .recipeTime(200)
        .id('milkyway:summoningrituals/alchemy/gold_ingot');
    event.recipes.summoningrituals
        .altar(Ingredient.of(alchTome))
        .itemOutput('4x minecraft:iron_ingot')
        .itemOutput('2x thermal:lead_ingot')
        .itemOutput(alchTome)
        .input("3x thermal:nickel_ingot")
        .sacrifice('pig', 6)
        .blockBelow('architects_palette:sunmetal_pillar')
        .recipeTime(200)
        .id('milkyway:summoningrituals/alchemy/nickel_ingot');
    event.recipes.summoningrituals
        .altar(Ingredient.of(alchTome))
        .itemOutput('4x create:zinc_ingot')
        .itemOutput('2x minecraft:iron_ingot')
        .itemOutput(alchTome)
        .input("3x thermal:tin_ingot")
        .sacrifice('pig', 6)
        .blockBelow('architects_palette:sunmetal_pillar')
        .recipeTime(200)
        .id('milkyway:summoningrituals/alchemy/tin_ingot');
}
function alloyingRituals(event){
    event.recipes.summoningrituals
        .altar(Ingredient.of(alloyTome))
        .itemOutput('32x forbidden_arcanus:arcane_gold_ingot')
        .itemOutput(alloyTome)
        .input("8x forbidden_arcanus:mundabitur_dust")
        .input('32x minecraft:gold_ingot')
        .input('32x forbidden_arcanus:arcane_crystal_dust')
        .input('16x minecraft:charcoal')
        .sacrifice('pig', 8)
        .blockBelow('forbidden_arcanus:clibano_core')
        .recipeTime(200)
        .id('milkyway:summoningrituals/alloying/arcane_gold_ingot');
    event.recipes.summoningrituals
        .altar(Ingredient.of(alloyTome))
        .itemOutput('8x alloyed:bronze_ingot')
        .itemOutput(alloyTome)
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
        .itemOutput(alloyTome)
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
        .itemOutput(alloyTome)
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
        .itemOutput(alloyTome)
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
        .itemOutput(alloyTome)
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
        .itemOutput(alloyTome)
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
        .itemOutput(alloyTome)
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
        .altar(Ingredient.of('milkyway:tome_necromancy'))
        .itemOutput('milkyway:tome_necromancy')
        .itemOutput('5x minecraft:glass_bottle')
        .mobOutput('villager')
        .input('5x minecraft:emerald')
        .input('5x tconstruct:blood_bottle')
        .input('2x minecraft:diamond')
        .input('forbidden_arcanus:soul')
        .sacrifice('pig', 3)
        .sacrificeRegion(5, 5)
        .recipeTime(200)
        .blockBelow('forbidden_arcanus:runic_chiseled_polished_darkstone', { activated: true })
        .id('milkyway:summoningrituals/necromancy/villager');
    //event.recipes.summoningrituals
    //    .altar(Ingredient.of('milkyway:tome_necromancy'))
    //    .itemOutput('milkyway:tome_necromancy')
    //    .mobOutput(
    //    SummoningOutput.mob('zombie')
    //    .count(10)
    //    .offset(2, 1, 2)
    //    .spread(2, 0, 2)
    //    .data({ Attributes: [{ Name: 'Summoned Zombie'}] })
    //    )
    //    .input('32x biomancy:flesh_bits')
    //    .input('8x biomancy:mob_fang')
    //    .input('16x minecraft:bone')
    //    .input('10x minecraft:moss_block')
    //    .input('10x tconstruct:blood_slime_ball')
    //    .input('10x forbidden_arcanus:dark_soul')
    //    .input('4x forbidden_arcanus:cloth')
    //    .input('5x forbidden_arcanus:corrupti_dust')
    //    .input('1x biomancy:rejuvination_serum')
    //    .sacrificeRegion(5, 5)
    //    .recipeTime(200)
    //    .blockBelow('forbidden_arcanus:runic_chiseled_polished_darkstone', { activated: true })
    //    .dayTime('nIGhT')
    //    .id('milkyway:summoningrituals/necromancy/zombie');
    //event.recipes.summoningrituals
    //    .altar(Ingredient.of('milkyway:tome_necromancy'))
    //    .itemOutput('milkyway:tome_necromancy')
    //    .mobOutput(
    //        SummoningOutput.mob('husk')
    //            .count(10)
    //            .offset(2, 1, 2)
    //            .spread(2, 0, 2)
    //            .data({ Attributes: [{ Name: 'Summoned Husk'}] })
    //    )
    //    .input('32x biomancy:flesh_bits')
    //    .input('8x biomancy:mob_fang')
    //    .input('16x minecraft:bone')
    //    .input('10x minecraft:sand')
    //    .input('10x tconstruct:blood_slime_ball')
    //    .input('10x forbidden_arcanus:dark_soul')
    //    .input('4x forbidden_arcanus:cloth')
    //    .input('5x forbidden_arcanus:corrupti_dust')
    //    .input('1x biomancy:rejuvination_serum')
    //    .sacrificeRegion(5, 5)
    //    .recipeTime(200)
    //    .blockBelow('forbidden_arcanus:runic_chiseled_polished_darkstone', { activated: true })
    //    .dayTime('day')
    //    .id('milkyway:summoningrituals/necromancy/husk');
    //event.recipes.summoningrituals
    //    .altar(Ingredient.of('milkyway:tome_necromancy'))
    //    .itemOutput('milkyway:tome_necromancy')
    //    .mobOutput(
    //        SummoningOutput.mob('drowned')
    //            .count(10)
    //            .offset(2, 1, 2)
    //            .spread(2, 0, 2)
    //            .data({ Attributes: [{ Name: 'Summoned Drowned'}] })
    //    )
    //    .input('32x biomancy:flesh_bits')
    //    .input('8x biomancy:mob_fang')
    //    .input('16x minecraft:bone')
    //    .input('10x minecraft:clay')
    //    .input('10x tconstruct:blood_slime_ball')
    //    .input('10x forbidden_arcanus:dark_soul')
    //    .input('4x forbidden_arcanus:cloth')
    //    .input('5x forbidden_arcanus:corrupti_dust')
    //    .input('1x biomancy:rejuvination_serum')
    //    .sacrificeRegion(5, 5)
    //    .recipeTime(200)
    //    .blockBelow('forbidden_arcanus:runic_chiseled_polished_darkstone', { activated: true })
    //    .dayTime('nIGhT')
    //    .weather('rain')
    //    .id('milkyway:summoningrituals/necromancy/drowned');
    event.recipes.summoningrituals
        .altar(Ingredient.of('milkyway:tome_necromancy'))
        .itemOutput('milkyway:tome_necromancy')
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