"use strict"; // Created by ua.lifesheets on 01.01.2023

mp.events.addCommand('hp', (player, _, target, hp) => {
    if (target == undefined || hp == undefined) {
        return player.outputChatBox('/hp [player] [hp]');
    }
    var character = mp.players.at(target);
    if (character == null) {
        return player.notify('~r~ID игрока не найден!');
    }
    character.health = parseInt(hp);
})
