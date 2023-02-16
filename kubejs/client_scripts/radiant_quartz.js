onEvent("ponder.tag", (event) => {
    /**
     * "kubejs:getting_started" -> The tag name
     * "minecraft:paper"        -> The icon
     * "Getting Started"        -> The title
     * "This is a description"  -> The description
     * [...items]               -> Default items
     */
    event.createTag("kubejs:radiant_quartz", "mw_core:radiant_quartz", "Radiant Quartz", "Creation of Radiant Quartz", [
        // some default items!
        "mw_core:radiant_quartz",
        "tconstruct:molten_lumium_bucket",
    ]);
});
onEvent("ponder.registry", (event) => {
    event.create("mw_core:radiant_quartz")
        .scene("radiant_quartz_infusion", "Creation of Radiant Quartz", "kubejs:radiant_quartz", (scene, util) => {
            scene.showStructure();
            scene.scaleSceneView(0.7);
            scene.setSceneOffsetY(-1);
            scene.idle(20);
            const centerBlockPos = util.grid.at(2, 0, 2);
            const centerTop = util.vector.topOf(centerBlockPos);

            scene.addKeyframe();
            scene
            .text(60, "Radiant Quartz can be created through a process called 'Soaking'", [1, 1, 4])
            scene.idle(60);
            scene.addKeyframe();
            scene
            .text(60, "Drop a piece of Nether Quartz into a pool of Molten Lumium", [2, 2, 2])
            scene.idle(60);
            scene.addKeyframe();
            const quartz = scene.world.createItemEntity(centerTop.add(0, 3, 0), util.vector.of(0, 0, 0), "quartz");
            scene.addKeyframe();
            scene
            .text(60, "The Nether Quartz will absorb the Molten Lumium resulting in the creation of Radiant Quartz", [2, 2, 2])
            scene.idle(30);
            scene.world.setBlock([2, 0, 2], "minecraft:air", false);
            scene.world.modifyEntity(quartz, (e) => {
                e.discard() // as an example
            });
            scene.world.createItemEntity(centerTop.add(0, 0, 0), util.vector.of(0, 0.4, -0.07), "mw_core:radiant_quartz");
        })
})