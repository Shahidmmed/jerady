import React from "react";
import sapphireCover from "../../assets/images/caseStudies/Sapphire/sapphireCover.png";

const Sapphire = () => {
  return (
    <div>
      <div className="uk-section-large uk-container">
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
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container uk-padding-remove-horizontal study-tab">
        <div className="uk-margin-large uk-padding uk-padding-remove-horizontal">
          <ul data-uk-tab>
            <li>
              <a href="#">OVERVIEW</a>
            </li>
            <li>
              <a href="#">POKING & PRYING</a>
            </li>
            <li>
              <a href="#">IDEATION & TESTING</a>
            </li>
            <li>
              <a href="#">DESIGNS</a>
            </li>
            <li>
              <a href="#">FINAL THOUGHTS</a>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
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
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text">Overview</h2>
          <p>
            As part of its grand vision to thrive amidst growing competition and
            to establish itself as the all-in-one platform for stakeholders to
            manage their personal finance needs, the Fintech Startup contracted
            me to do a design overhaul of the Betnhiel Finance mobile app.
          </p>
          <p>
            Over the last few months at Bethniel I've led the team to (re)design
            viable multi-platform products that materialised business goals of
            increasing customer adoption rates by 30% and increased revenue by
            as much as 2x, helping the company to stay ahead of the curve.
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
    </div>
  );
};

export default Sapphire;
