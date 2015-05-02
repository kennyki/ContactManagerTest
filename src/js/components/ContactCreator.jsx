const React = require('react');
const assign = require('object-assign');

const DeepLinkedStateMixin = require('../mixins/DeepLinkedStateMixin');
const ContactEditorMixin = require('../mixins/ContactEditorMixin');
const ActionCreator = require('../actions/ContactActionCreators');

const Bootstrap = require('react-bootstrap');
const Button = Bootstrap.Button;
const Well = Bootstrap.Well;
const Grid = Bootstrap.Grid;
const Row = Bootstrap.Row;
const Col = Bootstrap.Col;
const Input = Bootstrap.Input;
const Glyphicon = Bootstrap.Glyphicon;

let ContactCreator = React.createClass({

  mixins: [DeepLinkedStateMixin, ContactEditorMixin],

  getInitialState() {
    return {
      isFilled: false,
      contact: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },

  handleAddContact(e) {
    e.preventDefault();

    if (!this.isFilled()) {
      return;
    }

    let contact = assign({}, this.state.contact);

    ActionCreator.add(contact);
  },

  render() {
    let shouldDisable = !this.state.isFilled;

    return (
      <Grid>
        <Well bsSize="small">
          <Row>
            <form onSubmit={this.handleAddContact}>
              <Col xs={4}>
                <Input type='text' standalone label="Full name" tabIndex="1" 
                  valueLink={this.linkState('contact.name', this.onContactChanged)} />
              </Col>
              <Col xs={3}>
                <Input type='email' standalone label="Email address" tabIndex="2" 
                  valueLink={this.linkState('contact.email', this.onContactChanged)} />
              </Col>
              <Col xs={3}>
                <Input type='text' standalone label="Telephone number" tabIndex="3" 
                  valueLink={this.linkState('contact.phone', this.onContactChanged)} />
              </Col>
              <Col xs={2}>
                <label>&nbsp;</label>
                <Button bsStyle='primary' block disabled={shouldDisable} tabIndex="4" type="submit">
                  <Glyphicon glyph='plus' /> Add
                </Button>
              </Col>
            </form>
          </Row>
        </Well>
      </Grid>
    );
  }

});

module.exports = ContactCreator;
