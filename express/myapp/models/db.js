
var Bookshelf;

function getBookshelf() {
    var knex = require('knex')({
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'express',
            password: 'express',
            database: 'express',
            charset: 'utf8'
        }
    });
    //knex + bookshelf init here with check 
    Bookshelf = require('bookshelf')(knex);
    
    return Bookshelf;
}

module.exports = {
   //init: //could be used to init in app.js
    bookshelf: getBookshelf()

}
