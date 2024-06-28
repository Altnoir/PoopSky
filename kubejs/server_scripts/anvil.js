ServerEvents.recipes(e => {
    //屎做的草方块
    e.custom({
        type: 'anvilcraft:anvil_processing',
        anvil_recipe_type: 'compaction',
        icon: { item: 'minecraft:grass_block' },
        outcomes: [
            {
                type: 'set_block',
                chance: 1.0,
                offset: [
                    0.0,
                    -2.0,
                    0.0
                ],
                result: {
                    block: 'minecraft:grass_block',
                    state: { 'snowy': 'false' }
                }
            }
        ],
        predicates: [
            {
                type: 'has_block_ingredient',
                match_block: {
                    blocks: ['minecraft:moss_block']
                },
                offset: [
                    0.0,
                    -1.0,
                    0.0
                ]
            },
            {
                type: 'has_block',
                match_block: {
                    blocks: ['kubejs:manure_block']
                },
                offset: [
                    0.0,
                    -2.0,
                    0.0
                ]
            }
        ]
    })

    //压屎
    e.custom({
        type: 'anvilcraft:anvil_processing',
        anvil_recipe_type: 'sieving',
        icon: { item: 'manure:manure' },
        outcomes: [
            {
                type: 'spawn_item',
                chance: 0.5,
                offset: [
                    0.0,
                    -1.0,
                    0.0
                ],
                result: { item: 'manure:manure' }
            },
            {
                type: 'spawn_item',
                chance: 0.05,
                offset: [
                    0.0,
                    -1.0,
                    0.0
                ],
                result: { item: 'anvilcraft:copper_nugget' }
            },
            {
                type: 'spawn_item',
                chance: 0.05,
                offset: [
                    0.0,
                    -1.0,
                    0.0
                ],
                result: { item: 'minecraft:iron_nugget' }
            },
            {
                type: 'spawn_item',
                chance: 0.05,
                offset: [
                    0.0,
                    -1.0,
                    0.0
                ],
                result: { item: 'minecraft:gold_nugget' }
            }
        ],
        predicates: [
            {
                type: 'has_block',
                match_block: {
                    blocks: ['minecraft:scaffolding']
                },
                offset: [
                    0.0,
                    -1.0,
                    0.0
                ]
            },
            {
                type: 'has_item_ingredient',
                match_item: {
                    count: { min: 1 },
                    items: ['manure:manure']
                },
                offset: [
                    0.0,
                    0.0,
                    0.0
                ]
            }
        ]
    })

    //压厕所
    function processingToilet(name) {
        e.custom({
            type: 'anvilcraft:anvil_processing',
            anvil_recipe_type: 'sieving',
            icon: { item: 'kubejs:toilet_block' },
            outcomes: [
                {
                    type: 'spawn_item',
                    chance: 1,
                    offset: [
                        0.0,
                        -0.05,
                        0.0
                    ],
                    result: { item: 'manure:manure' }
                }
            ],
            predicates: [
                {
                    type: 'has_block',
                    match_block: {
                        blocks: ['kubejs:' + name]
                    },
                    offset: [
                        0.0,
                        -1.0,
                        0.0
                    ]
                }
            ]
        })
    }
    processingToilet('toilet_block');
    processingToilet('white_concrete_toilet');
    processingToilet('white_concrete_toilet');
    processingToilet('light_gray_concrete_toilet');
    processingToilet('gray_concrete_toilet');
    processingToilet('black_concrete_toilet');
    processingToilet('brown_concrete_toilet');
    processingToilet('red_concrete_toilet');
    processingToilet('orange_concrete_toilet');
    processingToilet('yellow_concrete_toilet');
    processingToilet('lime_concrete_toilet');
    processingToilet('green_concrete_toilet');
    processingToilet('cyan_concrete_toilet');
    processingToilet('light_blue_concrete_toilet');
    processingToilet('blue_concrete_toilet');
    processingToilet('purple_concrete_toilet');
    processingToilet('pink_concrete_toilet');
    processingToilet('magenta_concrete_toilet');
    processingToilet('rainbow_concrete_toilet');
})