import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const about = this.props.data;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <h1>{"About"} <img
              className="about-cat-pic"
              src="/images/cat.png"
              alt="Meow"
            /></h1>
            <div className="twelve columns main-col">
              <p id="about-text">{about.bio_intro}</p>
              <p id="about-text">{about.bio_mission}</p>
              <p id="about-text">{about.bio_mission_description}</p>
              <p id="about-text">{about.bio_mission_no_cat_litter}</p>
              <p id="about-text">{about.bio_support_us}</p>
              <p id="about-text">{about.bio_stay_pawsome}</p>
              <p id="about-text">{about.bio_cat_boss}</p>
              <p id="about-text">{about.bio_ryuuash}</p>
              <p id="about-text">{about.bio_mandoka}</p>
              <p id="about-text">{about.bio_nayn}</p>
              <p id="about-text">{about.bio_ps}</p>
              <img
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
              />
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
