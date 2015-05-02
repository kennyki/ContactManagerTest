var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  add(contact) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.ADD_CONTACT,
      data: contact
    });
  },

  update(contact) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.EDIT_CONTACT,
      data: contact
    });
  },

  remove(contactId) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.REMOVE_CONTACT,
      data: contactId
    });
  }

};
