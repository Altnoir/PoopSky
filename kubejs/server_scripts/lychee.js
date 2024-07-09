ServerEvents.recipes(e => {
    //岩浆
    e.custom({
        type: 'lychee:item_inside',
        item_in: [
            {
                item: 'kubejs:manure_block'
            },
            {
                item: 'minecraft:iron_ingot'
            },
            {
                item: 'minecraft:glowstone_dust'
            },
            {
                item: 'minecraft:sugar'
            },
            {
                item: 'minecraft:slime_ball'
            },
            {
                item: 'minecraft:rotten_flesh'
            },
            {
                item: 'minecraft:spider_eye'
            }
        ],
        block_in: {
            blocks: ['water_cauldron'],
            state: {
                level: 3
            }
        },
        post: [
            {
                type: 'place',
                block: {
                    blocks: ['lava_cauldron']
                }
            }
        ]
    }).id('poopsky:item_inside_lava');
    //苔藓块
    e.custom({
        type: 'lychee:item_inside',
        item_in: [
            {
                item: 'kubejs:manure_block'
            },
            {
                item: 'minecraft:green_dye'
            }
        ],
        block_in: {
            blocks: ['water_cauldron'],
            state: {
                level: 3
            }
        },
        post: [
            {
                type: 'drop_item',
                item: 'minecraft:moss_block'
            },
            {
                type: 'place',
                block: 'minecraft:cauldron'
            }
        ]
    }).id('poopsky:item_inside_moss_block');
})