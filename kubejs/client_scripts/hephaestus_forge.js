onEvent("ponder.tag", (event) => {
    event.createTag("kubejs:hephaestus_forge_setup", "forbidden_arcanus:hephaestus_forge", "Hephaestus Forge", "Setup Guide For Hephaestus Forge", [
        "forbidden_arcanus:hephaestus_forge",
        "forbidden_arcanus:arcane_crystal_obelisk",
        "forbidden_arcanus:darkstone_pedestal",
    ]);
});

onEvent("ponder.registry", (event) => {
    event.create(["forbidden_arcanus:hephaestus_forge", "forbidden_arcanus:darkstone_pedestal", "forbidden_arcanus:arcane_crystal_obelisk"])
    .scene(
        "hephaestus_forge_construction",
        "Construction of Hephaestus Forge",
        "kubejs:hephaestusforgeponder", 
        (scene, util) => {
        const base = util.select.fromTo(10, 0, 0, 0, 0, 10);
        const forgePos = util.grid.at(5, 2, 5);
        const forge = util.select.position(forgePos);
        const acpd1 = util.grid.at(8, 1, 5);
        const acpd2 = util.grid.at(7, 1, 3);
        const acpd3 = util.grid.at(7, 1, 7);
        const acpd4 = util.grid.at(5, 1, 2);
        const acpd5 = util.grid.at(5, 1, 5);
        const acpd6 = util.grid.at(5, 1, 8);
        const acpd7 = util.grid.at(3, 1, 3);
        const acpd8 = util.grid.at(3, 1, 7);
        const acpd9 = util.grid.at(2, 1, 5);
        const capd1 = util.grid.at(6, 1, 5);
        const capd2 = util.grid.at(5, 1, 4);
        const capd3 = util.grid.at(4, 1, 5);
        const capd4 = util.grid.at(5, 1, 6);
        const pd914 = util.grid.at(9, 1, 4);
        const pd915 = util.grid.at(9, 1, 5);
        const pd916 = util.grid.at(9, 1, 6);
        const pd812 = util.grid.at(8, 1, 2);
        const pd917 = util.grid.at(8, 1, 3);
        const pd814 = util.grid.at(8, 1, 4);
        const pd816 = util.grid.at(8, 1, 6);
        const pd817 = util.grid.at(8, 1, 7);
        const pd818 = util.grid.at(8, 1, 8);
        const pd712 = util.grid.at(7, 1, 2);
        const pd714 = util.grid.at(7, 1, 4);
        const pd715 = util.grid.at(7, 1, 5);
        const pd716 = util.grid.at(7, 1, 6);
        const pd920 = util.grid.at(7, 1, 8);
        const pd611 = util.grid.at(6, 1, 1);
        const pd612 = util.grid.at(6, 1, 2);
        const pd613 = util.grid.at(6, 1, 3);
        const pd614 = util.grid.at(6, 1, 4);
        const pd616 = util.grid.at(6, 1, 6);
        const pd617 = util.grid.at(6, 1, 7);
        const pd618 = util.grid.at(6, 1, 8);
        const pd619 = util.grid.at(6, 1, 9);
        const pd511 = util.grid.at(5, 1, 1);
        const pd513 = util.grid.at(5, 1, 3);
        const pd517 = util.grid.at(5, 1, 7);
        const pd519 = util.grid.at(5, 1, 9);
        const pd411 = util.grid.at(4, 1, 1);
        const pd412 = util.grid.at(4, 1, 2);
        const pd413 = util.grid.at(4, 1, 3);
        const pd414 = util.grid.at(4, 1, 4);
        const pd416 = util.grid.at(4, 1, 6);
        const pd417 = util.grid.at(4, 1, 7);
        const pd418 = util.grid.at(4, 1, 8);
        const pd419 = util.grid.at(4, 1, 9);
        const pd312 = util.grid.at(3, 1, 2);
        const pd314 = util.grid.at(3, 1, 4);
        const pd315 = util.grid.at(3, 1, 5);
        const pd316 = util.grid.at(3, 1, 6);
        const pd318 = util.grid.at(3, 1, 8);
        const pd212 = util.grid.at(2, 1, 2);
        const pd213 = util.grid.at(2, 1, 3);
        const pd214 = util.grid.at(2, 1, 4);
        const pd216 = util.grid.at(2, 1, 6);
        const pd217 = util.grid.at(2, 1, 7);
        const pd218 = util.grid.at(2, 1, 8);
        const pd114 = util.grid.at(1, 1, 4);
        const pd115 = util.grid.at(1, 1, 5);
        const pd116 = util.grid.at(1, 1, 6);
        let capd = [capd1, capd2, capd3, capd4];
        let acpd = [acpd1, acpd2, acpd3, acpd4, acpd5, acpd6, acpd7, acpd8, acpd9];
        let pd = [pd114, pd115, pd116, pd212, pd213, pd214, pd216, pd217, pd218, pd312, pd314, pd315, pd316, pd318, pd411, pd412, pd413, pd414, pd416, pd417, pd418, pd419, pd511, pd513, pd517, pd519, pd611, pd612, pd613, pd614, pd616, pd617, pd618, pd619, pd712, pd714, pd715, pd716, pd920, pd812, pd814, pd816, pd817, pd818, pd914, pd915, pd916, pd917];
        let bbox = util.select.fromTo(10, 1, 0, 0, 1, 10)

        scene.world.showSection(base, Direction.NORTH);
        scene.scaleSceneView(0.6);
        scene.setSceneOffsetY(-1);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "Ensure You Have A Clear Surface").placeNearTarget()
        scene.overlay.showOutline(PonderPalette.GREEN, "airgap", bbox, 60)
        scene.idle(70);
        scene.addKeyframe();
        scene.text(60, "Place Arcane Polished Darkstone In This Formation").placeNearTarget()
        acpd.forEach(e => {
            scene.world.showSection(e, Direction.DOWN)
        })
        scene.idle(70);
        scene.text(60, "Surround The Center Piece Of Arcane Polished Darkstone With Chiseled Arcane Polished Darkstone").placeNearTarget()
        capd.forEach(e => {
            scene.world.showSection(e, Direction.DOWN)
        })
        scene.idle(70);
        scene.text(60, "Fill In The Rest With Polished Darkstone").placeNearTarget()
        pd.forEach(e => {
            scene.world.showSection(e, Direction.DOWN)
        })
        scene.idle(70);
        scene.overlay.showOutline(PonderPalette.GREEN, "airgap", bbox, 40)
        scene.text(40, "Once Again, Ensure You Have A Clear Surface Around Your Base").placeNearTarget()
        scene.idle(50);
        scene.addKeyframe();
        scene.text(40, "Now, Place A Smithing Table In The Centre Of The Base", [5, 3, 5])
        scene.world.showSection(forge, Direction.DOWN)
        scene.world.replaceBlocks(forgePos, "minecraft:smithing_table", false);
        scene.idle(50);
        scene.showControls(60, [5.5, 3, 5.5], "down")
            .rightClick()
            .withItem("forbidden_arcanus:mundabitur_dust")
            .whileSneaking()
        scene.idle(20);
        scene.world.createEntity("forbidden_arcanus:crimson_lightning_bolt", forgePos);
        scene.world.setBlock(forgePos, "forbidden_arcanus:hephaestus_forge", true);
        scene.idle(45);
        }
    )
    .scene(
        "hephaestus_forge_pedestal",
        "Hephaestus Forge Pedestals",
        "kubejs:hephaestusforgeponder", 
        (scene, util) => {
        const base = util.select.fromTo(10, 0, 0, 0, 1, 10);
        const forgePos = util.grid.at(5, 2, 5);
        const forge = util.select.position(forgePos);
        const ped1 = util.grid.at(3, 2, 3);
        const ped2 = util.grid.at(3, 2, 7);
        const ped3 = util.grid.at(5, 2, 2);
        const ped4 = util.grid.at(7, 2, 3);
        const ped5 = util.grid.at(7, 2, 7);
        const ped6 = util.grid.at(8, 2, 5);
        const aco11 = util.grid.at(2, 2, 5);
        const aco21 = util.grid.at(5, 2, 8);
        const aco12 = util.grid.at(2, 3, 5);
        const aco22 = util.grid.at(5, 3, 8);
        const aco13 = util.grid.at(2, 4, 5);
        const aco23 = util.grid.at(5, 4, 8);
        let aco1 = util.select.fromTo(2, 2, 5, 2, 4, 5)
        let aco2 = util.select.fromTo(5, 2, 8, 5, 4, 8)
        let ped = [ped1, ped2, ped3, ped4, ped5, ped6];

        scene.world.showSection(base, Direction.NORTH);
        scene.world.showSection(forge, Direction.NORTH);
        scene.scaleSceneView(0.6);
        scene.setSceneOffsetY(-1);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "Now You Have Constructed Your Forge You'll Need To Set It Up For Rituals!").placeNearTarget()
        scene.idle(70);
        scene.text(60, "Pedestals Will Be Required To Create Rituals.").placeNearTarget()
        scene.idle(30);
        scene.world.showSection(ped1, Direction.DOWN);
        scene.showControls(60, [3.5, 3, 3.5], "down")
        .withItem("forbidden_arcanus:darkstone_pedestal")
        scene.overlay.showOutline(PonderPalette.GREEN, "airgap", ped1, 40)
        scene.idle(60);
        scene.text(60, "Most Rituals Require Six Pedestals.").placeNearTarget()
        scene.world.showSection(ped2, Direction.DOWN);
        scene.idle(5);
        scene.world.showSection(ped3, Direction.DOWN);
        scene.idle(5);
        scene.world.showSection(ped4, Direction.DOWN);
        scene.idle(5);
        scene.world.showSection(ped5, Direction.DOWN);
        scene.idle(5);
        scene.world.showSection(ped6, Direction.DOWN);
        scene.idle(5);
        scene.idle(50);
        scene.addKeyframe();
        scene.text(60, "The Hephaestus Forge Is Useless Without A Source Of Aureal.").placeNearTarget()
        scene.idle(50);
        ped.forEach(e => {
            scene.world.hideSection(e, Facing.UP)
        })
        scene.idle(15);
        scene.world.showSection(aco11, Direction.DOWN);
        scene.idle(15);
        scene.world.showSection(aco12, Direction.DOWN);
        scene.idle(15);
        scene.world.showSection(aco13, Direction.DOWN);
        scene.idle(15);
        scene.text(60, "Construct This Structure Near Your Forge.").placeNearTarget()
        scene.overlay.showOutline(PonderPalette.GREEN, "airgap", util.select.fromTo(2, 2, 5, 2, 4, 5), 40)
        scene.idle(70);
        scene.showControls(60, [2.5, 5, 5.5], "down")
            .rightClick()
            .withItem("forbidden_arcanus:mundabitur_dust")
        scene.idle(60);
        scene.world.replaceBlocks(aco11, Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "lower"), true);
        scene.world.replaceBlocks(aco12, Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "middle"), true);
        scene.world.replaceBlocks(aco13, Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "upper"), true);
        scene.idle(40);
        scene.addKeyframe();
        scene.world.showSection(aco21, Direction.DOWN);
        scene.idle(15);
        scene.world.showSection(aco22, Direction.DOWN);
        scene.idle(15);
        scene.world.showSection(aco23, Direction.DOWN);
        scene.idle(15);
        scene.world.replaceBlocks(aco21, Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "lower"), true);
        scene.world.replaceBlocks(aco22, Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "middle"), true);
        scene.world.replaceBlocks(aco23, Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "upper"), true);
        scene.idle(40);
        ped.forEach(e => {
            scene.world.showSection(e, Facing.DOWN)
        })
        }
    )
    
});