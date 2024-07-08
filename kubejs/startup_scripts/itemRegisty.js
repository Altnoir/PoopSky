StartupEvents.registry('item', e => {
    //搅屎棍
    e.create('manure_stick', 'sword')
        .tier('wood')
        .attackDamageBaseline(1.0)
        .speedBaseline(0.2)
        .displayName('Manure Stick');
    //粪球
    e.create('manure_ball').displayName('Manure Ball');
})