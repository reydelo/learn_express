var fs = require('fs'),
    http = require('http');

//** readFileSync **//
var read = fs.readFileSync(process.argv[2], 'utf8');
console.log(read.split('\n').length-1);

//** readFile **//
fs.readFile(process.argv[2], 'utf8', function(err, data){
  if (err) {
    console.error(err);
  } else {
    console.log(data.split('\n').length-1);
  }
});

//** http module/callbacks **//
var urls = ["http://omdbapi.com/?i=tt0241527", "http://omdbapi.com/?i=tt0295297"];

for (var i = 0; i < urls.length; i++) {
  getResponses(urls[i]);
}

var dataArray = [];

function getResponses(url) {
  http.get(url, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
      dataArray.push(data);
    });
    res.on('end', function() {
      if (dataArray.length == urls.length) {
        console.log(dataArray);
      }
    })
  });
}
