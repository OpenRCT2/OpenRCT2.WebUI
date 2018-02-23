import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = {
  type: PropTypes.string.isRequired,
  maxWidth: PropTypes.number,
};

export class Alert extends Component {
  render() {
    const alertClassName = "alert-" + this.props.type;
    let style = {
        maxWidth: this.props.maxWidth
    };
    return (
      <div className={"alert " + alertClassName + " mx-auto"} role="alert" style={style}>
        {this.props.children}
      </div>
    )
  }
}

Alert.propTypes = propTypes;
