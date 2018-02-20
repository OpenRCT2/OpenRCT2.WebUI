import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../img/logo.png';

let navButtons = [
  {text: "About", "link": "/about"},
  {text: "Download", "link": "/download"},
  {text: "Docs", "link": "/docs"},
  {text: "Content", "link": "/content"},
  {text: "CoasterCloud", "link": "/coastercloud"},
  {text: "Servers", "link": "/servers"},
  {text: "Forums", "link": "/forums"},
]

export class TopBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="30" height="30" alt="" /> OpenRCT2
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {navButtons.map((btn, index) => {
                let isActive = (location.pathname === btn.link);
                return (
                  <li className={"nav-item " + (isActive ? "active" : "")}>
                    <Link className="nav-link" to={btn.link}>{btn.text}</Link>
                  </li>)
              })}
            </ul>
            <Link className="text-light no-link-decor" to="/signin">
              <i className="fa fa-sign-in" /> Sign in
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
