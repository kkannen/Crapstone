import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinearProgress from "@material-ui/core/LinearProgress"
import Button from "@material-ui/core/Button"


class App extends Component {
  state = {
    progress: 90
  }

  updateProgress = () => {
    this.setState({progress: this.state.progress+=1})
  }

  completedOrNah = () => {
    if(this.state.progress<100){
      return (<LinearProgress variant="determinate" color="secondary" value={this.state.progress}/>)
    } else { 
      return (<LinearProgress variant="determinate" value={this.state.progress}/>)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="moduleCard">
          <h1>Title</h1>
          <p>lorem ipsum blah blah blah</p>
          {this.completedOrNah()}
          <Button variant="contained" color="secondary" onClick={this.updateProgress}>progress</Button>
        </div>
      </div>
    );
  }
}

export default App;
