const express = require("express"); // import
const cors = require("cors"); // import cors
var timeAgo = require('node-time-ago');
const app = express(); // creating an express app


app.use(express.json()); //needed when working with POST requests (body contains JSON data)
app.use(cors()); // enabling cors to allow requests to come inside the server

var features = [
  {
    body: "Feature 1",
    author: "Shiro",
    time: Date.now()
  },
  {
    body: "Feature 2",
    author: "Student2",
    time: Date.now()
  },
  {
    body: "Feature 3",
    author: "Student3",
    time: Date.now()
  }];

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get("/dogs", function(req, res) {
  res.send("All the dogs in the world");
});

app.get("/features", function(req, res) {
  features.every(f=> (f.time = timeAgo(f.time)));
  res.send(features);
});

app.post("/features", function(req,res){
  console.log("This method was called");
  var newFeatureToBeAddedToArray = {
    body: req.body.feature,
    author:req.body.name,
    time:Date.now()
  };

  features.push(newFeatureToBeAddedToArray);
  console.log(features);
  res.send("Hello world");
});



app.listen(3000, function() {
  console.log("Application is running on Port 3000");
});
