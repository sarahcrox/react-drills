import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'
import NewTask from './NewTask'

class App extends Component {
  constructor(){
    super();
      this.state={
        list: []
      };
    this.handleAddTask=this.handleAddTask.bind(this);
  }
  handleAddTask(task){
    this.setState({ list: [...this.state.list, task] });
  }
  render(){
  return (
    <div className="App">
      <h5>My To-Do List:</h5>
      <NewTask add={this.handleAddTask}/>
      <List tasks={this.state.list}/>
      
    </div>
  );
}
}

export default App;
