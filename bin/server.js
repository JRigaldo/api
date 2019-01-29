#!/usr/bin/env node

'use strict';

/* ---------- MAIN ---------- */

let app = require('../server/app.js');

/* ----------

APPEL LA FONCTION start depuis app.js
APPEL L'OBJET ENVIRONNEMENT QUI EST DEFINI DANS L'ENV DE LA MACHINE

---------- */

app.start(process.env.PORT);

