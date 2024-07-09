StartupEvents.registry('item', e => {
    //搅屎棍
    e.create('manure_stick', 'sword')
        .tier('wood')
        .attackDamageBaseline(1.0)
        .speedBaseline(0.2)
        .displayName('Manure Stick');
    //蛆
    e.create('maggot').food(food => {
        food
            .hunger(1)
            .saturation(.5)
            .effect('nausea', 60, 0, .2)
            .fastToEat()
            .meat()
    }).displayName('Maggot');
})