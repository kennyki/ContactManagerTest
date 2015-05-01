const React = require('react');
const assign = require('object-assign');

const DeepLinkedStateMixin = require('../addons/DeepLinkedStateMixin');
const ActionCreator = require('../actions/ContactActionCreators');

const Bootstrap = require('react-bootstrap');
const Button = Bootstrap.Button;
const Panel = Bootstrap.Panel;
const Grid = Bootstrap.Grid;
const Row = Bootstrap.Row;
const Col = Bootstrap.Col;
const Input = Bootstrap.Input;
const Glyphicon = Bootstrap.Glyphicon;

let ContactCreator = React.createClass({

  mixins: [DeepLinkedStateMixin],

  getInitialState() {
    return {
      isFilled: false,
      newContact: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },

  handleAddContact(e) {
    e.preventDefault();

    let isFilled = this.isFilled();

    if (!isFilled) {
      return;
    }

    let newContact = assign({}, this.state.newContact);

    ActionCreator.add(newContact);
  },

  onContactChanged() {
    this.state.isFilled = this.isFilled();
  },

  isFilled() {
    let newContact = this.state.newContact;
    let hasEmpty = Object.keys(newContact).some(function(prop) {
      if (!newContact[prop]) {
        return true;
      }
    });

    return !hasEmpty;
  },

  render() {
    let shouldDisable = !this.state.isFilled;

    return (
      <Grid>
        <Panel>
          <Row>
            <form onSubmit={this.handleAddContact}>
              <Col xs={4}>
                <Input type='text' standalone label="Full name" tabindex="1" 
                  valueLink={this.linkState('newContact.name', this.onContactChanged)} />
              </Col>
              <Col xs={3}>
                <Input type='email' standalone label="Email address" tabindex="2" 
                  valueLink={this.linkState('newContact.email', this.onContactChanged)} />
              </Col>
              <Col xs={3}>
                <Input type='text' standalone label="Telephone number" tabindex="3" 
                  valueLink={this.linkState('newContact.phone', this.onContactChanged)} />
              </Col>
              <Col xs={2}>
                <label>&nbsp;</label>
                <Button bsStyle='primary' block disabled={shouldDisable} tabindex="4" type="submit">
                  <Glyphicon glyph='plus' /> Add
                </Button>
              </Col>
            </form>
          </Row>
        </Panel>
      </Grid>
    );
  }

});

module.exports = ContactCreator;
