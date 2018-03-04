import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as api from '../api';
import { Profile } from '../selectors';

const imageSize = 200;
const traitIcons = {
  Developer: "fa-code",
  Streamer: "fa-video-camera"
}

const propTypes = {
  myUserName: PropTypes.string.isRequired,
  hasWritePermission: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  myUserName: Profile.getName(state),
  hasWritePermission: Profile.hasPermission(state, 'user.write')
});

export class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.onEditBioClick = this.onEditBioClick.bind(this);
    this.onBioChange = this.onBioChange.bind(this);
    this.onBioCancelClick = this.onBioCancelClick.bind(this);
    this.onBioSaveClick = this.onBioSaveClick.bind(this);
    this.state = {
      editing: null,
      profile: null,
      value: ''
    };
  }

  componentWillMount() {
    const { userName } = this.props.match.params;
    api.fetchUser(userName).then(
      profile => this.setState({ profile })
    );
  }

  canEditProfile() {
    const { hasWritePermission, myUserName } = this.props;
    const { profile } = this.state;
    return hasWritePermission || myUserName === profile.name;
  }

  onEditBioClick(e) {
    e.preventDefault();
    this.setState({ editing: 'bio', value: this.state.profile.bio });
  }

  onBioChange(e) {
    this.setState({ value: e.target.value })
  }

  onBioCancelClick(e) {
    this.setState({ editing: null });
  }

  onBioSaveClick(e) {
    const { editUser } = this.props;
    const { profile, value } = this.state;
    const userData = {
      bio: value
    };
    editUser(profile.name, userData).then(
      () => {
        const newProfile = {...profile, bio: value };
        this.setState({ editing: null, profile: newProfile })
      }
    );
  }

  render() {
    const { profile } = this.state;
    if (profile) {
      return this.renderUser(profile);
    } else {
      return this.renderLoading();
    }
  }

  renderLoading() {
    return (
      <div className="container container-main">
        <p>Loading...</p>
      </div>
    )
  }

  renderUser(user) {
    const canEdit = this.canEditProfile();

    const Trait = props => (
      <div><i className={"mr-2 fa " + props.icon} style={{width: 16}} />{props.children}</div>
    )

    let bio = user.bio;
    if (bio) {
      bio = bio.split('\n\n').map((text, i) => (
        <p key={i}>
          {text.split('\n').map((text, i) => (
            <React.Fragment>{text}<br /></React.Fragment>
          ))}
        </p>
      ));
      console.log(bio);
    } else {
      bio = (<span className="text-muted">Tell us your RCT history!</span>);
    }

    return (
      <React.Fragment>
        <div className="container container-main">
          <div className="row">
            <div className="col-3">
              <div>
                <img className="rounded mb-2 mx-auto d-block"
                     style={{width: imageSize, height: imageSize}}
                     src={user.avatar + "?s=" + imageSize}
                     alt="avatar" />
              </div>
              <Trait icon="fa-calendar">Joined {user.joined}</Trait>
              <Trait icon="fa-comment">{user.comments} comments</Trait>
              <Trait icon="fa-cube">{user.uploads} uploads</Trait>
              <hr />
              {user.traits.map(trait => (
                <Trait key={trait} icon={traitIcons[trait]}>{trait}</Trait>
              ))}
            </div>
            <div className="col-9">
              <h3><i className="fa fa-user" /> {user.name}</h3>
              <hr />
              <div className="row">
                <div className="col">
                  {this.state.editing === 'bio' ?
                    <div>
                      <textarea className="form-control" rows="5" onChange={this.onBioChange} value={this.state.value} />
                      <div className="pull-right mt-1">
                        <button className="btn btn-sm btn-secondary" onClick={this.onBioCancelClick}>Cancel</button>&nbsp;
                        <button className="btn btn-sm btn-primary" onClick={this.onBioSaveClick}>Save</button>
                      </div>
                    </div> :
                    bio}
                </div>
                <div className="col-auto">
                  {canEdit &&
                    <a role="button" tabIndex="0" onClick={this.onEditBioClick}><i className="fa fa-edit" /></a>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

ProfilePage.propTypes = propTypes;
ProfilePage = connect(mapStateToProps, actions)(ProfilePage);
