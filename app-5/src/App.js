import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'
class App extends Component{
  render(){
    return (
      <div className="App">
        <Image url={"https://previews.123rf.com/images/olgastocker/olgastocker1701/olgastocker170100161/69468476-cartoon-robot-isolated-on-white-hand-drawn-vector-illustration-doodle-style-picture-sketch-design-el.jpg"} />
      </div>
  );
}
}
export default App;
