import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { isSignedIn } from '../reducers/profile';
import logo from '../img/logo.png';

let navButtons = [
     {text: "About", link: "/about"},
     {text: "Download", link: "/download"},
     {text: "Docs", link: "/docs"},
     {text: "CoasterCloud", link: "/coastercloud"},
     {text: "Servers", link: "/servers"},
     {text: "Forums", link: "/forums"},
]

export class TopBar extends Component {
  render() {
    let renderProfile = (profile) => {
      if (isSignedIn(profile)) {
        return (
          <div className="text-light">
            <Link className="no-link-decor" to="/signout">
              <i className="fa fa-sign-out" />
            </Link> {profile.name}
          </div>
        )
      } else {
        return (
          <Link className="text-light no-link-decor" to="/signin">
            <i className="fa fa-sign-in" /> Sign in
          </Link>
        )
      }
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="30" height="30" alt="" /> OpenRCT2
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {navButtons.map((btn, index) => {
                let isActive = (location.pathname === btn.link);
                return (
                  <li key={index} className={"nav-item " + (isActive ? "active" : "")}>
                    <Link className="nav-link" to={btn.link}>{btn.text}</Link>
                  </li>)
              })}
            </ul>
            {renderProfile(this.props.profile)}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state, { params }) => {
  return { profile: state.profile };
};

TopBar = withRouter(connect(
  mapStateToProps
)(TopBar));
