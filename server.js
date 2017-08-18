var path = require('path');
var fs = require('fs');
var express = require('express');

var app = express();

app.set('view engine', 'html');
app.engine('html', function(path, options, callbacks){
  fs.readFile(path, 'utf-8', callback);
});

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

var port = 8000;
app.listen(port, function(){
  console.log('running at localhost:' + port);
})
