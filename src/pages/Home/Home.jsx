import React from "react";
import { getImgUrl } from "../../data/functions";
import { selectedProjects } from "../../data/info";
import "./Home.scss";

const Home = () => {
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
      <div className="uk-section uk-container" id="projects">
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
                      <div className="uk-card uk-card-default uk-flex uk-flex-middle previewText">
                        {project.previewText}
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className="uk-padding">
          <div className="uk-margin" data-uk-grid>
            <div className="uk-width-auto">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="home-image"
              />
            </div>
            <div className="uk-width-expand">
              <div className="home-contact">
                <h1 className="header-text">Need some help on a project</h1>
                <p>
                  A selection of Creative Technology, Content Storytelling and
                  Design Interaction projects.
                </p>
                <button className="uk-button uk-button-default jerday-btn">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
