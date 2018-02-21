import React, { Component } from 'react';

export class PageBanner extends Component {
  render() {
    return (
      <div className={"container page-banner page-banner-" + this.props.image}>
          <h1>{this.props.children}</h1>
      </div>
    );
  }
}
