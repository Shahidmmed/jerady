import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getImgUrl } from "../../data/functions";
import { selectedProjects } from "../../data/info";
import "./Home.scss";
import Ellipse from "../../components/Footer/Ellipse";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <div
        className="uk-section uk-container"
        data-uk-scrollspy="cls: uk-animation-slide-left; delay: 500"
      >
        <div className="uk-margin-large uk-padding">
          <h4 className="header-text">Hi 👋🏽 I'm AJ,</h4>
          <p className="summary">and I am experienced in</p>
          <h1 className="header-text summary">
            Elevating the digital experience through clever design solutions and
            a dash of wit and whimsy.
          </h1>
        </div>
      </div>
      <div
        className="uk-section uk-container uk-margin-bottom uk-padding-remove-top"
        id="projects"
      >
        <div className="uk-padding uk-padding-remove-top">
          <div
            className=" uk-margin-large"
            data-uk-scrollspy="cls: uk-animation-slide-left; delay: 500"
          >
            <h2 className="header-text uk-margin-remove proj">
              Selected Projects
            </h2>
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
                    className={
                      index % 2 !== 0
                        ? "uk-margin-large-top work-list"
                        : "work-list"
                    }
                  >
                    <NavLink
                      to={project.page}
                      data-uk-scrollspy="target: > .work-card; cls: uk-animation-fade; delay: 500"
                    >
                      <div
                        className={
                          index % 2 !== 0
                            ? "uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-margin-top work-card"
                            : "uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle work-card"
                        }
                        style={{
                          backgroundImage: `${getImgUrl(project.image)}`,
                        }}
                      >
                        <img src={getImgUrl(project.image)} alt="" />

                        <div
                          className="uk-card uk-card-default previewText"
                          style={{ color: `${project.previewColor}` }}
                        >
                          {project.previewText}
                          <span
                            data-uk-icon="chevron-double-right"
                            className=""
                          ></span>
                        </div>

                        <p className="uk-margin-remove projectType">
                          {project.type}
                        </p>
                      </div>
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <Ellipse />
    </div>
  );
};

export default Home;
