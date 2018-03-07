import React, { Component } from 'react';
import '../loading.css';

export class LoadingAnimation extends Component {
  render() {
    return (
      <div className="la-line-scale la-dark la-3x mx-auto">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
