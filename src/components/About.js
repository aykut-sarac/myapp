import React, { Component } from "react";
export default class About extends Component {
  render() {
    let details = this.props.details;
    return (
      <section id="about" className="about">
        <div className="about-box">
          <div className="about-text">
            <h2 style={{ textAlign: "center" }}>About Me</h2>
            <p>{details.aboutme}</p>
          </div>
        </div>
      </section>
    );
  }
}
