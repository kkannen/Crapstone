import React, { Component } from 'react';
import LinearProgress from "@material-ui/core/LinearProgress"
import '../App.css';

class SideBarModule extends Component {

  render() {
    return (
        <div className="sideBarModule">

            <h4>{this.props.title}</h4>
            <p>{this.props.description}</p>
            <LinearProgress color="secondary" variant="determinate" value={this.props.progress}/>
        </div>
    );
  }
}

export default SideBarModule;