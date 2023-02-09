"use strict"; // Created by ua.lifesheets on 01.01.2023

// Телепорт за координатами
mp.events.addCommand('tpc', (player, _, x, y, z) => {
    if (x == undefined || y == undefined || z == undefined) {
        return player.outputChatBox('/tpc [x] [y] [z]');
    }
    player.position = new mp.Vector3(parseFloat(x), parseFloat(y), parseFloat(z));
})

// Телепортує гравця
mp.events.addCommand('metp', (player, _, id) => {
    if (id == undefined) {
        return player.outputChatBox('/metp [id]');
    }
    let target = mp.players.at(id);
    if (target == null) {
        return player.notify('~r~ID игрока не найден!');
    }
    target.dimension = player.dimension;
    target.position = player.position;
    player.notify(`~g~ Вы телепортировали ~y~${target.id} ~g~ID`);
})

// Телепортуватись до гравця
mp.events.addCommand('goto', (player, _, id) => {
    if (id == undefined) {
        return player.outputChatBox('/goto [id]');
    }
    let target = mp.players.at(id);
    if (target == null) {
        return player.notify('~r~ID игрока не найден!');
    }
    player.dimension = target.dimension;
    player.position = target.position;
    player.notify(`~g~ Вы телепортировались к ~y~${target.id} ~g~ID`);
})