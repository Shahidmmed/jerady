import React, { useEffect } from "react";
import { experience, links } from "../../data/info";
import playlist1 from "../../assets/images/playlistCovers/eunoia.png";
import playlist2 from "../../assets/images/playlistCovers/cockaigne.png";
import im1 from "../../assets/images/im1.png";
import im2 from "../../assets/images/im2.png";
import "./About.scss";
import { getImgUrl } from "../../data/functions";
import Ellipse from "../../components/Footer/Ellipse";
const gallery = import.meta.glob("../../assets/images/bookCovers/*.(png|jpg)");

const About = () => {
  var bookCovers = [];
  bookCovers = Object.keys(gallery).map((bc) =>
    bc?.replace("../../assets/images/", "")
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="uk-section uk-container first-section">
        <div
          className="uk-margin-large uk-padding"
          data-uk-scrollspy="cls: uk-animation-slide-left; delay: 500"
        >
          <h1 className="header-text">About Me</h1>
          <p className="about-text">
            I am an Experience Designer with a <b>Graphic Design</b>,
            <b> Research</b> and <b>Creative Writing</b> background who tries
            not to take herself too seriously. When I'm not contributing to
            solving business and user problems, I'm sometimes spotted in a cozy
            studio making music, reading, writing or playing word games.
          </p>
        </div>
      </div>
      <div className="uk-section uk-container books-section uk-padding-remove-top">
        <div className="uk-padding uk-padding-remove-top">
          <div className="uk-child-width-1-2@s img-grid" data-uk-grid>
            <div className="image-cards">
              <img
                src={im2}
                alt=""
                className="image2"
                data-uk-scrollspy="cls: uk-animation-fade; delay: 500"
              />
              <img
                src={im1}
                alt=""
                className="image1"
                data-uk-scrollspy="cls: uk-animation-fade; delay: 500"
              />
            </div>
            <h1
              className="header-text img-txt"
              data-uk-scrollspy="cls: uk-animation-slide-right; delay: 500"
            >
              Young, Curious and Enthusiatic
            </h1>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container books-section uk-padding-remove-vertical">
        <div
          className="uk-padding uk-padding-remove-top"
          data-uk-scrollspy="cls: uk-animation-slide-left; delay: 500"
        >
          <h2 className="header-text about-header">
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
      <div className="uk-section uk-container books-section uk-padding-remove-vertical">
        <div className="uk-padding uk-padding-remove-top">
          <h2
            className="header-text uk-margin-medium-bottom about-header"
            data-uk-scrollspy="cls: uk-animation-slide-top; delay: 500"
          >
            Experience
          </h2>
          <div className="uk-child-width-expand@s experience">
            <ul className="uk-padding-remove">
              {experience &&
                experience.map((experience, index) => (
                  <li key={index} className="uk-margin-bottom exp">
                    <h5
                      className="year uk-margin-remove"
                      data-uk-scrollspy="cls: uk-animation-slide-left;"
                    >
                      {experience.year}
                    </h5>
                    <h3
                      className="work uk-margin-remove"
                      data-uk-scrollspy="cls: uk-animation-slide-right;"
                    >
                      {experience.work}
                    </h3>
                  </li>
                ))}
            </ul>
          </div>
          <div className="uk-margin-large-top">
            <a
              href={links.resume}
              target="_blank"
              className="uk-button uk-button-default jerday-btn"
              data-uk-scrollspy="cls: uk-animation-slide-top; delay: 500"
            >
              Download my resume
            </a>
          </div>
        </div>
      </div>

      <div className="uk-section uk-container books-section uk-padding-remove-vertical">
        <div className="uk-padding uk-padding-remove-top">
          <h2
            className="header-text uk-margin-bottom about-header"
            data-uk-scrollspy="cls: uk-animation-slide-top; delay: 500"
          >
            Some books I have read
          </h2>
          <div
            className="uk-child-width-1-4@s uk-margin-top uk-padding-small books"
            data-uk-grid
            data-uk-scrollspy="target: > .book; cls: uk-animation-fade; delay: 500"
          >
            {bookCovers &&
              bookCovers.map((image, index) => (
                <div
                  key={index}
                  className="book"
                  data-uk-scrollspy-class="uk-animation-slide-top"
                >
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
      <div className="uk-section uk-container books-section uk-padding-remove-vertical">
        <div className=" uk-padding">
          <h1
            className="header-text uk-margin-large-bottom about-header"
            data-uk-scrollspy="cls: uk-animation-slide-top; delay: 500"
          >
            What I’m listening to right now
          </h1>
          <div className="uk-width-3-4@s">
            <div
              className="uk-child-width-1-2@s uk-margin-top uk-padding-small playlist1"
              data-uk-grid
              data-uk-scrollspy="cls: uk-animation-slide-left; delay: 500"
            >
              <a
                href="https://music.apple.com/gh/playlist/eunoia/pl.u-yZyVqyVCYy6rBb7?ls"
                target="_blank"
              >
                <img src={playlist1} alt="" className="music" />
              </a>
              <div className="music-text">
                <h3 className="header-text">Eunoia</h3>
                <p>A playlist curated by me on Apple Music</p>
              </div>
            </div>
            <div
              className="uk-child-width-1-2@s uk-margin-medium-top uk-padding-small playlist2"
              data-uk-grid
              data-uk-scrollspy="cls: uk-animation-slide-right; delay: 500"
            >
              <div className="music-text spotify">
                <h3 className="header-text">Cockaigne</h3>
                <p>A playlist curated by me on Spotify</p>
              </div>
              <a href="" target="_blank">
                <img src={playlist2} alt="" className="music" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Ellipse />
    </div>
  );
};

export default About;
