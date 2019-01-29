'use strict';

const Express = require('express');

let app = Express();


const UserRoute = require('./api/user/user.route');


app.use('./api/user', UserRoute);



app.start = (host, port) => {
   return app.listen(host, port, () => {
      console.log(`[${process.env.PORT}] server is listening @ ${process.env.PORT}`)
   });
}



module.exports = app;