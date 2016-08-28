import React, { Component } from 'react';
import { Link } from 'react-router';
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
        <div className="Navigation">
          <ul role="nav">
            <li><Link to="/servers">Servers</Link></li>
            <li><Link to="/objects">Objects</Link></li>
            <li><Link to="/packs">Packs</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
