import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import Login from "../LogIn/Login";
import SignUp from "../Register/SignUp";
import { Background } from "../LogIn/Landing.styled";
//import "./Landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedOn: true,
      user: {},
      error: null,
      authenticated: false
    };
  }

  toggleSignup = () => {
    this.setState({
      isSignedOn: !this.state.isSignedOn
    });
  };

  render() {
    return (
      <Fragment>
        <Background />
        {this.state.isSignedOn ? (
          <Login toggleSignup={this.toggleSignup} />
        ) : (
          <Link
              to='/landing/register'
              
            ><SignUp toggleSignup={this.toggleSignup} /></Link>
        )}
      </Fragment>
    );
  }
}

export default Landing;
