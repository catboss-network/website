import React, { Component } from "react";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data;

    return (
      <header id="home" className="cat-astronaut">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#team">
                Team
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#networks">
                Networks
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1500}>
              <p className="banner-text-trust-me">{description.description_moon}</p>
            </Fade>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
