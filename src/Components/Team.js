import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const team = this.props.data.team;

    return (
      <section id="team" className="section-padding">
        <Fade duration={1000}>
          <div className="row">
            <div className="cat-pics">
            </div>
            <h1 className="title">{"MY PAWMATES"}</h1>
            <p className="text-center">{team.description}</p>
            <div className="twelve columns main-col cat-profiles">
              {team.members.map((x) => (
                <div key={x.name} className="cat-profile">
                  <img
                      className="cat-pic"
                      src={x.img}
                      alt="Meow"
                    />
                  <h3 className="name">{x.name}</h3>
                  <p className="text-center">{x.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
