import React, { Component } from 'react';
import './App.css';
import SideBar from "./components/SideBar"

class App extends Component {
  moduleStyle={
    color:"white",
    width: "90%",
    padding: "5%"
  }
  render() {
    return (
      <div className="App">
        <SideBar/>
      </div>
    );
  }
}

export default App;
