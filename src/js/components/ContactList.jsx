const React = require('react');
const Masonry = require('masonry-layout');
const imagesLoaded = require('imagesloaded');

const ContactStore = require('../stores/ContactStore');
const Contact = require('./Contact.jsx');

const Bootstrap = require('react-bootstrap');
const Alert = Bootstrap.Alert;
const Grid = Bootstrap.Grid;
const Row = Bootstrap.Row;
const Col = Bootstrap.Col;

let msnry = null;

let ContactList = React.createClass({

  getInitialState() {
    return ContactStore.getAll();
  },

  _onChange() {
    this.setState(ContactStore.getAll());
  },

  componentDidMount() {
    ContactStore.addChangeListener(this._onChange);

    // apply masonry to deal with inconsistent contact card height
    let container = document.querySelector('#contact-list');

    msnry = new Masonry(container, {
      itemSelector: '.contact-wrapper'
    });

    // this will avoid the cards from overlaying each other after images are loaded
    imagesLoaded(container, function() {
      msnry.layout();
    });
  },

  componentWillUnmount() {
    ContactStore.removeChangeListener(this._onChange);
  },

  componentDidUpdate() {
    // refresh when a task is added/updated/removed
    msnry.reloadItems();
    msnry.layout();
  },

  render() {
    let {contacts} = this.state;

    if (contacts.length === 0) {
      return (
        <Grid>
          <Row>
            <Col xs={12}>
              <Alert bsStyle="warning">
                <strong>You have no contacts.</strong>
              </Alert>
            </Col>
          </Row>
        </Grid>
      );
    }

    return (
      <Grid>
        <Row id="contact-list">
          {contacts.map(contact =>
            <Col sm={6} md={4} className="contact-wrapper">
              <Contact contact={contact} />
            </Col>
          )}
        </Row>
      </Grid>
    );
  }
});

module.exports = ContactList;
