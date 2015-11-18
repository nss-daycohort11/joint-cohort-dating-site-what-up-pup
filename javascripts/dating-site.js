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
    
    
      require(["hbs!../templates/landing-page"], function (landingPage) {
        $("#catcher").html(landingPage());
      });

    $(document).on('click', 'shown.bs.modal', function() {
      $('#myInput').focus();
      console.log("This bootstrap thing works"); 
    })

   
    


    /*  event listener confirms former user sign in. gets click, grabs values from email and password
        stores them in variables, then the auth.login function is called, which validates       ===>>>>>> 
        the user's info in Firebase by passing the email and password values as arguments. 
        Then the main.html page loads. */
    $("#signin").click(function () {
      var username = $("#login-email").val();
      var userpw = $("#login-password").val();
     var user = auth.login(username, userpw);
      if (user) {
        // load up a new view through handlebars
      }

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

    /*  The user enters their personal info into the profile fields, and when the save button is clicked,
        all of the values from the fields are passed as arguments into the auth.addUser function, which gets 
        values and pushes them into the users object in Firebase for storag. */
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

    /* checks what page is currently loaded, and if it is 'main.html', it waits for the promise
        to be returned from load.js which is the users data being returned from Firebase, then the 
        dom.buildProfiles function is called, passing the users data into the template, where it is 
        looped over to populate the dom with profiles. */ 
    var currentLocation = window.location.pathname;
    if (currentLocation == "/main.html") {
       getUsers()
       .then(function (returned) {
        console.log("returned data", returned);
        dom.buildProfiles(returned);
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
