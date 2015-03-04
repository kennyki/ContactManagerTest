(function (define) {
  'use strict';
  define([
        'backbone'
      ],
      function(Backbone){
        var Router = Backbone.Router.extend({
          routes: {
            '': 'home',
            'contacts': 'showContacts',
            'contacts/new': 'newContact',
            'contacts/edit/:id': 'editContact'
          }
        });
        return Router;
      });
}(define));
