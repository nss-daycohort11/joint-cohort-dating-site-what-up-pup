define(function (require) {
  fb = require('firebase');
  // set authInfo to null to check whether the user is logged in. If null then the user is not logged in.
  var authInfo = null;
  // ref variable holds the data from the root directory of Firebase
  var ref = new Firebase('https://what-up-pup.firebaseio.com');
  // users variable holds the data from the firebase/users
  var users = new Firebase('https://what-up-pup.firebaseio.com/users');


  return {
    
    // this function is called the 'sign in' button is clicked.
    login: function (userEmail, pw) { // only used this part
       ref.authWithPassword({
        email: userEmail,
        password: pw
       }, function (error, authData) {  // not used
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
    addUser: function (aboutme, dogname, useremail, dogbreed, dogGender, ownergender, profilepic) {
      users.push({
        breed: dogbreed,
        doggender: dogGender,
        email: useremail,
        usergender: ownergender,
        aboutMe: aboutme,
        dogName: dogname,
        profile: profilepic
      });
    }
  };

});