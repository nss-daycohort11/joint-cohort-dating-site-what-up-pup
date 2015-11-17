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
  ["dependencies", "auth"], 
  function(_$_, auth) {

    $("#signin").click(function () {
      var username = $("#login-email").val();
      var userpw = $("#login-password").val();
      auth.login(username, userpw);
      window.location.href = "/main.html";
    });

    $("#registerButton").click(function () {
      var createEmail = $("#createEmail").val();
      var createPassword = $("#createPassword").val();
      auth.createUser(createEmail, createPassword);
    });


    
  }
);
