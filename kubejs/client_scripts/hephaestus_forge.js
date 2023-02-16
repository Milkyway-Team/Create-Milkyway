let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let FA = (id, x) => MOD("forbidden_arcanus", id, x)






onEvent("ponder.tag", (event) => {
    /**
     * "kubejs:getting_started" -> The tag name
     * "minecraft:paper"        -> The icon
     * "Getting Started"        -> The title
     * "This is a description"  -> The description
     * [...items]               -> Default items
     */
    event.createTag("kubejs:hephaestus_forge_setup", "forbidden_arcanus:hephaestus_forge", "Hephaestus Forge", "Setup Guide For Hephaestus Forge", [
        // some default items!
        "forbidden_arcanus:hephaestus_forge",
        "forbidden_arcanus:arcane_crystal_obelisk",
    ]);
});

onEvent("ponder.registry", (event) => {
    event.create("forbidden_arcanus:hephaestus_forge")
        .scene("hephaestus_forge_construction", "Construction of Hephaestus Forge", "kubejs:hephaestus_base", (scene, util) => {
            scene.showStructure();
            scene.scaleSceneView(0.7);
            scene.setSceneOffsetY(-1);
            scene.idle(20);
               scene.addKeyframe();
               scene
               .text(60, "Place Arcane Polished Darkstone Here", [5, 2, 5])
               scene.world.setBlock([5, 1, 5,], "forbidden_arcanus:arcane_chiseled_polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([5, 1, 2,], "forbidden_arcanus:arcane_chiseled_polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([7, 1, 3,], "forbidden_arcanus:arcane_chiseled_polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([8, 1, 5,], "forbidden_arcanus:arcane_chiseled_polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([7, 1, 7,], "forbidden_arcanus:arcane_chiseled_polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([5, 1, 8,], "forbidden_arcanus:arcane_chiseled_polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([3, 1, 7,], "forbidden_arcanus:arcane_chiseled_polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([2, 1, 5,], "forbidden_arcanus:arcane_chiseled_polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([3, 1, 3,], "forbidden_arcanus:arcane_chiseled_polished_darkstone", false);
               scene.idle(45);
               scene.addKeyframe();
               scene
               .text(50, "Place Chiseled Arcane Polished Darkstone Here", [5, 2, 4])
               scene.world.setBlock([4, 1, 5,], "forbidden_arcanus:chiseled_arcane_polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([5, 1, 4,], "forbidden_arcanus:chiseled_arcane_polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([6, 1, 5,], "forbidden_arcanus:chiseled_arcane_polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([5, 1, 6,], "forbidden_arcanus:chiseled_arcane_polished_darkstone", false);
               scene.idle(45);
               scene.addKeyframe();
               scene
               .text(80, "Surround These With Polished Darkstone", [6, 2, 5])
               scene.world.setBlock([9, 1, 4,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([9, 1, 5,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([9, 1, 6,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([8, 1, 2,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([8, 1, 3,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([8, 1, 4,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([8, 1, 6,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([8, 1, 7,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([8, 1, 8,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([7, 1, 2,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([7, 1, 4,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([7, 1, 5,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([7, 1, 6,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([7, 1, 8,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([6, 1, 1,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([6, 1, 2,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([6, 1, 3,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([6, 1, 4,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([6, 1, 6,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([6, 1, 7,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([6, 1, 8,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([6, 1, 9,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([5, 1, 1,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([5, 1, 3,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([5, 1, 7,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([5, 1, 9,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([4, 1, 1,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([4, 1, 2,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([4, 1, 3,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([4, 1, 4,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([4, 1, 6,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([4, 1, 7,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([4, 1, 8,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([4, 1, 9,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([3, 1, 2,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([3, 1, 4,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([3, 1, 5,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([3, 1, 6,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([3, 1, 8,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([2, 1, 2,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([2, 1, 3,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([2, 1, 4,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([2, 1, 6,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([2, 1, 7,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([2, 1, 8,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([1, 1, 4,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([1, 1, 5,], "forbidden_arcanus:polished_darkstone", false);
           scene.idle(2);
               scene.world.setBlock([1, 1, 6,], "forbidden_arcanus:polished_darkstone", false);
               scene.idle(45);
               scene.addKeyframe();
               scene
               .text(40, "Next, Place A Smithing Table In The Center", [5, 3, 5])
               scene.world.setBlock([5, 2, 5,], "minecraft:smithing_table", false);
               scene.idle(45);
               scene.addKeyframe();
               scene
               .showControls(60, [5.5, 3.5, 5.5], "down")
               .rightClick()
               .withItem("forbidden_arcanus:mundabitur_dust")
               .whileSneaking()
               scene.idle(20);
               scene.world.createEntity("forbidden_arcanus:crimson_lightning_bolt", [5, 2, 5]);
               scene.world.setBlock([5, 2, 5,], "forbidden_arcanus:hephaestus_forge", false);
               scene.idle(45);

    });
});