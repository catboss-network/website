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
            {/* <img
              className="cat-pic"
              src="/images/cat-blue.png"
              alt="Meow"
            /><img
              className="cat-pic"
              src="/images/cat-pink.png"
              alt="Meow"
            /><img
              className="cat-pic"
              src="/images/cat-grey.png"
              alt="Meow"
            /> */}
            </div>
            <h1 className="title">{"My Paws"}</h1>
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
              {/* <p className="about-text">{about.bio_stay_pawsome}</p>
              <p className="about-text">{about.bio_cat_boss}</p>
              <p className="about-text">{about.bio_ryuuash}</p>
              <p className="about-text">{about.bio_mandoka}</p>
              <p className="about-text">{about.bio_nayn}</p>
              <p className="about-text">{about.bio_ps}</p>
              <div className="cat-pics">
              <img
                className="about-cat-pic"
                src="/images/cat.png"
                alt="Meow"
              />
              </div> */}
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
