import React, { Component } from 'react';
import SideBar from './SideBar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <div className="MainContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
