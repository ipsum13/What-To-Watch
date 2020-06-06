import React, { Component } from "react";
import "./Sidebar.css";


class Sidebar extends Component {
  render() {
    return (
      <nav className="navbar bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/home">
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/liked">
              <i className="far fa-heart"></i> Liked
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/search">
              <i className="fas fa-search"></i> Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link logout" href="/logout">
              <i className="fas fa-sign-out-alt"></i> Logout
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
