import React, { Component } from 'react';
import './Home.css';
import logo from '../img/logo.png';

export class NewsItem extends Component {
    render() {
        return (
            <div className="card news-item">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.date} by {this.props.author}</h6>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="home-banner" className="container page-banner page-banner-home">
            <div className="promo">
                <img src={logo} alt="OpenRCT2" />
                <strong>OpenRCT2</strong> is an open source re-implementation of RollerCoaster Tycoon 2.
            </div>
        </div>
        <div className="container container-main">
            <div className="row">
                <div className="col-8">
                    <h2>News</h2>
                    <NewsItem title="OpenRCT2 0.1.2" date="21st January" author="IntelOrca">
                        <p>
                            Mauris at tortor tortor. Nunc quis consectetur enim. Ut dignissim turpis ut elit finibus, id ullamcorper libero finibus. Nulla vel pretium tortor. Ut maximus, ante id convallis vestibulum, ipsum quam auctor lacus, ac congue eros sapien eget dui. Vestibulum varius et dui ut pellentesque. Vivamus vitae dolor odio.
                        </p>
                        <p>
                            Suspendisse vitae dui sapien. Sed venenatis gravida ante sit amet vulputate. Nam aliquet felis et tellus consequat vestibulum. Maecenas faucibus in neque non congue. Proin sed elit mauris. Nullam sed facilisis dui. In facilisis magna id odio efficitur dictum. Vivamus auctor ullamcorper dictum. Cras aliquam nisi et mauris fermentum commodo.
                        </p>
                        <a href="https://github.com/OpenRCT2/OpenRCT2/releases" className="card-link">Download</a>
                        <a href="https://github.com/OpenRCT2/OpenRCT2/releases" className="card-link">Changelog</a>
                        <a href="https://github.com/OpenRCT2/OpenRCT2/issues" className="card-link">Report bugs</a>
                    </NewsItem>
                    <NewsItem title="Sed maximus ante vitae" date="10th November 2017" author="Janisozaur">
                        <p>
                            Pellentesque a lorem gravida, vestibulum dui fermentum, lacinia nisl. Cras feugiat, nisi sit amet vestibulum pharetra, urna est varius leo, quis volutpat mi purus ac elit. Integer rhoncus elementum sem. Praesent vel diam blandit, mattis est facilisis, porttitor nibh. In porttitor nisi volutpat consectetur ornare. Nunc augue libero, pretium quis lectus vel, sodales tristique sapien. Sed non neque neque. Integer at sodales nisl. Nullam elementum dapibus massa, nec consectetur ipsum fringilla sed. Nam varius maximus augue, sed pretium mi pretium eu. Nullam mi ipsum, feugiat quis sem placerat, faucibus tincidunt nisi. Aenean non lorem massa. Proin ornare diam ex, ut tincidunt nulla gravida ac.
                        </p>
                        <a href="/" className="card-link">Venenatis</a>
                        <a href="/" className="card-link">Blandit Feugiat Tortor</a>
                    </NewsItem>
                </div>
                <div className="col">
                    <a className="no-link-decor" href="https://openrct2.org">
                        <div id="home-download-button">
                            <i className="fa fa-download"></i> Download <strong>OpenRCT2</strong>
                        </div>
                    </a>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
