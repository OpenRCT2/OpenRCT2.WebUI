import React, { Component } from 'react';
import './Home.css';
import logo from '../img/logo.png';
import thumb_case from '../img/thumb_case.jpg';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <div id="home-banner" className="container">
            <div className="promo">
                <img src={logo} alt="OpenRCT2" />
                <strong>OpenRCT2</strong> is an open source re-implementation of RollerCoaster Tycoon 2.
            </div>
        </div>
        <div className="container container-main">
            <div className="row">
                <div className="col-8">
                    <p>
                        <strong>OpenRCT2</strong> is a free open source version of <strong>RollerCoaster Tycoon 2</strong>. It is strongly based on the original game and
                        therefore looks like, and plays like the real deal. The game is rewritten into a modern language allowing people
                        to <a href="/features">extend and improve</a> the game. Just like what happened with Transport Tycoon Deluxe which got remade into OpenTTD through a
                        similar procedure. OpenTTD now has thousands of new future-proof features and OpenRCT2 will walk that path too eventually.
                    </p>
                    <div className="media">
                        <div className="media-body">
                            <p>
                                The game is still in development and thus can be buggy – meaning it can (and will crash a lot). There is however a stable
                                version (0.0.2) available to play. You do need to own a copy of the original game. (You can buy it
                                from <a href="https://www.g2a.com/r/rct2">G2A</a>, <a href="http://store.steampowered.com/app/285330/" target="_blank">Steam</a>, <a href="http://www.gog.com/game/rollercoaster_tycoon_2" target="_blank">GOG</a>, or maybe even your local game store. There are also ways to <a href="https://github.com/OpenRCT2/OpenRCT2/wiki/Required-RCT2-files#mini-game" target="_blank">play 100% free.</a>) You need this because OpenRCT2 uses the original codes if that part
                                hasn’t been remade, and it also uses the original image files to keep the authentic RCT2 look we all love.
                            </p>
                        </div>
                        <figure className="figure align-self-start mr-3">
                            <img className="figure-img img-fluid center rounded" src={thumb_case} alt="OpenRCT2 case" />
                            <figcaption className="figure-caption text-right">OpenRCT2 fanart by <a target="_blank" href="https://www.reddit.com/user/JumpingCactus">JumpingCactus</a>.</figcaption>
                        </figure>
                    </div>
                    <p>
                        Extra content can be found in our <a href="/content">Content Center</a> where you can choose from hundreds of new rides, rollercoasters and
                        scenarios! You can also download our <a href="/download">OpenRCT2 Launcher</a> which carries a lot of extra functions which aren’t (yet) available
                        in the game like an auto-updater so you always play the latest version. Our Launcher also has functionality to sync the 
                        amount of played minutes to your OpenRCT.net profile, but even better, it can back up your saved game files to <a href="/cc">the Coaster Cloud</a>.
                    </p>
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
      </div>
    );
  }
}
