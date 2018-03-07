import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import * as api from '../api';
import { ExternalLink } from '../components/ExternalLink';
import { LoadingAnimation } from '../components/LoadingAnimation';
import { PageBanner } from '../components/PageBanner';
import { Tab, TabPanel } from '../components/TabPanel';
import launcher_screenshot from '../img/launcher_screenshot.png';

const Flavours = {
  WindowsPortable64: 6,
  MacOS: 3,
  Linux64: 9
};

export class DownloadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      builds: null,
      date: null
    };
  }

  componentWillMount() {
    api.fetchLatestBuilds().then(result => {
      let buildsByFlavour = [];
      result.builds.forEach(b => {
        buildsByFlavour[b.flavour] = b;
      });
      this.setState({
        builds: buildsByFlavour,
        date: result.date });
      console.log(this.state);
    });
  }

  render() {
    const PlatformDownload = props => (
      <div className="col">
        <i className={"download-icon fa " + props.icon} />
        <div>
          <a className="download-button w-75" href={props.url}>
            <div><i className="fa fa-download mr-2" /> {props.text}</div>
            <div className="sub-text">{props.subtext}</div>
          </a>
        </div>
      </div>
    );

    const LatestBuilds = () => {
      const getUrl = flavour => {
        const { builds } = this.state;
        const build = builds[flavour];
        if (build) {
          return build.download
        } else {
          return "#";
        }
      }
      if (this.state.builds == null) {
        return (
          <div className="row">
            <LoadingAnimation />
          </div>
        )
      } else {
        return (
          <React.Fragment>
            <div className="row m-3">
              <PlatformDownload icon="fa-windows" text="Windows" subtext="Windows 7, 8, 10" url={getUrl(Flavours.WindowsPortable64)} />
              <PlatformDownload icon="fa-apple" text="macOS" subtext="macOS 10.09+" url={getUrl(Flavours.MacOS)} />
              <PlatformDownload icon="fa-linux" text="Linux" subtext="Debian, Ubuntu 16.04" url={getUrl(Flavours.Linux64)} />
            </div>
            <div>Last updated: <TimeAgo date={this.state.date} /></div>
          </React.Fragment>
        )
      }
    };

    return (
      <React.Fragment>
        <PageBanner image="about">Download OpenRCT2</PageBanner>
        <div className="container container-main">
          <h3>Builds</h3>
          <TabPanel>
            <Tab text="v0.1.2 (develop)">
              <p>
                The development builds of the game provide you with the latest features and bug fixes. The builds are updated in real time as code changes are committed. Bugs may manifest from time to time, in such case you can try reverting to an older build or use the last release until the bug has been fixed. Please report any bugs via <ExternalLink href="https://github.com/OpenRCT2/OpenRCT2/issues">GitHub</ExternalLink>.
              </p>
              <LatestBuilds />
            </Tab>
            <Tab text="v0.1.1 (master)">
              <div className="row">
                <PlatformDownload icon="fa-windows" text="Windows" subtext="Windows 7, 8, 10" url="https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.1.1/OpenRCT2-0.1.1-windows-portable-x64.zip" />
                <PlatformDownload icon="fa-apple" text="macOS" subtext="macOS 10.09+" url="https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.1.1/OpenRCT2-0.1.1-macos.zip" />
                <PlatformDownload icon="fa-linux" text="Linux" subtext="Debian, Ubuntu 16.04" url="https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.1.1/OpenRCT2-0.1.1-linux-x86_64.tar.gz" />
              </div>
            </Tab>
          </TabPanel>
          <h3>Launcher</h3>
          <div className="clearfix">
            <img src={launcher_screenshot} className="rounded float-left mr-3 mb-3" alt="OpenRCT2 Launcher" width="211" />
            <p>The OpenRCT2 Launcher is a convinient way to keep OpenRCT2 up to date. Each time The launcher is run, it will download and install the latest version of OpenRCT2. It is available for Windows, macOS and Linux.</p>
            <ExternalLink href="https://github.com/LRFLEW/OpenRCT2Launcher/releases/latest">Download OpenRCT2 Launcher</ExternalLink>
          </div>
          <h3>Linux Packages</h3>
          <p>
            OpenRCT2 can also be obtained via a number of package managers. These packages are unofficially maintained. If you are a package maintainer and require changes to the OpenRCT2 source code, please submit an issue or <ExternalLink href="https://github.com/OpenRCT2/OpenRCT2">pull request</ExternalLink>.
          </p>
          <ul>
            <li><ExternalLink href="https://aur.archlinux.org/packages/openrct2-git">ArchLinux (AUR)</ExternalLink></li>
            <li><ExternalLink href="https://launchpad.net/~openrct2/+archive/ubuntu/nightly">Ubuntu (PPA)</ExternalLink></li>
            <li><ExternalLink href="https://software.opensuse.org/download.html?project=games&package=openrct2">openSUSE (RPM)</ExternalLink></li>
          </ul>
          <h3>Docker</h3>
          <p>
            We maintain <ExternalLink href="https://store.docker.com/community/images/openrct2/openrct2-cli">docker</ExternalLink> images for OpenRCT2. This is a container that can run a command line version of OpenRCT2. It is suitable for dedicated servers or executing jobs such as generating screenshots.
          </p>
          <div className="card">
            <div className="card-body p-2">
              <pre className="mb-0">
                <code>{
`$ docker pull openrct2/openrct2-cli
$ docker run -v /path/to/your/data:/data openrct2/openrct2-cli -p 11753:11753 host /data/park.sv6`}</code>
                </pre>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}
