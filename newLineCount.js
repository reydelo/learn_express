var fs = require('fs');

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
