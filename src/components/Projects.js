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
                <div key={item.name} className="project-card">
                  <div>
                    <img
                      className="project-img"
                      src={item.imgurl}
                      alt={item.imgurl}
                    ></img>
                  </div>

                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <a
                      href={item.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-primary">Code</button>
                    </a>
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
