const ItemDescription = java('com.simibubi.create.foundation.item.ItemDescription');
const Palette = java('com.simibubi.create.foundation.item.ItemDescription$Palette');

onEvent('item.tooltip', event => {
    event.addAdvanced('mw_core:logic_mechanism', (item, _, tooltip) => {
        new ItemDescription(Palette.Purple)
            .withSummary(Component.translate('item.mw_core.logic_mechanism.tooltip.summary'))
            // Create expects localized strings instead of components here, so we localize ourselves (.string)
            .createTabs()
            .addInformation(tooltip);
    });
    event.addAdvanced('mw_core:action_mechanism', (item, _, tooltip) => {
        new ItemDescription(Palette.Purple)
            .withSummary(Component.translate('item.mw_core.action_mechanism.tooltip.summary'))
            // Create expects localized strings instead of components here, so we localize ourselves (.string)
            .createTabs()
            .addInformation(tooltip);
    });
    event.addAdvanced('kubejs:action_mechanism', (item, _, tooltip) => {
        new ItemDescription(Palette.Purple)
            .withSummary(Component.translate('item.mw_core.action_mechanism.tooltip.summary'))
            // Create expects localized strings instead of components here, so we localize ourselves (.string)
            .createTabs()
            .addInformation(tooltip);
    });
});