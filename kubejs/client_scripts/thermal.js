let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let TE = (id, x) => MOD("thermal", id, x)

onEvent("ponder.tag", (event) => {
    /**
     * "kubejs:getting_started" -> The tag name
     * "minecraft:paper"        -> The icon
     * "Getting Started"        -> The title
     * "This is a description"  -> The description
     * [...items]               -> Default items
     */
    event.createTag("kubejs:thermal", TE( "rf_coil"), "Thermal Machinery", "Useful Machinery From Thermal", [
        // some default items!
        TE('device_tree_extractor'),
        TE('dynamo_stirling'),
        TE('machine_pulverizer'),
        TE('device_rock_gen'),
        TE('machine_refinery')
    ]);
});
onEvent("ponder.registry", (event) => {
    event.create(TE('device_tree_extractor'))
        .scene(
            "arboreal_extractor",
            "Arboreal Extraction",
            "kubejs:extractor",
            (scene, util) => {
                const pumpPos = util.grid.at(4, 1, 2);
                const pump = util.select.position(pumpPos);
                const smallCog1 = util.select.position(3, 1, 2)
                const smallCog2 = util.select.position(3, 1, 0)
                const shaft = util.select.position(3, 1, 1)
                const largeCog = util.select.position(2, 0, 0)
                const tank = util.select.position(4, 1, 1)
                const base = util.select.fromTo(5, 0, 1, 0, 0, 5);
                const extractor = util.select.position(4, 1, 3)
                const treeStalk = util.select.fromTo(3, 1, 3, 3, 7, 3);
                const leaves1 = util.select.fromTo(5, 4, 1, 0, 4, 5);
                const leaves2 = util.select.fromTo(5, 5, 1, 0, 5, 5);
                const leaves3 = util.select.fromTo(5, 6, 1, 0, 6, 5);
                const leaves4 = util.select.fromTo(5, 7, 1, 0, 7, 5);
                scene.world.showSection(base, Direction.SOUTH);
                scene.world.showSection(extractor, Direction.SOUTH);
                scene.world.showSection(treeStalk, Direction.SOUTH);
                scene.world.showSection(leaves1, Direction.SOUTH);
                scene.world.showSection(leaves2, Direction.SOUTH);
                scene.world.showSection(leaves3, Direction.SOUTH);
                scene.world.showSection(leaves4, Direction.SOUTH);
                scene.scaleSceneView(0.7);
                scene.rotateCameraY(90);
                scene.world.multiplyKineticSpeed(util.select.everywhere(), -1);
                scene.idle(10);
                scene.addKeyframe();
                scene.text(40, "The Arboreal Extractor can be used to extract fluids from trees.", [4, 2, 3])
                scene.idle(40)
                scene.addKeyframe();
                scene.world.showSection(pump, Direction.SOUTH);
                scene.world.showSection(smallCog1, Direction.SOUTH);
                scene.world.showSection(smallCog2, Direction.SOUTH);
                scene.world.showSection(shaft, Direction.SOUTH);
                scene.world.showSection(largeCog, Direction.SOUTH);
                scene.world.showSection(tank, Direction.SOUTH);
                scene.idle(5)
                scene.text(60, "You can use pipes to extract the fluid from the Arboreal Extractor", [4, 1, 3])
                scene.idle(40)
                scene.world.setKineticSpeed(pump, 32);
                scene.world.setKineticSpeed(smallCog1, -32);
                scene.world.setKineticSpeed(smallCog2, -32);
                scene.world.setKineticSpeed(shaft, -32);
                scene.world.setKineticSpeed(largeCog, 16);
                scene.idle(60)
            }
        )
    event.create(TE('machine_refinery'))
        .scene(
            "machine_refinery",
            "The Refinery",
            "kubejs:refinery",
            (scene, util) => {
                const eastTank = util.select.fromTo(6, 1, 3, 6, 2, 3);
                const westTank = util.select.fromTo(0, 1, 3, 0, 2, 3);
                const refineryInput = util.select.fromTo(3, 2, 3, 3, 3, 3);
                const refinery = util.select.position(3, 1, 3);
                const refineryInputCog1 = util.select.position(3, 2, 4);
                const refineryInputCog2 = util.select.position(3, 2, 5);
                const funnel = util.select.position(3, 1, 2);
                const funnelOutputPos = util.vector.topOf(funnel);
                const mainPowerSource = util.select.fromTo(3, 1, 5, 3, 1, 6);
                const westPipes = util.select.fromTo(2, 1, 3, 1, 1, 3);
                const eastPipes = util.select.fromTo(4, 1, 3, 5, 1, 3);
                const secondaryPowerSource = util.select.fromTo(4, 1, 4, 2, 1, 4);
                const base = util.select.fromTo(0, 0, 0, 6, 0, 6);
                scene.world.showSection(base, Direction.SOUTH);
                scene.world.showSection(refinery, Direction.SOUTH);
                scene.scaleSceneView(0.7);
                scene.world.multiplyKineticSpeed(util.select.everywhere(), -1);
                scene.idle(10);
                scene.addKeyframe();
                scene.text(40, "The Refinery is a useful machine capable of separating a liquid into two liquids and an item!", [3, 2, 3])
                scene.idle(40)
                scene.addKeyframe();
                scene.text(40, "You can input a fluid with a pump.", [3, 3, 3])
                scene.world.showSection(refineryInput, Direction.DOWN);
                scene.idle(10)
                scene.world.showSection(refineryInputCog1, Direction.DOWN);
                scene.world.showSection(refineryInputCog2, Direction.DOWN);
                scene.idle(10)
                scene.world.showSection(mainPowerSource, Direction.DOWN);
                scene.idle(10)
                scene.world.setKineticSpeed(refineryInputCog1, 32);
                scene.world.setKineticSpeed(refineryInputCog2, -32);
                scene.world.setKineticSpeed(refineryInput, 32);
                scene.world.setKineticSpeed(mainPowerSource, 32);
                scene.idle(20)
                scene.world.modifyBlock([3, 1, 3], (curState) => curState.with("active", "true"), false);
                scene.idle(60)
                scene.addKeyframe();
                scene.text(80, "Fluids can be extracted with filtered pipes.", [2, 2, 3])
                scene.world.showSection(westPipes, Direction.WEST);
                scene.world.showSection(westTank, Direction.WEST);
                scene.idle(10)
                scene.world.showSection(eastPipes, Direction.EAST);
                scene.world.showSection(eastTank, Direction.EAST);
                scene.idle(10)
                scene.world.showSection(secondaryPowerSource, Direction.UP);
                scene.world.setKineticSpeed(secondaryPowerSource, -32);
                scene.world.setKineticSpeed(westPipes, -32);
                scene.world.setKineticSpeed(eastPipes, 32);
                scene.idle(80)
                scene.addKeyframe();
                scene.text(40, "You can extract the item output with a funnel.", [3, 2, 2])
                scene.world.showSection(funnel, Direction.NORTH);
                scene.idle(10)
                scene.world.createItemEntity(funnelOutputPos.add(3, 0.25, 2), util.vector.of(0, 0, 0), "create:crushed_nickel_ore");
                scene.idle(30)
            })
    event.create(TE('device_rock_gen'))
        .scene(
            "device_rock_gen",
            "The Refinery",
            "kubejs:extruder",
            (scene, util) => {
                //scene.showStructure();
                scene.rotateCameraY(90);
                scene.scaleSceneView(0.7);
                const fluidBorder1 = util.select.position(4, 4, 2);
                const fluidBorder2 = util.select.position(2, 4, 2);
                const fluidBorder3 = util.select.position(3, 4, 1);
                const fluidBorder4 = util.select.position(2, 4, 4);
                const fluidBorder5 = util.select.position(4, 4, 4);
                const fluidBorder6 = util.select.position(3, 4, 5);
                const fluidBorder7 = util.select.position(2, 4, 4);
                const fluidBorder8 = util.select.position(3, 3, 4);
                const fluidBorder9 = util.select.position(3, 3, 2);
                const base = util.select.fromTo(0, 0, 0, 6, 0, 6);
                util.select.fromTo(3, 1, 6, 3, 1, 1);
                const chestInput = util.select.fromTo(3, 1, 3, 3, 2, 3);
                const rockGen = util.select.position(3, 4, 3);
                const southInput = util.select.position(3, 4, 4);
                const northInput = util.select.position(3, 4, 2);
                const chute1 = util.select.position(3, 3, 3)
                const chute2 = util.select.position(3, 2, 3)
                util.vector.topOf(chute2);
                util.vector.topOf(chute1);
                scene.world.showSection(base, Direction.SOUTH);
                scene.world.showSection(rockGen, Direction.SOUTH);
                scene.world.modifyBlock([3, 4, 3], (curState) => curState.with("active", "false"), false);
                scene.idle(20)
                scene.addKeyframe();
                scene.text(40, "The Igneous Extruder is used to generate rocks from two input blocks placed on either side.", [3, 5, 3])
                scene.idle(40)
                scene.world.showSection(chute1, Direction.UP);
                scene.world.showSection(chestInput, Direction.UP);
                scene.world.setBlock([3, 2, 3], "create:chute", false);
                scene.text(40, "You can extract it's outputs with a chute beneath it.", [3, 3, 3])
                scene.idle(40)
                scene.addKeyframe();
                scene.world.showSection(southInput, Direction.DOWN);
                scene
                    .showControls(60, [3, 4.5, 4.75], "down")
                    .withItem("minecraft:lava_bucket")
                scene.text(40, "The main input for the Igneous Extruder will always be Lava", [3, 5, 4])
                scene.idle(40)
                scene.addKeyframe();
                scene.world.showSection(northInput, Direction.DOWN);
                scene
                    .showControls(60, [3, 4.5, 2.75], "down")
                    .withItem("minecraft:water_bucket")
                scene.text(40, "Water and Lava will generate cobblestone.", [3, 5, 2])
                scene.world.modifyBlock([3, 4, 3], (curState) => curState.with("active", "true"), false);

                scene
                .showControls(60, [3, 4, 4.5], "right")
                .withItem("minecraft:cobblestone")
                scene.idle(60)
                scene.addKeyframe();
                scene.text(40, "You can also combine Lava and Congealed Blood to generate Netherrack.", [3, 5, 2])
                scene
                    .showControls(60, [3, 4.5, 2.75], "down")
                    .withItem("tconstruct:blood_congealed_slime")
                scene.idle(20)
                scene.world.setBlock([3, 4, 2], "tconstruct:blood_congealed_slime", false);
                scene
                .showControls(60, [3, 4, 4.5], "right")
                .withItem("minecraft:netherrack")
                scene.idle(60)
                scene.text(40, "More recipes can be viewed using JEI.", [3, 5, 3])
                scene.idle(60)
            })
    event.create(TE('dynamo_stirling'))
        .scene(
            "stirling_dynamo",
            "Stirling Dynamos",
            "kubejs:stirling",
            (scene, util) => {
                //scene.showStructure();
                const dynamo = util.select.position(2, 1, 2)
                const energyCell = util.select.position(2, 2, 2)
                const base = util.select.fromTo(0, 0, 0, 4, 0, 4);

                scene.world.showSection(base, Direction.SOUTH);
                scene.world.showSection(dynamo, Direction.SOUTH);
                scene.text(40, "The Stirling Dynamo is a useful tool, having the ability to generate FE from flammable materials.", [2, 2, 2])
                scene.idle(40)
                scene.addKeyframe();
                scene
                    .showControls(40, [3.5, 1, 3.5], "right")
                    .withItem("minecraft:oak_log")
                scene.idle(20)
                scene.world.modifyBlock([2, 1, 2], (curState) => curState.with("active", "true"), false);
                scene.idle(40)
                scene.addKeyframe();
                scene.world.showSection(energyCell, Direction.EAST);
                scene.world.setBlock([2, 2, 2], "thermal:machine_press", false);
                scene.text(60, "The Stirling Dynamo will always output energy to an energy container that connects to it's energy output", [2, 3, 2])
                scene.idle(10)
                scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("active", "true"), false);
                scene.idle(40)
            })
})