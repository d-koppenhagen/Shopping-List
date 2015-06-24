var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var shoppinglist = require('./routes/shoppinglist.js');

var app = express();
var config = require("./config.js");

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));


/* shopping list routes */
app.get('/list', shoppinglist.findAll);
app.get('/list/:id', shoppinglist.findById);
app.post('/list', shoppinglist.add);
app.put('/list/:id', shoppinglist.update);
app.delete('/list/:id', shoppinglist.delete);
app.delete('/list', shoppinglist.deleteAll);

app.use(express.static(__dirname + '/frontend'));

app.listen(config.port);
console.log("the shopping-list runs on:",config.port);
