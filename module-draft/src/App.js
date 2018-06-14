import React, { Component } from 'react';
import './App.css';

class App extends Component {
state = {
  chapters: ["1","2","3","4","5","6","7","8","9","10"]
}

// createChapters = () => {
//   this.state.chapters.map((chapter, index) => {
//     if(index%2===0) {
//       return (
//         <div style={this.stylie}>
//           <h4>1</h4>
//           <h4>Title</h4>
//           <h4>chapters</h4>
//           <i class="material-icons">play_circle_outline</i>
//         </div> 
//       )
//     } else {
//       return (
//         <div style={this.stylied}>
//           <h4>1</h4>
//           <h4>Title</h4>
//           <h4>chapters</h4>
//           <i class="material-icons">play_circle_outline</i>
//         </div> 
//       )
//     }
//   })
// }

  createChapters = () => {
    const chaps = [...this.state.chapters]
    chaps.map((chapter, index) => {
          
            return (
              <div style={this.stylie}>
                <h4>{chapter}</h4>
                <h4>Title</h4>
                <h4>chapters</h4>
                <i class="material-icons">play_circle_outline</i>
              </div> 
            )
          
        })
  }

  stylie = {
    backgroundColor: "#ddd",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    marginLeft: "5%"
  }
  stylied = {
    backgroundColor: "#dcdcdc",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    marginLeft: "5%"
  }

  render() {
    return (
      <div className="App">
        {this.createChapters()}
      </div>
    );
  }
}

export default App;
