define(function (require) {
     var q = require("q");
     
	
	return function() {
	    var deferred = q.defer();
       	$.ajax({
       		url: "https://what-up-pup.firebaseio.com/users.json",
       		method: "GET"
       	}).done(function (data) {
            deferred.resolve(data);
       	});
       	return deferred.promise;
       };
});