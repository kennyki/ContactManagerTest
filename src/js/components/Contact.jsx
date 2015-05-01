const React = require('react');

const ActionCreator = require('../actions/ContactActionCreators');

const Bootstrap = require('react-bootstrap');
const ButtonToolbar = Bootstrap.ButtonToolbar;
const Button = Bootstrap.Button;
const Glyphicon = Bootstrap.Glyphicon;
const Grid = Bootstrap.Grid;
const Row = Bootstrap.Row;
const Col = Bootstrap.Col;

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

  getRandomAvatar() {
    // formula:
    // Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var randNum = Math.floor(Math.random() * 15) + 1;

    return '/faces/' + randNum + '.jpg';
  },

  render() {
    let {contact} = this.props;
    let avatar = this.getRandomAvatar();
    let phoneLink = 'tel:' + contact.phone
    let emailLink = 'mailto:' + contact.email

    return (
      <div className="media">
        <div className="media-left">
          <img className="media-object" src={avatar} alt={contact.name} />
        </div>
        <div className="media-body">
          <h3 className="media-heading">{contact.name}</h3>
          <p>
            <ButtonToolbar>
              <Button bsStyle="link" bsSize="xsmall" title="Edit"><Glyphicon glyph='pencil' /></Button>
              <Button bsStyle="link" bsSize="xsmall" title="Delete"><Glyphicon glyph='trash' /></Button>
            </ButtonToolbar>
          </p>
          <p>
            <div><Glyphicon glyph='earphone' /> Phone Number:</div>
            <div><a href={phoneLink}>{contact.phone}</a></div>
          </p>
          <p>
            <div><Glyphicon glyph='envelope' /> Email:</div>
            <div><a href={emailLink}>{contact.email}</a></div>
          </p>
        </div>
        <hr />
      </div>
    );
  }

});

module.exports = Contact;
