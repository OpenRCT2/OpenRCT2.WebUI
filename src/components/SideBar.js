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
          <div className="App-header-text">OpenRCT2</div>
        </div>
        <div className="Navigation">
          <ul className="ul-stack Navigation-ul">
            <li><Link activeClassName="activePage" to="/servers">Servers</Link></li>
            <li><Link activeClassName="activePage" to="/objects">Objects</Link></li>
            <li><Link activeClassName="activePage" to="/packs">Packs</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
