module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-ngdocs');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    ngdocs: {
      options: {
        scripts: ['angular.js'],
        html5Mode: true,
        title: "Anaheim Documentation",
      },
      all: ['src/**/*.js']
    },
    connect: {
      options: {
        keepalive: true
      },
      server: {}
    },
    clean: ['docs']
  });

  grunt.registerTask('default', ['clean', 'ngdocs', 'connect']);

};