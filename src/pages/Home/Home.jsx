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
      <div className="uk-section uk-container">
        <div className="uk-padding">
          <div className="uk-child-width-1-2 uk-margin" data-uk-grid>
            <div>
              <img
                src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg"
                alt=""
                className="home-image"
              />
            </div>
            <div className="">
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
