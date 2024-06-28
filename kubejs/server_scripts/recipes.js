ServerEvents.recipes(e => {
    const { kubejs, minecraft } = e.recipes;
    /**
     * @param {string} id -字符串
     */
    function remove(id) { e.remove({ id: id }) }

    //粪便方块
    kubejs.shaped('kubejs:manure_block', [
        'AA',
        'AA'
    ], {
        A: 'manure:manure'
    }).id('poopsky:manure_block');
    kubejs.shapeless('4x manure:manure', [
        'kubejs:manure_block'
    ]).id('poopsky:manure_from_block');
    //粪便台阶
    kubejs.shaped('4x kubejs:manure_slab', [
        'AA',
    ], {
        A: 'kubejs:manure_block'
    }).id('poopsky:manure_slab_from_block');
    kubejs.shaped('kubejs:manure_block', [
        'A',
        'A'
    ], {
        A: 'kubejs:manure_slab'
    }).id('poopsky:manure_block_from_slab');
    //粪便楼梯 
    kubejs.shaped('6x kubejs:manure_stairs', [
        'A  ',
        'AA ',
        'AAA',
    ], {
        A: 'kubejs:manure_block'
    }).id('poopsky:manure_stairs_from_block');
    //粪便墙
    kubejs.shaped('6x kubejs:manure_wall', [
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:manure_block'
    }).id('poopsky:manure_wall_from_block');
    //粪便栅栏门
    kubejs.shaped('kubejs:manure_fence_gate', [
        'BAB',
        'BAB'
    ], {
        A: 'kubejs:manure_block',
        B: 'kubejs:manure_stick'
    }).id('poopsky:manure_fence_gate');
    //粪便棍
    kubejs.shaped('kubejs:manure_stick', [
        'A',
        'B'
    ], {
        A: 'manure:manure',
        B: 'minecraft:stick'
    }).id('poopsky:manure_stick');

    //切粪便
    minecraft.stonecutting('kubejs:manure_stairs', 'kubejs:manure_block').id('poopsky:stonecutting_manure_stairs');
    minecraft.stonecutting('2x kubejs:manure_slab', 'kubejs:manure_block').id('poopsky:stonecutting_manure_slab');
    minecraft.stonecutting('kubejs:manure_wall', 'kubejs:manure_block').id('poopsky:stonecutting_manure_wall');



    //骨块骨头
    kubejs.shaped('9x minecraft:bone', [
        '  A',
        ' A ',
        'A  '
    ], {
        A: 'minecraft:bone_block'
    }).id('poopsky:bone_from_block');

    //竹板
    remove('minecraft:bamboo_planks')
    kubejs.shaped('minecraft:bamboo_planks', [
        'AA',
        'AA'
    ], {
        A: 'minecraft:bamboo'
    }).id('poopsky:bamboo_planks_from_bamboo');
    //竹子
    kubejs.shapeless('9x minecraft:bamboo', [
        'minecraft:bamboo_block'
    ]).id('poopsky:bamboo_from_bamboo_block');

    //可可豆
    minecraft.campfire_cooking('minecraft:cocoa_beans', [
        'manure:manure'
    ]).xp(.1).cookingTime(600).id('poopsky:campfire_cooking_cocoa_beans');

    //砂土
    kubejs.shaped('4x minecraft:coarse_dirt', [
        'AB',
        'BA'
    ], {
        A: 'kubejs:manure_block',
        B: 'minecraft:gravel'
    }).id('poopsky:coarse_dirt_from_manure');

    //粘土
    kubejs.shapeless('2x minecraft:clay_ball', [
        'minecraft:slime_ball',
        'manure:manure'
    ]).id('poopsky:clay_ball');

    //蜘蛛网
    kubejs.shaped('minecraft:cobweb', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:string',
        B: 'minecraft:slime_ball'
    }).id('poopsky:cobweb');

    //人工厕所
    kubejs.shapeless('kubejs:toilet_block', [
        'minecraft:cobweb',
        'manure:manure'
    ]).id('poopsky:toilet_block');

    /**
     * @param {string} name -字符串
     */
    function toiletRecipes(name) {
        kubejs.shapeless('kubejs:' + name + '_toilet', [
            'kubejs:toilet_block', name
        ]).id('poopsky:toilet_from_' + name);
    }
    toiletRecipes('white_concrete');
    toiletRecipes('light_gray_concrete');
    toiletRecipes('gray_concrete');
    toiletRecipes('black_concrete');
    toiletRecipes('brown_concrete');
    toiletRecipes('red_concrete');
    toiletRecipes('orange_concrete');
    toiletRecipes('yellow_concrete');
    toiletRecipes('lime_concrete');
    toiletRecipes('green_concrete');
    toiletRecipes('cyan_concrete');
    toiletRecipes('light_blue_concrete');
    toiletRecipes('blue_concrete');
    toiletRecipes('purple_concrete');
    toiletRecipes('pink_concrete');
    toiletRecipes('magenta_concrete');
    //彩色厕所
    kubejs.shapeless('kubejs:rainbow_concrete_toilet', [
        'kubejs:red_concrete_toilet',
        'kubejs:green_concrete_toilet',
        'kubejs:blue_concrete_toilet'
    ]).id('poopsky:rainbow_concrete_toilet');
})

ServerEvents.compostableRecipes(e => {
    e.add('manure:manure', 1);
})