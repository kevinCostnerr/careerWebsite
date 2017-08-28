var express = require('express');
var app = express();
var jobPostRouter = express.Router();

// Require JobPost model in our routes module
var JobPost = require('./model/jobpost');

// Defined store route
jobPostRouter.route('/add/post').post(function (req, res) {
  var jobPost = new JobPost(req.body);
      jobPost.save()
    .then(item => {
    res.json('Job post added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

module.exports = jobPostRouter;
