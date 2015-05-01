const React = require('react');

const ActionCreator = require('../actions/ContactActionCreators');

const Bootstrap = require('react-bootstrap');
const ButtonToolbar = Bootstrap.ButtonToolbar;
const Button = Bootstrap.Button;
const Glyphicon = Bootstrap.Glyphicon;

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
      <div className="thumbnail">
        <img src={avatar} />
        <div className="caption">
          <h3>{contact.name}</h3>
          <p>
            <ButtonToolbar>
              <Button bsStyle='link'><Glyphicon glyph='pencil' /></Button>
              <Button bsStyle='link'><Glyphicon glyph='trash' /></Button>
            </ButtonToolbar>
          </p>
          <p>
            <Glyphicon glyph='earphone' /> <a className="btn btn-link" href={phoneLink}>{contact.phone}</a>
          </p>
          <p>
            <Glyphicon glyph='envelope' /> <a className="btn btn-link" href={emailLink}>{contact.email}</a>
          </p>
        </div>
      </div>
    );
  }

});

module.exports = Contact;
