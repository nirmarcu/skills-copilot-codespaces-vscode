// Create web server
var express = require('express');
var app = express();

// Create a route to handle incoming requests
app.get('/comments', function(req, res){
  res.send('Hello World');
});

// Start the server
app.listen(3000, function(){
  console.log('Server is running on port 3000');
});

// Run the server by typing `node comments.js` in the terminal