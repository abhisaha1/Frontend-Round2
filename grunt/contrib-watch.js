/**
 * Watch - observes changes in files and rebuild them as needed.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('watch', {
    options: {
      dot: true,
      spawn: false
    },

    compileCSS: {
      files: ['<%= xh.src %>/scss/**/*.scss'],
      tasks: ['build-css']
    },

    css: {
      files: ['<%= xh.dist %>/css/*.css'],
      options: {
        livereload: true
      }
    },

    html: {
      files: ['<%= xh.src %>/*.html', '<%= xh.includes %>/*.html'],
      tasks: ['build-html'],
      options: {
        livereload: true
      }
    },

    js: {
      files: ['<%= xh.src %>/js/*.js'],
      tasks: ['build-js'],
      options: {
        livereload: true
      }
    },

    assets: {
      files: ['<%= xh.src %>/<%= xh.assets %>/**/*'],
      tasks: ['build-assets'],
      options: {
        livereload: true
      }
    }
  });
};
