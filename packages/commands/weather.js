"use strict"; // Created by ua.lifesheets on 01.01.2023.

// Зміна погоди
mp.events.addCommand('setweather', (player, _, weather) => {
    if (weather == undefined) {
        return player.outputChatBox('/setw [weather]');
    }
    mp.world.weather = weather;
})