"use strict"; // Created by ua.lifesheets on 01.01.2023

(async () => {
    await require('./loaders/wixcore')();
    await require('./loaders/methods')();
    await require('./loaders/commands')();
    await require('./loaders/events')();
    await require('./loaders/modules')();
})();
