'use strict';

/* ---------- MODULE DEPENDENCIES ---------- */

const Express = require('express');
const BodyParser = require('body-parser');
const MethodOverride = require('method-override');
const Morgan = require('morgan');
const Helmet = require('helmet');

/* ---------- APPLICATION ---------- */

let app = Express();

/* ---------- ROUTES ---------- */

const UserRoute = require('./api/user/user.route');

/* ---------- CONFIGURATIONS ---------- */

app.use(Helmet());
app.use(Morgan('dev'));
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(MethodOverride());

app.use(Express.static('./client'));

app.use('/api/users', UserRoute);

/* ---------- DATABASE ---------- */

const Database = require('./database');

app.setup = () => Database.connect(process.env.MONGO_URI);

/* ---------- MODULE EXPORTS ---------- */

app.start = (port, host) => app.listen(port, host);

/*function start2(port, host) {
    return app.listen(port, host);
}*/

module.exports = app;