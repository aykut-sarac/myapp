import React, { Component } from "react";
import { FiMenu, FiDownload } from "react-icons/fi";
export default class Navbar extends Component {
  state = {
    navbarOpen: false,
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-toggler">
          <button
            type="button"
            className="navbar-btn"
            onClick={this.handleNavbar}
          >
            <FiMenu className="nav-icon" />
          </button>
        </div>
        <div className="navbar-items">
          <ul
            className={
              this.state.navbarOpen ? "nav-links show-nav" : "nav-links"
            }
          >
            <li className="">
              <a href="#home" className="">
                Home
              </a>
            </li>
            <li className="">
              <a href="#about" className="">
                About
              </a>
            </li>
            <li className="">
              <a href="#projects" className="">
                Projects
              </a>
            </li>
            <li className="">
              <a href="#contact" className="">
                Contact
              </a>
            </li>
            <li className="">
              <a href="/logo192.png" className="" download>
                <FiDownload /> Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
