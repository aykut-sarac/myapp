import React, { Component } from "react";

import FooterAnimation from "./FooterAnimation";

export default class Footer extends Component {
  render() {
    let details = this.props.details;
    return (
      <footer>
        <div className="footer">
          <div className="banner">
            <div className="banner-text">
              <h3>Aykut Sarac</h3>
              <h3>Copyright © {new Date().getFullYear()}</h3>

              <ul className="banner-links">
                {details.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a
                        href={item.url}
                        target="_blank"
                        className="banner-link"
                        rel="noopener noreferrer"
                      >
                        {item.className}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <FooterAnimation />
      </footer>
    );
  }
}
