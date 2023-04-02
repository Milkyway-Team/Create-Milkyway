const ItemDescription = java('com.simibubi.create.foundation.item.ItemDescription');
const Palette = java('com.simibubi.create.foundation.item.ItemDescription$Palette');
onEvent('item.tooltip', event => {
    event.addAdvanced('mw_core:logic_mechanism', (item, _, tooltip) => {
        new ItemDescription(Palette.Purple)
            .withSummary(Component.translate('item.mw_core.logic_mechanism.tooltip.summary'))
            .createTabs()
            .addInformation(tooltip);
    });
    event.addAdvanced('mw_core:action_mechanism', (item, _, tooltip) => {
        new ItemDescription(Palette.Purple)
            .withSummary(Component.translate('item.mw_core.action_mechanism.tooltip.summary'))
            .createTabs()
            .addInformation(tooltip);
    });
    event.addAdvanced('kubejs:action_mechanism', (item, _, tooltip) => {
        new ItemDescription(Palette.Purple)
            .withSummary(Component.translate('item.mw_core.action_mechanism.tooltip.summary'))
            .createTabs()
            .addInformation(tooltip);
    });
    event.addAdvanced('mw_core:chromatic_waste_bucket', (item, _, tooltip) => {
        new ItemDescription(Palette.Yellow)
            .withSummary(Component.translate('item.mw_core.chromatic_waste_bucket.tooltip.summary'))
            .withControl(Component.translate('item.mw_core.chromatic_waste_bucket.tooltip.condition')
            .string,
            Component.translate('item.mw_core.chromatic_waste_bucket.tooltip.behaviour').string)
            .withControl(Component.translate('item.mw_core.chromatic_waste_bucket.tooltip.condition.1')
                    .string,
                Component.translate('item.mw_core.chromatic_waste_bucket.tooltip.behaviour.1').string)
            .createTabs()
            .addInformation(tooltip);
    });

});