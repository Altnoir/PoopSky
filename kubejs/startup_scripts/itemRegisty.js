StartupEvents.registry('item', e => {
    e.create('manure_stick', 'sword')
        .tier('wood')
        .attackDamageBaseline(1.0)
        .speedBaseline(0.2);
})