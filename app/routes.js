

    // Module for API Routes (serving JSON)
module.exports = function(app) {
	var mongoose = require('mongoose'),
		User = require('./models/user')
		var user = new User();

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
    
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });
}
