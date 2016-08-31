import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const buttonStyle = {
  color: '#fff'
}

const LandingNavBar = (props) =>
      <div className="LandingNavBar">
          <FlatButton
            style={buttonStyle}
            containerElement={<Link to="/servers" />}
            label='Browse'/>
          { props.auth.token ?
            <FlatButton
              style={buttonStyle}
              containerElement={<Link to="/"/>}
              label={props.auth.user}/>
            :
            <FlatButton
              style={buttonStyle}
              containerElement={<Link to="/login" />}
              label='Log in'/>
          }
          { props.auth.token ?
            <FlatButton
              style={buttonStyle}
              containerElement={<Link to="/logout"/>}
              label='Log out'/>
            :
            <FlatButton
              style={buttonStyle}
              containerElement={<Link to="/signup" />}
              label='Sign up'/>
          }
      </div>

export default LandingNavBar;
