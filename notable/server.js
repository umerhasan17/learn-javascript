const express = require('express');
const MongoClient = require ('mongodb').MongoClient;
const bodyParser = require('body-parser');

// initialise app as instance of express (the framework)
const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({extended: true}))

require('./app/routes')(app , {});

// sets up the server
app.listen(port , () => {
    console.log("We are live on " + port);
})


