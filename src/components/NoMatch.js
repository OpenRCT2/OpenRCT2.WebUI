import React, { Component } from 'react';

class NoMatch extends Component {
  render() {
    return (
      <div>
        <div className="container page-banner page-banner-content">
          <h1></h1>
        </div>
        <div className="container container-main">
          <p>This page does not exist.</p>
        </div>
      </div>
    );
  }
}

export default NoMatch;
