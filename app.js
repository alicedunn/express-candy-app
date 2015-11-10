var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var morgan = require('morgan');

var bodyParser = require('body-parser');
var candyController = require('./controllers/candies_controller');

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/candies', candyController);

app.listen(port);
console.log("Express is listening on localhost:" + port);