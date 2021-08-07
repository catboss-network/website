import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const about = this.props.data;

    return (
      <section id="about" className="section-padding">
        <Fade duration={1000}>
          <div className="row">
            <div className="cat-pics">
              <img src="/images/catboss.png" className="catboss-logo" alt="catboss-logo"></img>
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
            <h1>{"About"}</h1>
            <div className="twelve columns main-col">
              <p className="about-text text-center">{about.bio_intro}</p>
              {/* <p className="about-text">{about.bio_mission}</p> */}
              <p className="about-text text-center">{about.bio_mission_description}</p>
              <p className="about-text text-center">{about.bio_mission_no_cat_litter}</p>
              <p className="about-text text-center">{about.bio_support_us}</p>
              {/* <p className="about-text">{about.bio_stay_pawsome}</p>
              <p className="about-text">{about.bio_cat_boss}</p>
              <p className="about-text">{about.bio_ryuuash}</p>
              <p className="about-text">{about.bio_mandoka}</p>
              <p className="about-text">{about.bio_nayn}</p>
              <p className="about-text">{about.bio_ps}</p> */}
              {/* <div className="cat-pics">
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
