var app=require('../app');
var express = require('express');

var router = express.Router();
var debug = require('debug')('routes')

/* GET users listing. */
router.get('/', function(req, res, next) {
    
  var datas =[];
    
  app._router.forEach(function(r){
  if (r.route && r.route.path){
   console.log(r.route.path)
   datas.push(r.route.path);
  }
  });
  
    
res.json(JSON.stringify(datas));
  //res.send('resdspond with a notes RESSOURCES');
});


module.exports = router;