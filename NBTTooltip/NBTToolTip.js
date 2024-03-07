ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced(Ingredient.all, (item, advanced, text) => {
        if (tooltip.alt && item.nbt) {
            text.add(Text.of("Name: ").append(item.id));
            text.add(Text.of("NBT: ").append(Text.prettyPrintNbt(item.nbt)));
        } else if (tooltip.alt) {
            text.add(Text.of("Name: ").append(item.id));
        }
    });
});
