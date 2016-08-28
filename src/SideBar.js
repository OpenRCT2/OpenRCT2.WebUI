import React, { Component } from 'react';
import './SideBar.css';
import logo from './logo.png';

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>OpenRCT2</h2>
        </div>
      </div>
    );
  }
}

export default SideBar;
