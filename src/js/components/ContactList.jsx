const React = require('react');

const ContactStore = require('../stores/ContactStore');
const Contact = require('./Contact.jsx');

const Bootstrap = require('react-bootstrap');
const Alert = Bootstrap.Alert;
const Grid = Bootstrap.Grid;
const Row = Bootstrap.Row;
const Col = Bootstrap.Col;

let ContactList = React.createClass({

  getInitialState() {
    return {
      contacts: []
    }
  },

  _onChange() {
    this.setState(ContactStore.getAll());
  },

  componentDidMount() {
    ContactStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    ContactStore.removeChangeListener(this._onChange);
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
        <Row>
          {contacts.map(contact =>
            <Col sm={4} md={3}>
              <Contact contact={contact} />
            </Col>
          )}
        </Row>
      </Grid>
    );
  }
});

module.exports = ContactList;
