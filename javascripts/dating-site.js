require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../lib/bower_components/firebase/firebase'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

require(
  ["dependencies", "auth", "load", "dom"], 
  function(_$_, auth, getUsers, dom) {


    /*  confirms former user sign in. gets click, grabs values from email and password
        stores them in variables, then the auth.login function is called, which validates       ===>>>>>> 
        the user's info in Firebase by passing the email and password values as arguments. 
        Then the main.html page loads. */
    $("#signin").click(function () {
      var username = $("#login-email").val();
      var userpw = $("#login-password").val();
      auth.login(username, userpw);
      
      window.location.href = "/main.html";

    });

    /*  when the user enters their email and password into the fields and register button is clicked, 
        the values from email and password are passed to the auth.createUser function, which uses the info
        to store a new user in Firebase. Then the user is directed to the profile.html page where the will 
        enter their personal info. */
    $("#register").click(function () {
      var createEmail = $("#createEmail").val();
      var createPassword = $("#createPassword").val();
      console.log("register button");
      auth.createUser(createEmail, createPassword);
    });

    /*  The user enters their personal info 
    */
    $("#saveButton").click(function () {
      var aboutme = $("#aboutMe").val();
      var email = $("#userEmail").val();
      var breed = $("#dogBreed").val();
      var dogGender = $("#dogGender").val();
      var ownerGender = $("#ownerGender").val();
      var dogname = $("#dogName").val();
      var profilepic = $("#profilepic").val();
      auth.addUser(aboutme, dogname, email, breed, dogGender, ownerGender, profilepic);
      window.location.href ="/main.html";
    });

    var currentLocation = window.location.pathname;
    if (currentLocation == "/main.html") {
       getUsers()
       .then(function (returned) {
        console.log("returned data", returned);
        dom.dom(returned);
        console.log(dom.dom);
      });
    } else {
      console.log("Failure");
    }

     $("body").on("click", "#favorite", function () {
      console.log("this", this);
     }) 

  }
);
