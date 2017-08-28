var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
var JobPostsSchema = new Schema({
  title: String,
  location: String,
  remuneration: Number,
  description: String},
  { collection : 'jobPost' });
  
//export our module to use in server.js
module.exports = mongoose.model('JobPost', JobPostsSchema);
