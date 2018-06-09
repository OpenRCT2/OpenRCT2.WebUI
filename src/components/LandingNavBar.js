import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const buttonStyle = {
  color: '#fff'
}

const LandingNavBar = (props) =>
      <div className="LandingNavBar">
          <Button
            style={buttonStyle}
            containerElement={<Link to="/servers" />}
            label='Browse'/>
          { props.auth.token ?
            <Button
              style={buttonStyle}
              containerElement={<Link to="/"/>}
              label={props.auth.user}/>
            :
            <Button
              style={buttonStyle}
              containerElement={<Link to="/login" />}
              label='Log in'/>
          }
          { props.auth.token ?
            <Button
              style={buttonStyle}
              containerElement={<Link to="/logout"/>}
              label='Log out'/>
            :
            <Button
              style={buttonStyle}
              containerElement={<Link to="/signup" />}
              label='Sign up'/>
          }
      </div>

export default LandingNavBar;
