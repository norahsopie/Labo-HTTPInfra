$(function() {
  console.log("Loading addresses");

  function loadAddresses() {
     $.getJSON( "/api/students/", function( addresses ) {
        console.log(addresses);
        var message = "No addresses to show";
        if ( addresses.length > 0 ) {
            message = addresses[0].country + " " + addresses[0].city + " " + addresses[0].address;
         }
         $(".skills").text(message);
});

  };

  loadAddresses();
  setInterval( loadAddresses, 1500 );

});

