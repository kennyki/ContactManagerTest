const React = require('react');

const ContactCreator = require('./ContactCreator.jsx');
const ContactList = require('./ContactList.jsx');

let App = React.createClass({

  render() {
    return (
      <section>
        <header>
          <div className="container">
            <h1 className="text-center text-bright">Contact Manager <small>Built with Flux + React</small></h1>
          </div>
        </header>
        <ContactCreator />
        <ContactList />
      </section>
    );
  }

});

module.exports = App;
