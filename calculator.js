// requirements
var express = require('express'),
  app = express();

app.get("/:math/:x/:y", function (req, res) {
  var x = parseInt(req.params.x),
      y = parseInt(req.params.y),
      math = req.params.math
  if (math == "add") {
    res.send((x + y).toString());
  } else if (math == "sub") {
    res.send((x-y).toString());
  } else if (math == "mult") {
    res.send((x*y).toString());
  } else if (math == "div") {
    res.send((x/y).toString());
  }
});

app.listen(8080, function () {
  console.log("Go to localhost:8080");
});
