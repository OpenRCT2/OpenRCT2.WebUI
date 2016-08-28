import React, { Component } from 'react';
import SideBar from './SideBar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <div className="MainContent">
          <h1>Servers</h1>
          <p className="App-intro">
            Coming soon.
          </p>
        </div>
        <p className="App-intro">
          Coming soon.
        </p>

        {this.props.children}
      </div>
    );
  }
}

export default App;
