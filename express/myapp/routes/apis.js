var app = require('../app');

/* Get all users */
var getAllApis = function(app) {


	//console.log(app);

	return function(reg, res){

		var datas =[];

		app._router.stack.forEach(function(middleware) {

			if (middleware.route) { 
			// routes registered directly on the app
				datas.push(middleware.route);

        	}
     	   console.log(middleware);
     	});

		//res.json(JSON.stringify(datas));	
		res.json(datas);	

	};
};

/* Exports all methods */
module.exports = {
    getAllApis: getAllApis,
};

