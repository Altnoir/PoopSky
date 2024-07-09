ServerEvents.tags('block', e => {
    //e.add('minecraft:sand', 'kubejs:manure_block');
    e.add('minecraft:dirt', 'kubejs:manure_block');
    e.add('poopsky:saplings', [
        'minecraft:oak_sapling',
        'minecraft:spruce_sapling',
        'minecraft:birch_sapling',
        'minecraft:jungle_sapling',
        'minecraft:acacia_sapling',
        'minecraft:dark_oak_sapling',
        'minecraft:mangrove_propagule',
        'minecraft:cherry_sapling',
        'minecraft:bamboo'
    ])

    const toilet = (id) => e.add('minecraft:flowers', 'kubejs:' + id);
    toilet('toilet_block');
    toilet('white_concrete_toilet');
    toilet('light_gray_concrete_toilet');
    toilet('gray_concrete_toilet');
    toilet('black_concrete_toilet');
    toilet('brown_concrete_toilet');
    toilet('red_concrete_toilet');
    toilet('orange_concrete_toilet');
    toilet('yellow_concrete_toilet');
    toilet('lime_concrete_toilet');
    toilet('green_concrete_toilet');
    toilet('cyan_concrete_toilet');
    toilet('light_blue_concrete_toilet');
    toilet('blue_concrete_toilet');
    toilet('purple_concrete_toilet');
    toilet('magenta_concrete_toilet');
    toilet('pink_concrete_toilet');
    toilet('rainbow_concrete_toilet');
})