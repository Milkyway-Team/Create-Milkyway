onEvent("ponder.tag", (event) => {
    /**
     * "kubejs:getting_started" -> The tag name
     * "minecraft:paper"        -> The icon
     * "Getting Started"        -> The title
     * "This is a description"  -> The description
     * [...items]               -> Default items
     */
    event.createTag("kubejs:immersive_engineering", "immersiveengineering:hammer", "Immersive Engineering", "Setup Guide For Hephaestus Forge", [
        // some default items!
        "forbidden_arcanus:hephaestus_forge",
        "forbidden_arcanus:arcane_crystal_obelisk",
    ]);
});