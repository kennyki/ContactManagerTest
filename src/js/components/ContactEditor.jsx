const React = require('react');
const assign = require('object-assign');

const DeepLinkedStateMixin = require('../mixins/DeepLinkedStateMixin');
const ContactEditorMixin = require('../mixins/ContactEditorMixin');
const ActionCreator = require('../actions/ContactActionCreators');
const ContactStore = require('../stores/ContactStore');

const Bootstrap = require('react-bootstrap');
const Modal = Bootstrap.Modal;
const ButtonToolbar = Bootstrap.ButtonToolbar;
const Button = Bootstrap.Button;
const Input = Bootstrap.Input;
const Glyphicon = Bootstrap.Glyphicon;

let ContactEditor = React.createClass({

  mixins: [DeepLinkedStateMixin, ContactEditorMixin],

  getInitialState() {
    return {
      isFilled: true,
      contact: assign({}, this.props.contact)
    };
  },

  _onChange() {
    this.props.onRequestHide();
  },

  componentDidMount() {
    ContactStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    ContactStore.removeChangeListener(this._onChange);
  },

  handleEditContact(e) {
    e.preventDefault();

    if (!this.isFilled()) {
      return;
    }

    ActionCreator.update(this.state.contact);
  },

  render() {
    let shouldDisable = !this.state.isFilled;

    return (
      <Modal animation={false}>
        <form onSubmit={this.handleEditContact}>
          <div className="modal-body">
            <Input type='text' label="Full name" tabIndex="11" autoFocus 
              valueLink={this.linkState('contact.name', this.onContactChanged)} />
            <Input type='email' label="Email address" tabIndex="12" 
              valueLink={this.linkState('contact.email', this.onContactChanged)} />
            <Input type='text' label="Telephone number" tabIndex="13" 
              valueLink={this.linkState('contact.phone', this.onContactChanged)} />
          </div>
          <div className="modal-footer">
            <ButtonToolbar>
              <Button tabIndex="15" type="button" onClick={this.props.onRequestHide}>
                <Glyphicon glyph='remove' /> Cancel
              </Button>
              <Button bsStyle="primary" disabled={shouldDisable} tabIndex="14" type="submit">
                <Glyphicon glyph='pencil' /> Confirm
              </Button>
            </ButtonToolbar>
          </div>
        </form>
      </Modal>
    );
  }
});

module.exports = ContactEditor;
