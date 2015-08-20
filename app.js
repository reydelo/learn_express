// requirements
var express = require('express'),
  app = express();

  var vegetables = [
          "Carrots",
          "Cucumber",
          "Peas"
           ];
// a "GET" request to "/" will run the function below
app.get("/", function (req, res) {
  // send back the response: 'Hello World'
  res.send("Hello World");
});

app.get("/vegetables", function (req, res) {
  // send all the veggies
  res.send(vegetables.join(", "));
});

// start the server
app.listen(3000, function () {
  console.log("Go to localhost:3000");
});
