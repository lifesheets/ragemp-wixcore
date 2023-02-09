"use strict"; // Created by ua.lifesheets on 01.01.2023

module.exports = async () => {
    //#region Global
    global.fs                       = require('fs');
    global.path                     = require('path');
    global.chalk                    = require('chalk');
    global.bcrypt                   = require('bcryptjs');
    global.Sequelize                = require('sequelize');
    global.Op                       = Sequelize.Op;
    global.WixCore                  = new Map();
    //#endregion
    try {
    } catch (err) {
    }
};