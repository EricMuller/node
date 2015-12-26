var express = require('express');
var router = express.Router();
var debug = require('debug')('notes')



/* GET users listing. */
router.get('/', function(req, res, next) {
  debug('ssssssssssss');
  res.send('resdspond with a notes RESSOURCES');
});

router.get('/:id', function(req, res, next) {
  debug('ssssssssssss');
  res.send('resdspond with a notes RESSOURCES');
});

router.post('/:id', function(req, res, next) {
  debug('ssssssssssss');
  res.send('resdspond with a notes RESSOURCES');
});


module.exports.base='/notes'
module.exports.router = router;
