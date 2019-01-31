#!/usr/bin/env node

'use strict';

/* ---------- MAIN ---------- */

let app = require('../server/app.js');

/* ----------

APPEL LA FONCTION start depuis app.js
APPEL L'OBJET ENVIRONNEMENT QUI EST DEFINI DANS L'ENV DE LA MACHINE

---------- */

app.setup()
    .then(() => app.start(process.env.PORT, process.env.HOST))
    .then(() => console.info(`[${process.env.NODE_ENV}] Server listening @ ${process.env.HOST}:${process.env.PORT}`))
    .catch(err => consoile.error(error));


