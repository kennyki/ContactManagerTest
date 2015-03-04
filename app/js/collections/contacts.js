(function (define) {
  'use strict';
  define([
    'backbone',
    'underscore',
    'models/contact',
    'localstorage'
  ],
  function(Backbone,_,Contact){
    var Contacts = Backbone.Collection.extend({
      model: Contact,
      localStorage: new Backbone.LocalStorage("Contacts"),
      search: function(text) {
        if(text === "") return [];
        var pattern = new RegExp(text,"i");
        return this.filter(function(contact) {
          return _.find(contact.toJSON(),function(value){
            return pattern.test(value);
          });
        });
      }
    });

    return Contacts;
  });
}(define));
