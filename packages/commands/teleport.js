"use strict"; // Created by ua.lifesheets on 01.01.2023

// Телепорт за координатами
mp.events.addCommand('tpc', (player, _, x, y, z) => {
    if (x == undefined || y == undefined || z == undefined) {
        return player.outputChatBox('/tpc [x] [y] [z]');
    }
    player.position = new mp.Vector3(parseFloat(x), parseFloat(y), parseFloat(z));
})
