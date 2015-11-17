define(function (require) {
  fb = require('firebase');
  var authInfo = null;
  var ref = new Firebase('https://what-up-pup.firebaseio.com');
  var users = new Firebase('https://what-up-pup.firebaseio.com/users');


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
       });
    },
    createUser: function (userEmail, pw) {
      ref.createUser({
        email: userEmail, 
        password: pw
      }, function (error, userData) {
        console.log("error", error);
        console.log("userData", userData);
        authInfo = userData.uid;
        if (userData !== null) {
          window.location.href = "profile.html";
        }
      });
    },
    addUser: function (aboutme, dogname, useremail, dogbreed, dogGender, ownergender) {
      users.push({
        breed: dogbreed,
        doggender: dogGender,
        email: useremail,
        usergender: ownergender,
        aboutMe: aboutme,
        dogName: dogname,
      });
    }
  };

});