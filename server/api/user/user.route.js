'use strict';

const Router = require('express').Router();

//Router.get('/', () => {});
//Router.post('/', () => {});

// -----

Router.route('/')
    .get((req, res, next) => {
        res.send("Hello World!");
    });

Router.route('/all')
    .get((req, res, next) => {
        res.send("all users !");
    });

module.exports = Router;