import React from "react";
import { NavLink } from "react-router-dom";
import { getImgUrl } from "../../data/functions";

const NextProjects = ({ nextprojects }) => {
  return (
    <div className="uk-section-large uk-container uk-margin-large-bottom next-section">
      <div className="uk-margin-large uk-padding">
        <h2 className="header-text nxt-header uk-margin-left">Next Project</h2>
        <div className="next-cards">
          <ul className="uk-child-width-1-2@s" data-uk-grid>
            {nextprojects.map((project, index) => (
              <li key={index} className="">
                <NavLink to={project.page}>
                  <div
                    className="uk-card uk-card-default next-card"
                    style={{
                      backgroundImage: `${getImgUrl(project.image)}`,
                    }}
                  >
                    <img src={getImgUrl(project.image)} alt="" />

                    <div className="uk-card uk-card-default uk-flex uk-flex-middle previewText">
                      {project.previewText}
                      <span
                        data-uk-icon="chevron-double-right"
                        className="uk-position-bottom-right uk-padding-small"
                      ></span>
                    </div>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NextProjects;
