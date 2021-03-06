var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
	console.log('___ENTER apiRoutes.js___');

// apiRoutes.js file should contain two routes:
// GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// POST routes /api/friends. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic. 

	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {
		var userInput = req.body;
		console.log('userInput = ' + JSON.stringify(userInput));

		var userResponses = userInput.scores;
		console.log('userResponses = ' + userResponses);

		var matchName = "";
		var matchImage = "";
		var totalDifference = 9999;

		for (var i = 0; i < friends.length; i++) {
			console.log('friend = ' + JSON.stringify(friends[i]));

			var diff = 0
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			console.log('diff = ' + diff);

			if (diff < totalDifference) {
				
				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
				console.log('Closest match found = ' + diff);
				console.log('Friend name = ' + friends[i].name);
				console.log('Friend image = ' + friends[i].photo);
			}
		}
		friends.push(userInput);

		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	}); 
};