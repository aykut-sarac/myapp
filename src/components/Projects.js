import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    let details = this.props.details;
    return (
      <section id="projects">
        <div className="project-main">
          <div style={{ textAlign: "center" }}>
            <h2>My Projects</h2>
          </div>

          <div className="project-wrapper">
            {details.projects.map((item) => {
              return (
                <div className="project-card">
                  <div key={item.name}>
                    <img
                      className="project-img"
                      src="https://media.giphy.com/media/11xBk5MoWjrYoE/source.gif"
                    ></img>
                  </div>

                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <a href={item.code} target="_blank">
                      <button className="btn-primary">Code</button>
                    </a>
                    <a href={item.live} target="_blank">
                      <button className="btn-primary">Live</button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
