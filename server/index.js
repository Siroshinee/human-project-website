const express = require('express')
const cors = require("cors"); 
const app = express();

app.use(cors());  // to prevent CORS related issues

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/dogs', function (req, res) {
    res.send('dogs in the world')
})

app.listen(3138, function() {
    console.log ("server has started listening on port 3138");
});

app.get("/api/features", function (req, res) { 
var features= [
{
    body : "Feature1",
    author : "Shiro",
    time : Date.now()
},
{
    body : "Feature2",
    author : "Author2",
    time : Date.now()
},
{
    body : "Feature3",
    author : "Author3",
    time : Date.now()
},
];
res.send(features);
});
