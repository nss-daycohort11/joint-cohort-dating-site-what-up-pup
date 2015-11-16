define(function (require) {
  fb = require('firebase');
  var authInfo = null;
  var ref = new Firebase('https://what-up-pup.firebaseio.com');

  return {
    getauthInfo: function () {
      return authInfo;
    },
    login: function (userEmail, pw) {
       ref.authWithPassword({
        email: userEmail,
        password: pw
       }, function (error, authData) {
         authInfo = authData;
         console.log("error", error);
         console.log("BlaH, BLAH", authData);
       })
    },
    createUser: function (userEmail, pw) {
      ref.createUser({
        email: userEmail, 
        password: pw
      }, function (error, userData) {
        console.log("userData", userData)
      })
    }
  }

});