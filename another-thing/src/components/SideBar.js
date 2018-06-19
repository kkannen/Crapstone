import React, { Component } from 'react';
import SideBarModule from "./SideBarModule"
import '../App.css';
class SideBar extends Component {
modules = [
    {
        title: 'Composition of Programs',
        description: 'Structure and Interpretation of Computer Programs',
        progress: 10,
    },
    {
        title: 'Computer Architecture',
        description: 'how a computer actually works',
        progress: 50,
    },
    {
        title: 'Algorithms and Data Structures',
        description: 'how to use ubiquitous data structures like stacks, queues, trees, and graphs',
        progress: 45
    },
    {
        title: 'Math for CS',
        description: 'CS is basically a runaway branch of applied math',
        progress: 31,
    },
    {
        title: 'Computer Networking',
        description: 'The Internet turned out to be a big deal: understand how it works to unlock its full potential.',
        progress: 89,
    },
    {
        title: 'Databases',
        description: 'Data is at the heart of most significant programs',
        progress: 100,
    },
    {
        title: 'Languages and Compilers',
        description: 'understand how languages and compilers actually work',
        progress: 12,
    },
    {
        title: 'Distributed Systems',
        description: 'These days, most systems are distributed systems',
        progress: 74,
    },
]

renderModules = this.modules.map((module, index)=>{
        return (<SideBarModule key={index} title={module.title} description={module.description} progress={module.progress}/>)
    })

  render() {
    return (
        <div className="sideBar">
            <h2>Modules</h2>
            {this.renderModules}
        </div>
    );
  }
}

export default SideBar;