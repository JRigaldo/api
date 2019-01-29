const Express = require('express');

let app = Express();

let users = [{name: 'Jerome'}, {name: 'axel'}];

/*const Router = Express.Router();

let UserRoute = Router.route('/toto')
    .post((req, res) => {
        res.json({Hello: "World!"});
    });

app.use('/users', UserRoute);*/

// -----------------

app.route('/').get((req, res) => {

    //res.send('Hello world');

    //res.sendStatus(418);

    //res.status(418).send("Je suis une grosse théière");

    res.json(users);
});

app.listen(process.env.PORT, () => console.log('Server is listening on ' + process.env.PORT));

module.exports = app;