var express = require('express');
var router = express.Router();
var debug = require('debug')('users')


var Models = require('../models/models')


/* GET ALL  */
router.get('/', function(req, res, next) {

    Models.User.collection().fetch().then(function(collection) {
        console.log(collection);
        res.json(collection.toJSON());
    });


    // res.send('resdspond with a resssource');
});

/* GET ID*/
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    console.log('get resSSsource' + id);
    //{withRelated: ['posts.tags']}
    new Models.User('id', id).fetch().then(function(user) {
        //console.log(user.related('posts').toJSON());
        res.json(user.toJSON());    
        }).catch(Models.User.NotFoundError, function() {
            res.json({error: id + ' not found'});    
        }).catch(function(err) {
        console.error(err);
        res.status(500).send('Something broke!');
    });

  //  res.send('get resSSsource' + req.param('id'));

});

/* POST */

router.post('/', function(req, res, next) {
    console.log(req.body);
    new Models.User(req.body).save()
        .then(function(user) {
            console.log(user);
            res.send(user);
        }).catch(function(error) {
            console.log(error);
            res.status(500).send('Something broke!');
        });


});


module.exports.base = '/users';
module.exports.router = router;