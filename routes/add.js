var data = require("../data.json");

exports.addFriend = function(request, response) {    
	 var nameToShow = request.query.name;
	 var descripitionToShow = request.query.description;
	 console.log();
	 response.render('index', data.friends.push({
	 	"name": nameToShow,
			"description": descripitionToShow,
			"imageURL": "http://lorempixel.com/400/400/people/"
	 }));
	};