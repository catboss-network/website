import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;

class Networks extends Component {

  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = projects.image;

      return (
        <div key={id++} className="networks-item">
          <a href={projects.url} target="_blank" rel="noreferrer" >
          <div className="item-wrap">
            <img src={projectImage} alt={projects.title} className="networks-image" />
              <div className="networks-link">{projects.title}</div>
          </div>
          </a>
        </div>
      );
    });

    return (
      <section id="networks">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed" style={{ textAlign: "center" }}>
              <h1>{this.props.data.title}</h1>
              <h6>{this.props.data.description}</h6>
              <div>
                <div
                  id="networks-wrapper"
                  className="networks-list"
                >
                  {projects}
                </div>
            </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Networks;
