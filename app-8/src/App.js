import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component{
  constructor(){
    super();
      this.state={
        snorlax: ""
      };
  }
  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/').then(response => {this.setState({snorlax: response.data});
  });

  }
  render(){
  return (
    <div className="App">
      <h4>Name: {this.state.snorlax.name}</h4>
      <h4>Forms: {this.state.snorlax.forms}</h4>
      <h4>Moves: {this.state.snorlax.moves}</h4>
      <h4>Species: {this.state.snorlax.species}</h4>
    </div>
  );
}
}

export default App;
