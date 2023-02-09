"use strict"; // Created by ua.lifesheets on 01.01.2023.

module.exports = async () => {
  try {
    await require('../commands/hp');             // Відновлення життя
    await require('../commands/kill');           // Відновлення броні
    await require('../commands/teleport');       // Телепорти гравця
    await require('../commands/veh');            // Створити транспорт
  } catch (err) {
  }
};
