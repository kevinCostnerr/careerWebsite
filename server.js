var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');
var JobPost = require('./model/jobpost.js');

var app = express();
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
var db;

MongoClient.connect('mongodb://aipproject:projectaip@ds159963.mlab.com:59963/aipdb', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.set('view engine', 'html');
app.engine('html', function(path, options, callbacks){
  fs.readFile(path, 'utf-8', callback);
});

// Use middlewares to set view engine and post json data to the server
app.use(express.static(path.join(__dirname, 'public')));
//app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

router.get('/', function(req, res) {
  db.collection('jobPost').find().toArray(function(err, results) {
   console.log(results)
 });
});
app.use('/api', router);

app.use('/add', function(req,res){
  db.collection('jobPost').insert({
    title: 'business analyst',
    location: 'Sydney, NSW',
    remuneration: '60000',
    description: 'Business analyst needed'
  })
});

var port = 8000;
app.listen(port, function(){
  console.log('Server is running at localhost:' + port);
})
