import React, { Component } from 'react';
import { PageBanner } from '../components/PageBanner';

export class CoasterCloudPage extends Component {
  render() {
    return (
      <div>
        <PageBanner image="coastercloud">CoasterCloud</PageBanner>
        <div className="container container-main">
          <p>Coming soon...</p>
        </div>
      </div>
    );
  }
}
