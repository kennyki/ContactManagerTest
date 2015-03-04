(function (define) {
  'use strict';
  define([
        'backbone',
        'underscore',
        'jquery',
        'text!templates/contact.tmpl'
      ],
      function(Backbone,_,$,contactTpl){
        var ContactView = Backbone.View.extend({
          tagName: 'li',
          className: 'media col-md-6 col-lg-4',
          template: _.template(contactTpl),

          events: {
            'click .delete-contract': 'onClickDelete'
          },

          initialize: function() {
            this.listenTo(this.model, 'remove', this.remove);
          },

          render: function() {
            var html = this.template(this.model.toJSON());
            this.$el.append(html);
            return this;
          },

          onClickDelete: function(e) {
            e.preventDefault();
            this.model.destroy();
          }
        });
        return ContactView;
      });
}(define));
