import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { Background } from "../LogIn/Landing.styled";
import { login, googleLogin } from '../../actions/auth';
import { Link, Redirect } from "react-router-dom";
import "./Login.css";
import "./Landing.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onGoogleLogin() {
    
  }

  onFacebookLogin() {
  }

  onToggle = () => {
    this.props.toggleSignup();
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const {login} = this.props;
    login(email, password);  
  };

  

  render() {
    if(this.props.auth.isAuthenticated) {
      return <Redirect to='/home' />
    }
    return (
      <Fragment>
        <Background />
        <div className="form-modal">
          <div className="form-toggle">
            <h1>Welcome back.</h1>
            <p>
              Sign in to save the movies that you might want to watch later and
              to see others reviews of your favorite movies.
            </p>
          </div>

          <div id="login-form">
            <form method="POST" onSubmit={this.onSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                onChange={this.onChange}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                onChange={this.onChange}
              />
              <button type="submit" className="btn login">
                login
              </button>

              <hr />
              <button
                type="button"
                className="btn -box-sd-effect"
                onClick={this.onGoogleLogin}
              >
                {" "}
                <i className="fa fa-google fa-lg" aria-hidden="true"></i> Sign
                In with Google
              </button>
              {/* <button
                type="button"
                className="btn -box-sd-effect"
                onClick={this.onFacebookLogin}
              >
                {" "}
                <i className="fa fa-facebook fa-lg" aria-hidden="true"></i> Sign
                in with Facebook
              </button> */}
              <p className="create">
                No Account?{" "}
                <button type="button" className="toggle-signup">
                  <Link to={{ pathname: "/register" }}>Create one</Link>
                </button>
              </p>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, {login, googleLogin})(Login);
