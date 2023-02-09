"use strict"; // Created by ua.lifesheets on 01.01.2023

mp.events.addCommand('veh', (player, _, id, veh, color1, color2) => {
    if (id == undefined || veh == undefined) {
        return player.outputChatBox('/veh [id] [model] [color1] [color2]');
    }
    let target = mp.players.at(id);
    if (target == null) {
        return player.notify('~r~ID игрока не найден!');
    }
    var created = mp.vehicles.new(mp.joaat(veh), new mp.Vector3(target.position.x + 2, target.position.y, target.position.z));
    created.setColor(parseInt(color1), parseInt(color2));
    player.dim = player.id;
    setTimeout(() => {
        target.putIntoVehicle(created, 0)
    }, 15)
})