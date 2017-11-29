

    // Module for API Routes (serving JSON)
module.exports = function(app) {
	var mongoose = require('mongoose'),
		User = require('./models/user')
		
		var http = require('https');
		const request = require('request');

	// Example API route
	app.post('/register', function(req, res) {
		console.log(req.body);
                User.create({
		 			username: req.body.username,
                	password : req.body.password,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName
		 		},
		 		function(err, model) {
		 			if(err) {
						 console.log(err);
		 				res.send("Please try again!");
		 			}
		 			res.send("You are logged In!");
		 		});
	});

	// Example API route
	app.post('/createIssue', function(req, res) {

		
		console.log(req.body);
		// Set the headers
		var headers = {
			'User-Agent':       'Super Agent/0.0.1',
			'Content-Type':     'application/json',
			//application/json
			'Authorization': 'token xxx'
		}

		// Configure the request
		var options = {
			url: 'https://api.github.com/repos/poorvi10/angular-notes/issues',
			method: 'POST',
			headers: headers,
			form: {
				"title": "Found a bug",
				"body": "I'm having a problem with this."
			}
		}

	   // Start the request
		request(options, function (error, response, body) {
			console.log(response);
			console.log(body);
			if (!error && response.statusCode == 200) {
				// Print out the response body
				console.log(body)
			} else {
				console.log("error");
			}
		});				
    });

    
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });
}
