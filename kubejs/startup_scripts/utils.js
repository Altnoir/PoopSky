Platform.getInfo('kubejs').name = 'PoopSky';

ItemEvents.modification(e => {
    e.modify('manure:manure', item => {
        item.burnTime = 400;
        item.foodProperties = food => {
            food.hunger(1);
            food.saturation(1);
            food.alwaysEdible(true);
            food.fastToEat(true);
            food.meat(true);
            food.effect('poison', 80, 0, .5)
            food.effect('nausea', 80, 0, .5)
        }
    })
    e.modify('kubejs:manure_block', item => {
        item.burnTime = 1600;
        item.foodProperties = food => {
            food.hunger(4);
            food.saturation(.5);
            food.alwaysEdible(true);
            food.fastToEat(true);
            food.effect('poison', 320, 2, .5)
            food.effect('nausea', 160, 0, .5)
        }
    })
    e.modify('kubejs:manure_stairs', item => {
        item.burnTime = 1600;
    })
    e.modify('kubejs:manure_slab', item => {
        item.burnTime = 800;
    })
    e.modify('kubejs:manure_wall', item => {
        item.burnTime = 1600;
    })
    e.modify('kubejs:manure_fence_gate', item => {
        item.burnTime = 4800;
    })
    e.modify('minecraft:potion', item => {
        item.maxStackSize = 64;
    })
})

StartupEvents.registry('potion', e => {
    e.create('septic')
        .effect('poison', 60)
        .effect('nausea', 200)
})