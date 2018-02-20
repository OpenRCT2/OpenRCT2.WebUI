import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
  render() {
    function ExternalButton(props) {
      return (
        <a className="external" href={props.to}>
          <i className={props.className} />
        </a>
      )
    }

    return (
      <footer className="container">
        <ExternalButton to="https://github.com/OpenRCT2/OpenRCT2" className="fa fa-github-square" />
        <ExternalButton to="https://twitter.com/OpenRCT2" className="fa fa-twitter-square" />
        <ExternalButton to="https://facebook.com/OpenRCT2" className="fa fa-facebook-square" />
        &copy; 2018 OpenRCT2 Team | <Link to="/privacy">Privacy Policy</Link> | <Link to="/contact">Contact</Link>
      </footer>
    );
  }
}

export default Footer;
