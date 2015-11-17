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

    $("#signin").click(function () {
      var username = $("#login-email").val();
      var userpw = $("#login-password").val();
      auth.login(username, userpw);
      window.location.href = "/main.html";
    });

    $("#register").click(function () {
      var createEmail = $("#createEmail").val();
      var createPassword = $("#createPassword").val();
      console.log("register button");
      auth.createUser(createEmail, createPassword);
    });

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
       })
    } else {
      console.log("Failure");
    }

  }
);
