const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

// data storage
let _data = [];

// add private functions to modify data
// function name should map to the action type
let handlers = {

  ADD_CONTACT(contact) {
    _data.push(contact);
  }

};

// Facebook style store creation.
let ContactStore = assign({}, BaseStore, {

  // public methods used by Controller-View to operate on data
  getAll() {
    return {
      contacts: _data
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;
    let handler = handlers[action.type];

    // NOTE: if this action needs to wait on another store:
    // AppDispatcher.waitFor([OtherStore.dispatchToken]);
    // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
    if (typeof handler === 'function') {
      handler(action.data);
      ContactStore.emitChange();
    }
  })

});

module.exports = ContactStore;
