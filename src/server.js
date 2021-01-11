//install express server
const express = require('express');
const path = require('path');

const app= express();
// server only static file from tje dist directory
// replace the '/dist/<to your project name></to>'
app.use(express.static(__dirname + '/dist/angularfronten1d'));
app.get('*' , function(req,res){
  //replace the '/dist to your priject name>index.html'
  res.sendFile(path.join(__dirname +'/dist/angularfronten1d/index.html'));

});
//start the app by listeninh on the default heruku port
app.listen(process.env.PORT || 8080);
