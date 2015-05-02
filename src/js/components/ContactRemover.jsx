const React = require('react');

const ActionCreator = require('../actions/ContactActionCreators');
const ContactStore = require('../stores/ContactStore');

const Bootstrap = require('react-bootstrap');
const Modal = Bootstrap.Modal;
const ButtonToolbar = Bootstrap.ButtonToolbar;
const Button = Bootstrap.Button;
const Glyphicon = Bootstrap.Glyphicon;

let ContactRemover = React.createClass({
  
  _onChange() {
    this.props.onRequestHide();
  },

  componentDidMount() {
    ContactStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    ContactStore.removeChangeListener(this._onChange);
  },

  handleRemoveContact(e) {
    e.preventDefault();

    ActionCreator.remove(this.props.contact.id);
  },

  render() {
    let {contact} = this.props;

    return (
      <Modal title="Remove Contact" bsStyle="danger" onRequestHide={this.props.onRequestHide}>
        <form onSubmit={this.handleRemoveContact}>
          <div className="modal-body text-danger">
            Remove <strong>{contact.name}</strong> from your contact list?
          </div>
          <div className="modal-footer">
            <ButtonToolbar>
              <Button autoFocus tabIndex="21" type="button" onClick={this.props.onRequestHide}>
                <Glyphicon glyph='remove' /> No
              </Button>
              <Button bsStyle="danger" tabIndex="22" type="submit">
                <Glyphicon glyph='trash' /> Yes
              </Button>
            </ButtonToolbar>
          </div>
        </form>
      </Modal>
    );
  }
});

module.exports = ContactRemover;
