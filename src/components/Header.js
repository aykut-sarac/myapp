import React, { Component } from "react";
import styled from "styled-components";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
export default class Header extends Component {
  render() {
    let details = this.props.details;
    return (
      <React.Fragment>
        <header id="home">
          <div className="banner">
            <div className="banner-text">
              <h1>Hi, I am {details.name}.</h1>
              <h2>{details.role}</h2>
              <h2>{details.role2}</h2>

              <ul className="banner-links">
                {details.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a
                        href={item.url}
                        target="_blank"
                        className="banner-link"
                      >
                        {item.className}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
