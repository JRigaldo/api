'use strict';

const Mongoose = require('mongoose');

Mongoose.Promise = global.Promise;

Mongoose.set('debug', false);

Mongoose.connection.on('connected', () => {
     const DB = Mongoose.connection;
     console.info(`[${process.env.NODE_ENV}] Mongoose connection open @ ${DB.host}:${DB.port} => ${DB.name}`);

});

Mongoose.connection.on('error', err => console.error('Mongoose connection error: ' + err));

Mongoose.connection.on('disconnected', () => console.info('Mongoose connection disconnected'));

process.on('SIGINT', () => {
     Mongoose.connection.close(() => {
          console.info('Mongoose connection disconnected through app termination');
          process.exit(0);
     });
});

/*function connect(uri) { // mongodb://[user]:[pass]@[host]:[port]/[db]?[params]
     Mongoose.connect(uri);
}*/

module.exports.connect = uri => Mongoose.connect(uri, {useNewUrlParser: true});

