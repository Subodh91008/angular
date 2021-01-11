//install express server
const express = require('express');
const path = require('path');

const app= express();
// server only static file from tje dist directory
// replace the '/dist/<to your project name></to>'
app.use(express.static(__dirname + '/dist/Project'));
app.get('*' , function(req,res){
  //replace the '/dist to your priject name>index.html'
<<<<<<< HEAD:server.js
  res.sendFile(path.join(__dirname +'/dist//Project/index.html'));
=======
  res.sendFile(path.join(__dirname +'/dist/Project/index.html'));
>>>>>>> 124d2ec90bc63892ac4c5cc87ccb8fe4d0d42eab:src/server.js

});
//start the app by listeninh on the default heruku port
app.listen(process.env.PORT || 8080);
