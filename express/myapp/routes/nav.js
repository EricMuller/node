//var Model = require('./../models/models');
var path = require('path');

var nav = function(libelle, link){
	this.libelle = libelle;
  	this.link = link;
}


var navmenu = function (req, res) {
	var menu =  new nav("api","/api/");


	//res.json(user);

	res.sendFile(path.resolve(__dirname + '/../public/nav/nav.json'));
};




/* Exports all methods */
module.exports = {
	nav: navmenu
};