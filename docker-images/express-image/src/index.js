var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/test', function(req, res) {
  res.send("Hello again - test is working");
});

app.get('/', function(req, res) {
  res.send(generateAddresses());
});

app.listen(3000, function() {
  console.log('Accepting HTTP requests on port 3000');
});

function generateAddresses() {
  var numberOfAddresses = chance.integer({
    min: 0,
    max: 10
   });
  console.log(numberOfAddresses);
  var addresses = [];
  for (var i = 0; i < numberOfAddresses; i++){
    var country = chance.country({ full: true });
    var city = chance.city();
    var address = chance.address();
   addresses.push({
     country: country,
     city: city,
     address: address
   });

  };
  console.log(addresses);
  return addresses;
}

