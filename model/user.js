/* User schema 8*/
var mongoose = require(‘mongoose’);
const userSchema = mongoose.Schema({
	email:{
		type: String,
		required: true;
	}
	password:{
		type: String,
		required: true;
	}
});
const User = module.exports = mongoose.model('User', userSchema);
/*get User*/
module.exports.getUsers = (callback, limit) => {
	User.find(callback).limit(limit);
}
/*add User*/
module.exports.addUser = (user, callback) => {
	User.create(user, callback);
}

/*update User*/
module.exports.updateUser = (id, user, options, callback) => {
	var query = {_id: id};
	var update = {
		name: user.name
		password : user.password
	}
	User.findOneAndUpdate(query, update, options, callback);
}

