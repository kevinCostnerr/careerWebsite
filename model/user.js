
var mongoose = require(‘mongoose’);
var UserSchema = mongoose.Schema({
	email:{
		type: String,
		required: true;
	}
	password:{
		type: String,
		required: true;
	}
});
var User = module.exports = mongoose.model('User, UserSchema');
//get User
module.exports.getUsers = function (callback, limit){
	User.find(callback).limit(limit);
}
//add User
module.exports.addUser = function (user, callback){
	User.create(user, callback);
}

//update User
module.exports.updateUser = function (id, user, options, callback){
	var query = {_id: id};
	var update = {
		name: user.name
		password : password.name
	}
	User.findOneAndUpdate(query, update, options, callback);
}

