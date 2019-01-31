'use strict';

const Router = require('express').Router();
const UserModel = require('./user.model');

Router.param('toto', (req, res, next, id) => {
    console.log("CALLED ONCE");
});

//TODO: Error management

Router.route('/')
    .get(async (req, res) => {
        const {id, name} = req.query;
        let users = await UserModel.find().catch(err => next(err));
        res.json(users);
    })
    .post((req, res) => {
        const body = req.body;

        /*let user = new UserModel(birth);
        user.save().then();*/

        UserModel.create(body).then(user => {
            res.json(user);
        }).catch(err => next(err));
    });

Router.route('/all')
    .get((req, res, next) => {
        res.send("all users !");
    });

Router.route('/:toto')
    .get((req, res, next) => {
        const {toto} = req.params;
        console.log("CALLED AFTER");
        res.send("delete user # " + toto);
    });



module.exports = Router;