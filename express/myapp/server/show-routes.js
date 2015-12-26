module.exports = function(app) {

   // table = [];
 //  console.log(app);



    console.log('\n********************************************');
    console.log('\t\t API EXPRESS');
    console.log('********************************************\n');

    var route, routes = [];
    console.log(app);

    app._router.stack.forEach(function(middleware) {
    //app.forEach(function(r) {   
               // middleware =r.router
        console.log(middleware);
       /* if (middleware.route) { 
            // routes registered directly on the app
            routes.push(middleware.route);
        } else if (middleware.name === 'router') { */
    //        console.log('\t\t Router');
           // console.log(middleware.regexp);
            // router middleware 
            //middleware.handle.stack.forEach(function(handler) {
            middleware.stack.forEach(function(handler) {    
               // console.log(handler.route.path);
                route = handler.route;
          //      console.log(route);
                handler.route.stack.forEach(function( f){
                  routes.push(f.method.toUpperCase()+ ' '+r.base+route.path);
                })
            });
        //}
    });
    
    for(var i in routes) {
       console.log(routes[i]);
    }
        //console.log(route);

};