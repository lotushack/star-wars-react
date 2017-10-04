import React, { Component } from 'react';
import '../styles/App.css';
import './Cards.js'
import getVehicles from 'axios';

export default class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      pilot: "",
      displayPilot:""
    }
  }
  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  handleNameChange = (evt) => {
    this.setState({pilot: evt.target.value})
  }



  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
handleSubmit = (evt) => {
  evt.preventDefault();
  this.setState({displayPilot: this.state.pilot, pilot:""})
}

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  updateVehicles = () => {
    getVehicles().then((response) =>{
      this.setState({vehicles: response.data.results})
      console.log(response);
    })
  }
componentDidMount() {
  this.updateVehicles()
}



render() {
  return(
    <div className="pilotName">
      <h2>What's your name pilot?</h2>
    <form onSubmit={this.handleSubmit}>
      <div className="name">
        <input onChange={this.handleNameChange} name="name" type="text" value={this.state.pilot}/>
      </div>
      <div>
        <button type="submit" value="submit">Submit</button>
      </div>
    </form>
    <div>
      <h1>{this.state.displayPilot}</h1>
    </div>
    </div>
  )
}

}
