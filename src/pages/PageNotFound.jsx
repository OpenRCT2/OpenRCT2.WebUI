import React, { Component } from 'react';
import { PageBanner } from '../components/PageBanner';

export class PageNotFoundPage extends Component {
  render() {
    return (
      <div>
        <PageBanner image="about"></PageBanner>
        <div className="container container-main">
          <p>This page does not exist.</p>
        </div>
      </div>
    );
  }
}
