var express = require('express');
var router = express.Router();
var Candy = require('../models/candy');

router.get('/', function(req, res) {
  res.json(Candy.all());
});

router.get('/:id', function(req, res) {
  candy = Candy.find(req.params.id);
  if(candy) {
    res.json(candy);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', function(req, res) {
  var candy = Candy.create(req.body);
  res.json(candy);
});

router.put('/:id', function(req, res) {
  if(Candy.update(req.params.id, req.body)) {
    res.status(204);
  } else {
    res.sendStatus(404);
  }
});

router.delete('/:id', function(req, res) {
  if(Candy.destroy(req.params.id)) {
    res.status(204);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;