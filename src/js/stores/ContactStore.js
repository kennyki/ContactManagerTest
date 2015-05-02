const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

// data storage
let _data = require('../SampleData');

function setRandomAvatar(contact) {
  // formula:
  // Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  var randNum = Math.floor(Math.random() * 15) + 1;

  contact.avatar = 'faces/' + randNum + '.jpg';
}

// init with random avatar
_data.forEach(setRandomAvatar);

// add private functions to modify data
// function name should map to the action type
let handlers = {

  // TODO: data validation

  ADD_CONTACT(contact) {
    contact.id = (new Date()).getTime();
    setRandomAvatar(contact);
    // put in front
    _data.unshift(contact);
  },

  EDIT_CONTACT(_contact) {
    _data.some(function(contact, i) {
      if (contact.id === _contact.id) {
        _data[i] = _contact;
        return true;
      }
    });
  },

  REMOVE_CONTACT(contactId) {
    var removeAt = -1;

    _data.some(function(contact, i) {
      if (contact.id === contactId) {
        removeAt = i;
        return true;
      }
    });

    if (removeAt !== -1) {
      _data.splice(removeAt, 1);
    }
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
