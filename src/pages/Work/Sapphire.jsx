import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import sapphireCover from "../../assets/images/caseStudies/Sapphire/sapphireCover.png";
import { getImgUrl, scrollToSection } from "../../data/functions";
import { selectedProjects } from "../../data/info";

const Sapphire = () => {
  const overview = useRef(null);
  const voyage = useRef(null);
  const ideation = useRef(null);
  const designs = useRef(null);
  const thoughts = useRef(null);
  let nextprojects = selectedProjects.slice(3);

  return (
    <div>
      <div className="uk-section-large uk-container uk-padding-remove-bottom">
        <div className=" uk-margin-large uk-padding">
          <h5 className="study-name uk-margin-remove">SAPPHIRE</h5>
          <h1 className="header-text study-header uk-margin-remove">
            Powering the Modern Fuel Supply Experience
          </h1>
          <p className="study-brief uk-margin-top">
            Spayces is a Table Reservation App that provides reliable and
            accurate restaurant information (personalized menus, prices,
            location, contact details etc)and also gives users the option to
            pre-order meals ahead of any occasion.
          </p>
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={sapphireCover}>
              <img src={sapphireCover} alt="" />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-padding-remove study-tab">
        <div className="uk-padding">
          <ul data-uk-tab className="uk-padding-horizontal">
            <li>
              <a href="#" onClick={() => scrollToSection(overview)}>
                OVERVIEW
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(voyage)}>
                THE VOYAGE
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(ideation)}>
                IDEATION
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(designs)}>
                DESIGNS & TESTING
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(thoughts)}>
                FINAL THOUGHTS
              </a>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-top">
        <div className="uk-margin-large uk-padding">
          <div className="uk-child-width-1-2@s uk-margin-top" data-uk-grid>
            <p>
              Role: UX Design, User Research, Prototyping, Usability Testing.
            </p>
            <p>Tools: Figma, Airtable, Adobe Illustrator, Miro, iPad</p>
            <p>Team: AJ Mensah, Naa Ayeley Ayettey, Daniel Olukoya</p>
            <p>Timeline: 29/03/2022-7/07/2022</p>
          </div>
        </div>
      </div>
      <div
        className="uk-section uk-container uk-padding-remove-top overview"
        ref={overview}
        id="overview"
      >
        <div className="uk-padding">
          <h2 className="header-text">Overview</h2>
          <p>
            Overview Sapphire is a fuel purchasing app that affords people the
            convenience of buying fuel with the tap of a button without having
            to be at the gas station. As an end-to-end energy tech start-up, the
            company required a dashboard for fuel suppliers to track fuel
            orders, deliveries, sales, earnings and inventory levels in
            real-time. The dashboard will be used by both individual and
            corporate energy service providers alike to manage the day-to-day
            supply of fuel to consumers, make and receive payment and manage
            operations.
          </p>
          <h2>Venturing into a new space</h2>
          <p>
            Sapphire is a fuel purchasing app that affords user the convenience
            of buying fuel with the tap of a button without having to be at the
            gas station. As an end-to-end energy tech start-up, the company
            required a dashboard for fuel suppliers to track fuel orders,
            deliveries, sales, earnings and inventory levels in real-time. The
            dashboard will be used by both individual and corporate energy
            service providers alike to manage the day-to-day supply of fuel to
            consumers, make and receive payment and manage operations. ‍
          </p>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding"></div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding"></div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text">Forming the Hypothesis</h2>
        </div>
      </div>

      <div className="uk-section-large uk-container">
        <div className="uk-margin-large uk-padding">
          <h2 className="header-text">Final Screens</h2>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="uk-section-large uk-container uk-padding-xlarge-bottom next-section">
        <div className="uk-margin-large uk-padding">
          <h2 className="header-text nxt-header uk-margin-left">
            Next Project
          </h2>
          <div className="next-cards">
            <ul className="uk-child-width-1-2@s" data-uk-grid>
              {nextprojects.map((project, index) => (
                <li key={index} className="">
                  <div
                    className="uk-card uk-card-default next-card"
                    style={{
                      backgroundImage: `${getImgUrl(project.image)}`,
                    }}
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
    </div>
  );
};

export default Sapphire;
