// requirements
var express = require('express'),
  app = express();

  var vegetables = [
          "Carrots",
          "Cucumber",
          "Peas"
           ];
//** sending dynamic files **//
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  //use res.render
  res.render('index', {name: "Elie"});
});

// a "GET" request to "/" will run the function below
app.get("/", function (req, res) {
  // send back the response: 'Hello World'
  res.send("Hello World");
});

//** routing **//
app.get("/vegetables", function (req, res) {
  // send all the veggies
  res.send(vegetables.join(", "));
});

//** url parameters **//
app.get("/hello/:name", function (req, res) {
  res.send("Hello, " + req.params.name);
});

//** query parameters **//
app.get("/hi", function (req, res) {
  var name = req.query.name;
  res.send("Hello, " + name);
});

// start the server
app.listen(3000, function () {
  console.log("Go to localhost:3000");
});
