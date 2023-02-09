"use strict"; // Created by ua.lifesheets on 01.01.2023

// Координати гравця
mp.events.addCommand('posplayer', (player) => {
    player.outputChatBox(`X: ${player.position.x.toFixed(4)} Y: ${player.position.y.toFixed(4)} Z: ${player.position.z.toFixed(4)}`);
    player.outputChatBox(`H: ${player.heading.toFixed(4)}`);
    console.log(`X: ${player.position.x.toFixed(2)} Y: ${player.position.y.toFixed(2)} Z: ${player.position.z.toFixed(2)}`);
})