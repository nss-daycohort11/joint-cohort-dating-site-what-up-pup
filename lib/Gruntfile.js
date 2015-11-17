module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['../javascripts/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../styles/main.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
<<<<<<< HEAD
      sassy: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
=======
       sassy: {
         files: ['../sass/**/*.scss'],
         tasks: ['sass']
>>>>>>> 00045de2b288486f8253f480655324a23c74f52e
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};
