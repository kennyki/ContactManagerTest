(function (define) {
    'use strict';
    define([
            'backbone',
            'underscore',
            'jquery',
            'views/contact',
            'text!templates/contacts.tmpl'
        ],
        function (Backbone, _, $, ContactView, contactsTpl) {
            var ContactsView = Backbone.View.extend({
                template: _.template(contactsTpl),

                initialize: function () {
                    this.listenTo(this.collection, 'add', this.render);
                    this.listenTo(this.collection, 'reset', this.render);
                    this.collection.fetch();
                },

                events: {
                    'keyup .contact-search': 'searchContacts'
                },
                renderOne: function (contact) {
                    var itemView = new ContactView({model: contact});
                    this.$('.contacts-container').append(itemView.render().$el);
                },

                searchContacts: function(e) {
                    var searchTerm = $.trim($('.contact-search').val()),
                        filtered = this.collection.search(searchTerm);
                    this.$('.contacts-container').empty();
                    if(filtered.length) {
                        _.each(filtered, this.renderOne, this);
                    }
                    else{
                        this.render();
                    }
                },

                render: function () {
                    var html = this.template();
                    this.$el.html(html);

                    this.collection.each(this.renderOne, this);

                    return this;
                }
            });
            return ContactsView;
        });
}(define));
