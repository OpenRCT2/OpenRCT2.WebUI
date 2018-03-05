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

export class EditableTextArea extends Component {
  constructor(props) {
    super(props);
    this.onEditClick = this.onEditClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.state = {
      editing: false,
      value: props.value
    };
  }

  onEditClick(e) {
    e.preventDefault();
    this.setState({ editing: true });
  }

  onChange(e) {
    this.setState({ value: e.target.value })
  }

  onCancelClick() {
    this.setState({ editing: false });
  }

  onSaveClick() {
    const { onChangeApply } = this.props;
    Promise.resolve(onChangeApply(this.state.value)).then(
      value => {
        this.setState({ editing: false });
      }
    );
  }

  render() {
    const { display, readOnly } = this.props;
    const { editing } = this.state;
    if (editing) {
      return (
        <div className="row">
          <div className="col">
            <div>
              <textarea className="form-control" rows="5" onChange={this.onChange} value={this.state.value} />
              <div className="pull-right mt-1">
                <button className="btn btn-sm btn-secondary" onClick={this.onCancelClick}>Cancel</button>&nbsp;
                <button className="btn btn-sm btn-primary" onClick={this.onSaveClick}>Save</button>
              </div>
            </div>
          </div>
          <div className="col-auto">
            {!readOnly &&
              <a role="button" tabIndex="0" onClick={this.onEditClick}><i className="fa fa-edit" /></a>}
          </div>
        </div>
      )
    } else {
      return (
        <div className="row">
          <div className="col">
            {display}
          </div>
          <div className="col-auto">
            {!readOnly &&
              <a role="button" tabIndex="0" onClick={this.onEditClick}><i className="fa fa-edit" /></a>}
          </div>
        </div>
      )
    }
  }
}
EditableTextArea.props = {
  display: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

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
    this.onBioChangeApply = this.onBioChangeApply.bind(this);
    this.state = {
      profile: null
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

  onBioChangeApply(newValue) {
    const { editUser } = this.props;
    const { profile } = this.state;
    const userData = {
      bio: newValue
    };
    editUser(profile.name, userData).then(
      () => {
        const newProfile = {...profile, bio: newValue };
        this.setState({ profile: newProfile })
      }
    );
  }

  getFormattedFragment = text =>
    text.split('\n\n').map((text, i) => (
      <p key={i}>
        {text.split('\n').map((text, i) => (
          <React.Fragment>{text}<br /></React.Fragment>
        ))}
      </p>
    ));

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

    let bio = { value: user.bio }
    if (bio.value) {
      bio.display = this.getFormattedFragment(bio.value);
    } else {
      bio.display = (<span className="text-muted">Tell us your RCT history!</span>);
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
              <EditableTextArea
                readOnly={!canEdit}
                display={bio.display} value={bio.value}
                onChangeApply={this.onBioChangeApply} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

ProfilePage.propTypes = propTypes;
ProfilePage = connect(mapStateToProps, actions)(ProfilePage);
