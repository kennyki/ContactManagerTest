(function (define) {
  'use strict';
  define([
        'controllers/ContactManagerController'
      ],
      function(
          ContactManagerController
      ){
        var App = {
          init: function() {
            ContactManagerController.start();
          }
        };
        return App;
      });
}(define));
