"use strict"; // Created by ua.lifesheets on 01.01.2023.

module.exports = async () => {
  try {
    await require('../commands/hp');             // Відновлення життя
    await require('../commands/kill');           // Відновлення броні
  } catch (err) {
  }
};
