const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

// data storage
let _data = [
  // initial data
  {
    id: 1,
    name : 'Terrence S. Hatfield',
    phone: '651-603-1723',
    email: 'TerrenceSHatfield@rhyta.com'
  },
  {
    id: 2,
    name : 'Chris M. Manning',
    phone: '513-307-5859',
    email: 'ChrisMManning@dayrep.com'
  },
  {
    id: 3,
    name : 'Ricky M. Digiacomo',
    phone: '918-774-0199',
    email: 'RickyMDigiacomo@teleworm.us'
  },
  {
    id: 4,
    name : 'Michael K. Bayne',
    phone: '702-989-5145',
    email: 'MichaelKBayne@rhyta.com'
  },
  {
    id: 5,
    name : 'John I. Wilson',
    phone: '318-292-6700',
    email: 'JohnIWilson@dayrep.com'
  },
  {
    id: 6,
    name : 'Rodolfo P. Robinett',
    phone: '803-557-9815',
    email: 'RodolfoPRobinett@jourrapide.com'
  }
];

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
