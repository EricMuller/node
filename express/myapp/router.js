var user = require('./routes/users');
var index = require('./routes/index');
var api = require('./routes/apis');
var nav = require('./routes/nav');


module.exports = function (app) {

	/* Index(main) route */
	app.get('/', index.index);

	/* User Routes */
	app.post('/apis/users', user.save);
	app.get('/apis/users', user.getAll);
	app.delete('apis/users/:id', user.delete);
	app.get('/apis/users/:id', user.get);
    
    //apis
    app.get('/apis', api.getAllApis(app));

    //menu

	app.get('/apis/nav', nav.nav);    
};