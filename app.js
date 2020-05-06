var express = require('express');
var path = require('path');
var app = express();
var os = require('os');


// Simple app to host the build project for viewers
// Define the port to run on
app.set('port', 5322);

// Log Visitors for Debug
// app.use(function (req, res, next) {
//   var filename = path.basename(req.url);
//   var extension = path.extname(filename);
//   if(extension === '.html' || extension === ""){
//     console.log(new Date().toLocaleTimeString() + " " + req.ip +" " + filename + " ");
//   }
//   next();
// });

app.use(express.static(path.join(__dirname, 'dist')));

// Listen for requests, add your own IP to make it work
var server = app.listen(app.get('port'), '172.17.210.67', function () {
    var port = server.address().port;
    console.log('Magic happens on http://' + '172.17.210.67' + ':' + port);
});
