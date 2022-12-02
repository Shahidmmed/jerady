import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getImgUrl } from "../../data/functions";
import { selectedProjects } from "../../data/info";
import ellipse from "../../assets/images/Ellipse42.png";
import "./Home.scss";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="uk-section-large uk-container">
        <div className="uk-margin-large uk-padding">
          <h4 className="header-text">Hi 👋🏽 I'm AJ,</h4>
          <h1 className="header-text">Design Rocks My World</h1>
          <p className="summary">
            and I am particularly obsessed with and experienced in crafting
            useful, delightful and impactful experiences that align with
            business success by bridging the gap between people and products.
          </p>
        </div>
      </div>
      <div
        className="uk-section uk-container uk-margin-large-bottom"
        id="projects"
      >
        <div className="uk-padding">
          <div className=" uk-margin-large">
            <h2 className="header-text uk-margin-remove">Selected Projects</h2>
            <small>
              I’VE WORKED ON<span></span>
            </small>
          </div>
          <div className="work-cards">
            <ul className="uk-child-width-1-2@s" data-uk-grid="masonry: true">
              {selectedProjects &&
                selectedProjects.map((project, index) => (
                  <li
                    key={index}
                    className={index % 2 !== 0 ? "uk-margin-large-top" : ""}
                  >
                    <div
                      className={
                        index % 2 !== 0
                          ? "uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-margin-top work-card"
                          : "uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle work-card"
                      }
                      style={{ backgroundImage: `${getImgUrl(project.image)}` }}
                    >
                      <img src={getImgUrl(project.image)} alt="" />
                      <NavLink to={project.page}>
                        <div className="uk-card uk-card-default uk-flex uk-flex-middle previewText">
                          {project.previewText}
                          <span
                            data-uk-icon="chevron-double-right"
                            className="uk-position-bottom-right uk-padding-small"
                          ></span>
                        </div>
                      </NavLink>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container uk-padding-xlarge-top uk-margin-xlarge-top"></div>
      <div className="ellipse-section">
        <div className="uk-section uk-container uk-padding-remove-bottom uk-padding-xlarge-top uk-margin-xlarge-top">
          <div className="uk-padding uk-padding-remove-bottom">
            <div className="uk-margin" data-uk-grid>
              <div className="uk-width-auto">
                <img src={ellipse} alt="" className="home-image" />
              </div>
              <div className="uk-width-expand">
                <div className="home-contact">
                  <h2 className="header-text">Need some help on a project</h2>
                  <p>
                    Send an email if you would like to collaborate or have
                    questions about my work.
                  </p>
                  <a
                    href="mailto:jeradybrew18@gmail.com"
                    className="uk-button uk-button-default jerday-btn"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
