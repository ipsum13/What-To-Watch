import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { register } from '../../actions/auth'
import { Link } from "react-router-dom";
import "./SignUp.css";
import "../LogIn/Landing.css";
import { Background } from "../LogIn/Landing.styled";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: ""
    };
  }
  

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onToggle = () => {
    this.props.toggleSignup();
  };

  onSubmit = e => {
    e.preventDefault();
    const {history, register } = this.props;
    const { name, email, password } = this.state;
    register( name, email, password, history);
  };



  render() {
    return (
      <Fragment>
        <Background />
        <div className="form-modal">
          <div className="form-toggle">
            <h1>Join Us</h1>
            <p>
              Create an account to search great movies that you are excited
              about, and find information about those movies.
            </p>
          </div>

          <div id="login-form">
            <form method="POST" onSubmit={this.onSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                onChange={this.onChange}
              />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Choose username"
                onChange={this.onChange}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Create password"
                onChange={this.onChange}
              />
              <button type="submit" className="btn signup" >
                Create account
              </button>

              <hr />
              <button type="button" className="btn -box-sd-effect">
                {" "}
                <i className="fa fa-google fa-lg" aria-hidden="true"></i> Sign
                up with Google
              </button>
              {/* <button type="button" className="btn -box-sd-effect">
                {" "}
                <i className="fa fa-facebook fa-lg" aria-hidden="true"></i> Sign
                up with Facebook
              </button> */}
              <p className="create">
                Already have an account?{" "}
                <button type="button" className="toggle-signup">
                  <Link to={{ pathname: "/login" }}>Sign in</Link>
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
export default connect(mapStateToProps, { register })(SignUp);
