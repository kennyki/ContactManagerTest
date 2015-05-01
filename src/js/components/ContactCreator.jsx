const React = require('react/addons');

const ActionCreator = require('../actions/ContactActionCreators');

const Bootstrap = require('react-bootstrap');
const Button = Bootstrap.Button;
const Grid = Bootstrap.Grid;
const Row = Bootstrap.Row;
const Col = Bootstrap.Col;
const Input = Bootstrap.Input;
const Glyphicon = Bootstrap.Glyphicon;

let ContactCreator = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState() {
    return {
      name: '',
      email: '',
      phone: ''
    }
  },

  handleAddClick(e) {
    ActionCreator.add(this.state);
  },

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={4}>
            <Input type='text' className='form-control' placeholder="Full name" valueLink={this.linkState('name')} />
          </Col>
          <Col xs={3}>
            <Input type='text' className='form-control' placeholder="Email address" valueLink={this.linkState('email')} />
          </Col>
          <Col xs={3}>
            <Input type='text' className='form-control' placeholder="Telephone number" valueLink={this.linkState('phone')} />
          </Col>
          <Col xs={2}>
            <Button bsStyle='primary' onClick={this.handleAddClick}><Glyphicon glyph='plus' /> Add</Button>
          </Col>
        </Row>
      </Grid>
    );
  }

});

module.exports = ContactCreator;
