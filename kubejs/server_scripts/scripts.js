BlockEvents.rightClicked(e => {
    const { player, block, server, level } = e;

    if (e.hand != 'main_hand') return;

    if (block.hasTag('poopsky:toilet') && player.isCrouching()) {
        if (player.getMainHandItem() == 'air') {
            let playerFood = player.foodData;

            if (!player.isCreative()) {
                if (playerFood.getFoodLevel() >= 1) {
                    playerFood.foodLevel -= 1;
                } else {
                    player.attack(2);
                }
            }

            server.runCommandSilent(`execute in ${level.dimension} run summon item ${player.x} ${player.y + .1} ${player.z} {Item:{id:"manure:manure",Count:1b}}`);
            server.runCommandSilent(`execute in ${level.dimension} run playsound kubejs:poop player ${player.username} ${block.x + .5} ${block.y + .6} ${block.z + .5} 1 1`);
        }
        if (player.getMainHandItem() == 'minecraft:glass_bottle') {
            if (!player.isCreative()) {
                player.getMainHandItem().count -= 1;
            }
            player.giveInHand(Item.of('minecraft:potion', '{Potion:"kubejs:septic"}'));
            server.runCommandSilent(`execute in ${level.dimension} run playsound minecraft:item.bottle.fill player ${player.username} ${block.x + .5} ${block.y + .6} ${block.z + .5} 1 0.2`);
        }
    }
})

let random = () => Utils.random.nextInt(6);

ItemEvents.foodEaten('manure:manure', e => {
    const { player } = e;

    if (random() == 0) {
        player.giveInHand('minecraft:bamboo');
    }
})
ItemEvents.foodEaten('kubejs:manure_block', e => {
    const { player } = e;

    if (random() <= 2) {
        let biome = player.getBlock().biomeId;
        //e.server.tell(biome);
        switch (biome) {
            //橡树苗
            case 'minecraft:plains':
                player.giveInHand('minecraft:oak_leaves');
                break;
            case 'minecraft:forest':
                player.giveInHand('minecraft:oak_leaves');
                break;
            case 'minecraft:flower_forest':
                player.giveInHand('minecraft:oak_leaves');
                break;
            //云杉树苗
            case 'minecraft:taiga':
                player.giveInHand('minecraft:spruce_leaves');
                break;
            case 'minecraft:snowy_taiga':
                player.giveInHand('minecraft:spruce_leaves');
                break;
            case 'minecraft:old_growth_pine_taiga':
                player.giveInHand('minecraft:spruce_leaves');
                break;
            case 'minecraft:old_growth_spruce_taiga':
                player.giveInHand('minecraft:spruce_leaves');
                break;
            case 'minecraft:grove':
                player.giveInHand('minecraft:spruce_leaves');
                break;
            //白桦树苗
            case 'minecraft:birch_forest':
                player.giveInHand('minecraft:birch_leaves');
                break;
            case 'minecraft:old_growth_birch_forest':
                player.giveInHand('minecraft:birch_leaves');
                break;
            //丛林树苗
            case 'minecraft:jungle':
                player.giveInHand('minecraft:jungle_leaves');
                break;
            case 'minecraft:sparse_jungle':
                player.giveInHand('minecraft:jungle_leaves');
                break;
            //金合欢树苗
            case 'minecraft:savanna':
                player.giveInHand('minecraft:acacia_leaves');
                break;
            case 'minecraft:savanna_plateau':
                player.giveInHand('minecraft:acacia_leaves');
                break;
            case 'minecraft:windswept_savanna':
                player.giveInHand('minecraft:acacia_leaves');
                break;
            //深色橡树苗
            case 'minecraft:dark_forest':
                player.giveInHand('minecraft:dark_oak_leaves');
                break;
            //红树苗
            case 'minecraft:mangrove_swamp':
                player.giveInHand('minecraft:mangrove_leaves');
                break;
            //樱花树苗
            case 'minecraft:cherry_grove':
                player.giveInHand('minecraft:cherry_leaves');
                break;
            //蘑菇
            case 'minecraft:mushroom_fields':
                if (random() <= 2) {
                    player.giveInHand('minecraft:brown_mushroom');
                } else {
                    player.giveInHand('minecraft:red_mushroom');
                }
                break;
            //绯红菌
            case 'minecraft:crimson_forest':
                player.giveInHand('minecraft:crimson_fungus');
                break;
            //诡异菌
            case 'minecraft:warped_forest':
                player.giveInHand('minecraft:warped_fungus');
                break;
            default:
                player.giveInHand('minecraft:bamboo');
        }
    }
})

ItemEvents.entityInteracted('minecraft:potion', e => {
    const { target, player, server, level } = e;

    if (player.getMainHandItem() != Item.of('minecraft:potion', '{Potion:"kubejs:septic"}').weakNBT()) return;

    if (target.type == 'minecraft:chicken' && target.isAlive()) {
        player.getMainHandItem().count -= 1;
        server.runCommandSilent(`execute in ${level.dimension} run summon item ${target.x} ${target.y + .2} ${target.z} {Item:{id:"potion",Count:1b,tag:{Potion:water}}}`);
        server.runCommandSilent(`execute in ${level.dimension} run playsound entity.generic.drink player ${player.username} ${target.x} ${target.y + .2} ${target.z}`);
        target.attack(2);
    }
})

EntityEvents.hurt(e => {
    const { entity, source } = e;

    if (source.actual.getMainHandItem() == 'kubejs:manure_stick') {
        if (entity.type != 'minecraft:slime' && entity.type != 'minecraft:bee') {
            entity.potionEffects.add('poison', 60);
        }
        return;
    }
})