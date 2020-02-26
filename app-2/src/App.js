import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state={
        partyFood: ["Ice Ceam", "Sprinkles", "Chocolate Syrup", "Whipped Cream", "Cherries", "Ice Cream Cones"]
    };
  }
  render(){
    let iceCreamParty = this.state.partyFood.map((element, index) => {
    return <h3 key={index}>{element}</h3>;
    });
  return <div className="App">{iceCreamParty}</div>
  }
}

export default App;
