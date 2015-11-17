define(function(require) {


    return {

      populateMain: function(matches) {
      require(['hbs!../templates/candidates'], function(candidateTemplate) {
        $("#main-content").append(candidateTemplate(matches));

        
      });
    }
  };
});