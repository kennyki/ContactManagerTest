'use strict';

/**
 * Common functions for ContactCreator and ContactEditor.
 */
let ContactEditorMixin = {

  onContactChanged() {
    this.state.isFilled = this.isFilled();
  },

  isFilled() {
    let contact = this.state.contact;
    let hasEmpty = Object.keys(contact).some(function(prop) {
      if (!contact[prop]) {
        return true;
      }
    });

    return !hasEmpty;
  }

};

module.exports = ContactEditorMixin;