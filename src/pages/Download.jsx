import React, { Component } from 'react';
import { PageBanner } from '../components/PageBanner';

export class DownloadPage extends Component {
  render() {
    const PlatformDownload = props => (
      <div className="col">
        <i className={"download-icon fa " + props.icon} />
        <div>
          <button className="download-button w-75">
            <div><i className="fa fa-download mr-2" /> {props.text}</div>
            <div className="sub-text">{props.subtext}</div>
          </button>
        </div>
      </div>
    );

    return (
      <React.Fragment>
        <PageBanner image="about">Download OpenRCT2</PageBanner>
        <div className="container container-main">
          <h3>Builds</h3>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">v0.1.2 (develop)</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">v0.1.1 (master)</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="home" role="tabpanel">
              <div className="row">
                <PlatformDownload icon="fa-windows" text="Windows" subtext="Windows 7, 8, 10" />
                <PlatformDownload icon="fa-apple" text="macOS" subtext="macOS 10.09+" />
                <PlatformDownload icon="fa-linux" text="Linux" subtext="Debian, Ubuntu 16.04" />
              </div>
            </div>
            <div className="tab-pane" id="profile" role="tabpanel">
            </div>
          </div>
          <h3>Launcher</h3>
          <p>The OpenRCT2 Launcher makes playing OpenRCT2 very simple. Just open the launcher, wait a few seconds and be ready to play. Without the launcher, you would have to update your game every time an develop update is made available.</p>
        </div>
      </React.Fragment>
    );
  }
}
