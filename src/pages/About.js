import React, { Component } from 'react';
import { PageBanner } from '../components/PageBanner';

export class AboutPage extends Component {
  render() {
    return (
      <div>
        <PageBanner image="about">About</PageBanner>
        <div className="container container-main">
          <p><strong>OpenRCT2</strong> is an open-source re-implementation of RollerCoaster Tycoon 2 (RCT2). The gameplay revolves around building and maintaining an amusement park containing attractions, shops and facilities. The player must try to make a profit and maintain a good park reputation whilst keeping the guests happy. OpenRCT2 allows for both scenario and sandbox play. Scenarios require the player to complete a certain objective in a set time limit whilst sandbox allows the player to build a more flexible park with optionally no restrictions or finance.</p>
          <p>RollerCoaster Tycoon 2 was originally written by Chris Sawyer in x86 assembly and is the sequel to RollerCoaster Tycoon. The engine was based on Transport Tycoon, an older game which also has an equivalent open-source project, <a href="http://openttd.org" rel="nofollow">OpenTTD</a>. OpenRCT2 attempts to provide everything from RCT2 as well as many improvements and additional features, some of these include support for modern platforms, an improved interface, improved guest and staff AI, more editing tools, increased limits, and cooperative multiplayer. It also re-introduces mechanics from RollerCoaster Tycoon that were not present in RollerCoaster Tycoon 2. Some of those include; mountain tool in-game, the <em>"have fun"</em> objective, launched coasters (not passing-through the station) and several buttons on the toolbar.</p>
        </div>
      </div>
    );
  }
}
