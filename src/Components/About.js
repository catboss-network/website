import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const about = this.props.data;
    const social = this.props.data.social;
    const logo = this.props.data.logo;

    return (
      <section id="about" className="section-padding">
        <Fade duration={1000}>
          <div className="row">
            <div className="cat-pics">
              <img src={logo} alt="catboss-logo" className="catboss-logo" />
            </div>
            <h1>{"About"}</h1>
            <div className="twelve columns main-col">
              <p className="about-text text-center no-margin-bottom">{about.bio_intro}</p>
              <p className="about-text text-center">{about.bio_intro_1}</p>
              <p className="about-text">{about.bio_mission_intro}</p>
              <p className="about-text">{about.bio_mission_description_intro}</p>
              <p className="about-text">Our goal?</p>
              <p className="about-text">{about.bio_mission_description}</p>
              <p className="about-text"><b>{about.bio_mission_no_cat_litter}</b></p>
              <div className="socials">
              {social.map((x, i) => (
                <>
                  <p className="social">
                    <a href={x.url} key={x.url} target="_blank" rel="noreferrer">
                        {x.name}
                    </a>
                  </p>
                  {i !== social.length - 1 && (
                    <p className="spacer">|</p>
                  )}
                  </>
              ))}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
