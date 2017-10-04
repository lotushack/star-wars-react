import React, { Component } from 'react';
import getVehicles from '../service.js';

export default class Cards extends Component {
  constructor() {
    super();
    this.state ={
      vehicles: [],
    }
  }
  updateVehicles = () => {
    getVehicles().then((response) =>{
      this.setState({vehicles: response.data.results})
    })
  }
componentDidMount() {
  this.updateVehicles()
}


render(){
  console.log(this);
  return (
    <div className="cards-container row">
      {this.state.vehicles.map((vehicle, index) => {
        return (
          <div className="card" key={vehicle.name}>
            <div className="card-block">
              <h2>Vehicle: {vehicle.name}</h2>
              <h3>Model: {vehicle.model}</h3>
            </div>
            <p className="card-text">Specs</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
              <li className="list-group-item">Class: {vehicle.vehicle_class}</li>
              <li className="list-group-item">Passengers: {vehicle.passengers}</li>
              <li className="list-group-item">Crew: {vehicle.crew}</li>
              <li className="list-group-item">Length: {vehicle.length}</li>
              <li className="list-group-item">Max Speed: {vehicle.max_atmosphering_speed}</li>
              <li className="list-group-item">Cargo capacity: {vehicle.cargo_capacity}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

}
