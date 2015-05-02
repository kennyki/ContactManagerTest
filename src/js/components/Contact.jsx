const React = require('react');
const assign = require('object-assign');

const ActionCreator = require('../actions/ContactActionCreators');
const ContactEditor = require('./ContactEditor.jsx');

const Bootstrap = require('react-bootstrap');
const ButtonToolbar = Bootstrap.ButtonToolbar;
const Button = Bootstrap.Button;
const Glyphicon = Bootstrap.Glyphicon;
const Row = Bootstrap.Row;
const Col = Bootstrap.Col;
const Panel = Bootstrap.Panel;
const ModalTrigger = Bootstrap.ModalTrigger;

let Contact = React.createClass({

  getDefaultProps() {
    return {
      contact: {
        name: '',
        email: '',
        phone: ''
      }
    };
  },

  render() {
    let {contact} = this.props;
    let phoneLink = 'tel:' + contact.phone
    let emailLink = 'mailto:' + contact.email

    return (
      <Panel className="modal-container">
        <p className="media">
          <div className="media-left">
            <img className="media-object" src={contact.avatar} alt={contact.name} />
          </div>
          <div className="media-body">
            <h3 className="media-heading">{contact.name}</h3>
            <p>
              <ButtonToolbar>
                <ModalTrigger modal={<ContactEditor container={this} contact={contact} />} container={this}>
                  <Button bsStyle="link" bsSize="small" title="Edit"><Glyphicon glyph='pencil' /></Button>
                </ModalTrigger>
                <Button bsStyle="link" bsSize="small" title="Delete"><Glyphicon glyph='trash' /></Button>
              </ButtonToolbar>
            </p>
          </div>
        </p>
        <Row>
          <Col xs={4}>
            <div><Glyphicon glyph='earphone' /> Phone:</div>
            <div><a href={phoneLink}>{contact.phone}</a></div>
          </Col>
          <Col xs={8}>
            <div><Glyphicon glyph='envelope' /> Email:</div>
          <div><a href={emailLink}>{contact.email}</a></div>
          </Col>
        </Row>
      </Panel>
    );
  }

});

module.exports = Contact;
