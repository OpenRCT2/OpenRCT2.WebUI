import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Profile } from '../selectors';
import logo from '../img/logo.png';

const navButtons = [
     {text: "About", link: "/about"},
     {text: "Download", link: "/download"},
     {text: "Docs", link: "/docs"},
     {text: "CoasterCloud", link: "/coastercloud"},
     {text: "Servers", link: "/servers"},
     {text: "Forums", link: "/forums"},
]

const propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string,
};

const mapStateToProps = state => ({
  isSignedIn: Profile.isSignedIn(state),
  userName: Profile.getName(state),
});

export class TopBar extends Component {
  render() {
    const { userName, isSignedIn } = this.props;

    let renderProfile = () => {
      if (isSignedIn) {
        return (
          <div className="text-light">
            <Link className="no-link-decor" to="/signout" title="Sign out">
              <i className="fa fa-sign-out" />
            </Link>&nbsp;
            <Link className="no-link-decor" to={"/user/" + userName}>
             {userName}
            </Link>
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
            <img src={logo} width="30" height="30" alt="" /> {isSignedIn ? "" : "OpenRCT2"}
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
