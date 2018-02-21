import React, { Component } from 'react';

export class ExternalLink extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer">{this.props.children}</a>
    );
  }
}
