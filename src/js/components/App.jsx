const React = require('react');

const ContactCreator = require('./ContactCreator.jsx');
const ContactList = require('./ContactList.jsx');

let App = React.createClass({

  render() {
    return (
      <section>
        <header className="bs-header">
          <div className="container">
            <h1>Contact Manager<small>Simple React and Flux example application</small></h1>
          </div>
        </header>
        <ContactCreator />
        <ContactList />
      </section>
    );
  }

});

module.exports = App;
