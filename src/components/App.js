import React, { Component } from 'react';
import { TopBar } from './TopBar.js';
import { Footer } from './Footer.js';

export class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
