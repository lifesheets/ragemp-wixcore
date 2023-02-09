"use strict"; // Created by ua.lifesheets on 01.01.2023

mp.events.addCommand('armour', (player, _, target, armour) => {
    if (target == undefined || armour == undefined) {
        return player.outputChatBox('/armour [player] [armour]');
    }
    var character = mp.players.at(target);
    if (character == null) {
        return player.notify('~r~ID игрока не найден!');
    }
    character.armour = parseInt(armour);
});