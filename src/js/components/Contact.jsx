const React = require('react');
const assign = require('object-assign');

const ActionCreator = require('../actions/ContactActionCreators');
const ContactEditor = require('./ContactEditor.jsx');
const ContactRemover = require('./ContactRemover.jsx');

const Bootstrap = require('react-bootstrap');
const ButtonToolbar = Bootstrap.ButtonToolbar;
const Button = Bootstrap.Button;
const Glyphicon = Bootstrap.Glyphicon;
const Row = Bootstrap.Row;
const Col = Bootstrap.Col;
const Panel = Bootstrap.Panel;
const ModalTrigger = Bootstrap.ModalTrigger;
const OverlayTrigger = Bootstrap.OverlayTrigger;
const Tooltip = Bootstrap.Tooltip;

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
      <Panel className="contact">
        <p className="media">
          <div className="media-left">
            <img className="media-object" src={contact.avatar} alt={contact.name} />
          </div>
          <div className="media-body">
            <h3 className="media-heading">{contact.name}</h3>
            <p>
              <ButtonToolbar>
                <ModalTrigger modal={<ContactEditor contact={contact} />}>
                  <OverlayTrigger placement='bottom' overlay={<Tooltip>Edit this contact</Tooltip>}>
                    <Button bsStyle="link" bsSize="small" title="Edit"><Glyphicon glyph='pencil' /></Button>
                  </OverlayTrigger>
                </ModalTrigger>
                <ModalTrigger modal={<ContactRemover contact={contact} />}>
                  <OverlayTrigger placement='bottom' overlay={<Tooltip>Remove this contact</Tooltip>}>
                    <Button bsStyle="link" bsSize="small" title="Remove"><Glyphicon glyph='trash' className="text-danger" /></Button>
                  </OverlayTrigger>
                </ModalTrigger>
              </ButtonToolbar>
            </p>
          </div>
        </p>
        <Row>
          <Col xs={4}>
            <div><Glyphicon glyph='earphone' /> Phone:</div>
            <div>
              <OverlayTrigger placement='top' overlay={<Tooltip>Call this contact</Tooltip>}>
                <a href={phoneLink}>{contact.phone}</a>
              </OverlayTrigger>
            </div>
          </Col>
          <Col xs={8}>
            <div><Glyphicon glyph='envelope' /> Email:</div>
            <div>
              <OverlayTrigger placement='top' overlay={<Tooltip>Email this contact</Tooltip>}>
                <a href={emailLink}>{contact.email}</a>
              </OverlayTrigger>
            </div>
          </Col>
        </Row>
      </Panel>
    );
  }

});

module.exports = Contact;
