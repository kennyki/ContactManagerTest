var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  add(contact) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.ADD_CONTACT,
      data: contact
    });
  }

};
