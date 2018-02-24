import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
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

const propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export class TopBar extends Component {
  render() {
    const { profile } = this.props;

    let renderProfile = () => {
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
          <div className="text-light">
            <Link className="no-link-decor" to="/signin">
              <i className="fa fa-sign-in" /> Sign in
            </Link>
            &nbsp;|&nbsp;
            <Link className="no-link-decor" to="/signup">Sign up</Link>
          </div>
        )
      }
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="30" height="30" alt="" /> {isSignedIn(profile) ? "" : "OpenRCT2"}
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {navButtons.map((btn, index) => {
                let isActive = (this.props.location.pathname === btn.link);
                return (
                  <li key={index} className={"nav-item " + (isActive ? "active" : "")}>
                    <Link className="nav-link" to={btn.link}>{btn.text}</Link>
                  </li>)
              })}
            </ul>
            {renderProfile()}
          </div>
        </div>
      </nav>
    );
  }
}

TopBar.propTypes = propTypes;
TopBar = withRouter(connect(mapStateToProps)(TopBar));
