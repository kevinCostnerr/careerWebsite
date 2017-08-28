/**
This file is used to initialise the express server
*/
/* initialising the variable needed by importing from library */
var path = require('path');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser')
var mongose = require('mongose')

User = require('./model/user')
/* initialise the  variable that is going to be the port number */
var port = 8000;
/* initialise app variable using express */
var app = express();

/* setting up the mongodb connection */
mongoose.connect('mongoodb://localhost/careerwebsite');
var db = mongoose.connection;

/* setting the html as the view engine */
app.set('view engine', 'html');

/* get data from the fs */
app.engine('html', function(path, options, callbacks){
  fs.readFile(path, 'utf-8', callback);
});

/* use express middleware to handles serving up the content from a directory */
app.use(express.static(__dirname));

app.use(bodyParser.json());

/* adding the routes for the index.html */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/user', function(req, res)){
	User.getUsers(function(err, users){
		if(err){
			throw err;
		}
		res.json(users);
	})
}
app.post('/api/user', function(req, res)){
	var user = req.body;
	User.addUser(user, function(err, users){
		if(err){
			throw err;
		}
		res.json(users);
	})
}

app.put('/api/user/:id', function(req, res)){
	var id = req.params._id;
	var user = req.body;
	User.updateUser(id, user, {}, function(err, users){
		if(err){
			throw err;
		}
		res.json(users);
	})
}

/*catch error when the server is ran*/
app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

/*starting the server and */
app.listen(port, function(){
  console.log('running at localhost:' + port);
})
