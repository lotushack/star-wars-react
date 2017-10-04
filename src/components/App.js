import React, {Component} from 'react';
import '../styles/App.css';
import Jumbotron from './Jumbotron.js';
import Form from './Form.js';
import Cards from './Cards.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      vehicles: [],
      value: "",
      pilot: ""
    }
  }
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:


  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    return (
      <div className="App">
        <Jumbotron />
        <Form />
        <Cards
          vehicles={this.state.vehicles}
        />

      </div>
    )
    }

}


export default App;
