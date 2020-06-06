import React, {Fragment} from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";

const Header = ({ logout, auth }) => {
  const handleLogout = () => {
    logout();
  };


  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" sticky="top">
      <Navbar.Brand href="/home">
        {" "}
        <img
          className="logo"
          src="../images/WhatToWatch.jpg"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor: 'grey'}}/>
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="justify-content-end">
          {auth.isAuthenticated && 
           (
            <Fragment>
          <Link to="/liked">
            <Button variant="outline-primary" className="mr-3" style={{width: '95px'}}>
              <FontAwesomeIcon icon={faHeart} size="lg" color="red" style={{marginRight: '5px'}} />
              Liked
            </Button>
          </Link>
        
          <Link to="#">
          <Button variant="outline-dark" className="logout" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} size="lg" color="dark" style={{marginRight: '3px'}} />
            Logout
          </Button>
          </Link>
          </Fragment>)}
  
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);