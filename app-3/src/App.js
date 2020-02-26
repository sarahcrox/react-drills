import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super();
      this.state={
        filterString:"",
        partyFood: ["Ice Cream ", "Sprinkles ", "Chocolate Syrup ", "Whipped Cream ", "Cherries ", "Ice Cream Cones "]
    };
  }
  handleChange(filter){
    this.setState({ filterString: filter})
  }
  render(){
  let iceCreamParty = this.state.partyFood.filter((element, index) => {return element.includes(this.state.filterString);
  });
  this.state.partyFood.map((element, index) => {return <h3 key={index}>{element}</h3>;
  });
  
  return (
    <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type="text"/>
      {iceCreamParty}
    </div>
    );
  }
}
export default App
