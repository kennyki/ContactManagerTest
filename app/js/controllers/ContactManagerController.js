(function (define) {
    'use strict';
    define([
            'backbone',
            'underscore',
            'jquery',
            'router',
            'collections/contacts',
            'views/contactForm',
            'views/contacts',
            'models/contact'
        ],
        function (Backbone,_,$,Router,ContactsCollection,ContactFormView,ContactsView,Contact) {
            var ContactManager = {

                start: function () {
                    var contacts = new ContactsCollection(),
                        router = new Router();
                    router.on('route:home', function () {
                        router.navigate('contacts', {
                            trigger: true,
                            replace: true
                        });
                    });

                    router.on('route:showContacts', function () {
                        var contactsView = new ContactsView({
                            collection: contacts
                        });

                        $('.main-container').html(contactsView.render().$el);
                    });

                    router.on('route:newContact', function () {
                        var newContactForm = new ContactFormView({
                            model: new Contact()
                        });

                        newContactForm.on('form:submitted', function (attrs) {
                            attrs.id = contacts.isEmpty() ? 1 : (_.max(contacts.pluck('id')) + 1);
                            var newContact = new Contact(attrs);
                            contacts.add(newContact);
                            newContact.save();
                            router.navigate('contacts', true);
                        });

                        $('.main-container').html(newContactForm.render().$el);
                    });

                    router.on('route:editContact', function (id) {
                        var contact = contacts.get(id),
                            editContactForm;

                        if (contact) {
                            editContactForm = new ContactFormView({
                                model: contact
                            });

                            editContactForm.on('form:submitted', function (attrs) {
                                contact.set(attrs);
                                contact.save();
                                router.navigate('contacts', true);
                            });

                            $('.main-container').html(editContactForm.render().$el);
                        } else {
                            router.navigate('contacts', true);
                        }
                    });

                    Backbone.history.start();
                }
            };
            return ContactManager;

        });
}(define));
