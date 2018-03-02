import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Notifications from 'react-notification-system-redux';
import { connect } from 'react-redux';

const propTypes = {
  notifications: PropTypes.array.isRequired,
};
const mapStateToProps = state => ({
  notifications: state.notifications
});
export class NotificationsContainer extends Component {
  render() {
    const { notifications } = this.props;
    return (
      <Notifications notifications={notifications} />
    );
  }
}
NotificationsContainer.propTypes = propTypes;
NotificationsContainer = connect(mapStateToProps)(NotificationsContainer);
