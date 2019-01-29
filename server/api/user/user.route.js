'use strict';

const Router = require('express').Router();

Router.route('/')
    .get((req, res, next) => {
       res.send("Hello World !");
    });


module.exports = Router;