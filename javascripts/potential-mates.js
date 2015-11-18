define(function(require) {
  var q = require("q");

  // This function should return a promise
  function potentialMates() {
    $.ajax({
      url: "https://what-up-pup.firebaseio.com/users"
    })
    .done(function(response) {
      // Resolve the promise
    })
    .fail(function(xhr, status, error) {
      // Reject the promise
      });
    }
  });
});