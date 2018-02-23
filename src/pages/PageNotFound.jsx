import React, { Component } from 'react';
import { PageBanner } from '../components/PageBanner';

export class PageNotFoundPage extends Component {
  render() {
    return (
      <React.Fragment>
        <PageBanner image="about"></PageBanner>
        <div className="container container-main">
          <p>This page does not exist.</p>
        </div>
      </React.Fragment>
    );
  }
}
