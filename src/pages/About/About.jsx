import React from "react";
import { experience } from "../../data/info";
import playlist1 from "../../assets/images/playlistCovers/playlist1.jpg";
import playlist2 from "../../assets/images/playlistCovers/playlist2.jpeg";
import "./About.scss";
import { getImgUrl } from "../../data/functions";
const gallery = import.meta.glob("../../assets/images/bookCovers/*.(png|jpg)");

const About = () => {
  var bookCovers = [];
  bookCovers = Object.keys(gallery).map((bc) =>
    bc?.replace("../../assets/images/", "")
  );

  return (
    <div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h1 className="header-text">About Me</h1>
          <p className="about-text">
            I am an Experience Designer with a Graphic Design, Research and
            Creative Writing background who tries not to take herself seriously.
            When I'm not contributing to solving business and user problems, I'm
            sometimes spotted in a cozy studio making music, reading, writing or
            playing word games.
          </p>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h1 className="header-text">Young, Curious and Enthusiatic</h1>
          <div className="image-cards"></div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text about-text">
            I’m currently helping to lead, and mentor the Bethniel Finance team
            as Design Lead.
          </h2>
          <p className="about-text">
            With each passing day, I’m inspired by the opportunity to help solve
            real problems. I’m always trying to improve my craft, continue
            learning, and help others grow as designers. I've also helped to
            streamline core services at Bethniel like fostering cross-functional
            team collaboration, designing a multi-platform design system, and
            initiate new product design practices, ensuring seamless execution
            and delivery.
          </p>
          <p className="about-text">
            I approach my work with an open mind and flexibility, allowing me to
            adapt to situations effortlessly.
          </p>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text uk-margin-bottom">Experience</h2>
          <div className="uk-child-width-expand@s experience">
            <ul className="uk-padding-remove">
              {experience &&
                experience.map((experience, index) => (
                  <li key={index} className="uk-margin-bottom">
                    <h5 className="year">{experience.year}</h5>
                    <h3 className="work uk-margin-remove">{experience.work}</h3>
                  </li>
                ))}
            </ul>
          </div>
          <div className="uk-margin-large-top">
            <button className="uk-button uk-button-default jerday-btn">
              Download my resume
            </button>
          </div>
        </div>
      </div>

      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text uk-margin-large-bottom">
            Some books I have read
          </h2>
          <div
            className="uk-child-width-1-4@s uk-margin-top uk-padding-small"
            data-uk-grid
          >
            {bookCovers &&
              bookCovers.map((image, index) => (
                <div key={index} className="book">
                  <img
                    className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle book-card"
                    src={getImgUrl(image)}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h1 className="header-text uk-margin-large-bottom">
            What I’m listening to right now
          </h1>
          <div className="uk-width-3-4">
            <div
              className="uk-child-width-1-2@s uk-margin-top uk-padding-small"
              data-uk-grid
            >
              <div>
                <img src={playlist1} alt="" className="music" />
              </div>

              <div>
                <h3 className="header-text">Eunoia</h3>
                <p>A playlist curated by me on Apple Music</p>
              </div>
              <div>
                <h3 className="header-text">Cockaigne</h3>
                <p>A playlist curated by me on Spotify</p>
              </div>
              <div>
                <img src={playlist2} alt="" className="music" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
