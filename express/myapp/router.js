var user = require('./routes/users');
var index = require('./routes/index');
var api = require('./routes/apis');
var nav = require('./routes/nav');


module.exports = function (app) {

    /* Index(main) route */
    app.get('/', index.index);
    /* User Routes */
    app.post('/api/users', user.save);
    app.get('/api/users', user.getAll);
    app.delete('api/users/:id', user.delete);
    app.get('/api/users/:id', user.get);
    //apis
    app.get('/api', api.getAllApis(app));
    //menu
    app.get('/api/nav', nav.nav);
};