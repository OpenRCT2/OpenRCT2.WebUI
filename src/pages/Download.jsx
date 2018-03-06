import React, { Component } from 'react';
import { PageBanner } from '../components/PageBanner';

export class TabPanel extends Component {
  constructor(props) {
    super(props);
    this.onTabClick = this.onTabClick.bind(this);
    this.state = {
      selectedIndex: 0
    };
  }

  onTabClick(e) {
    e.preventDefault();
    const index = parseInt(e.target.getAttribute('data-index'), 10);
    this.setState({ selectedIndex: index });
  }

  render() {
    return (
      <React.Fragment>
        <ul className="nav nav-tabs">
          {this.props.children.map((child, index) => {
            const isActive = (index === this.state.selectedIndex);
            return (
              <li key={index} className="nav-item">
                <a className={"nav-link " + (isActive ? "active" : "") }
                   tabIndex="0"
                   role="button"
                   data-index={index}
                   onClick={this.onTabClick}>{child.props.text}</a>
              </li>
            )
          })}
        </ul>
        <div className="tab-content">
          {this.props.children[this.state.selectedIndex]}
        </div>
      </React.Fragment>
    )
  }
}

export class Tab extends Component {
  render() {
    return (
      <div className="tab-pane active" role="tabpanel">
        {this.props.children}
      </div>
    )
  }
}

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
          <TabPanel>
            <Tab text="v0.1.2 (develop)">
              <div className="row">
                <PlatformDownload icon="fa-windows" text="Windows" subtext="Windows 7, 8, 10" />
                <PlatformDownload icon="fa-apple" text="macOS" subtext="macOS 10.09+" />
                <PlatformDownload icon="fa-linux" text="Linux" subtext="Debian, Ubuntu 16.04" />
              </div>
            </Tab>
            <Tab text="v0.1.1 (master)">
              <div className="row">
                <PlatformDownload icon="fa-windows" text="Windows" subtext="Windows 7, 8, 10" />
                <PlatformDownload icon="fa-apple" text="macOS" subtext="macOS 10.09+" />
                <PlatformDownload icon="fa-linux" text="Linux" subtext="Debian, Ubuntu 16.04" />
              </div>
            </Tab>
          </TabPanel>
          <h3>Launcher</h3>
          <p>The OpenRCT2 Launcher makes playing OpenRCT2 very simple. Just open the launcher, wait a few seconds and be ready to play. Without the launcher, you would have to update your game every time an develop update is made available.</p>
        </div>
      </React.Fragment>
    );
  }
}
