import React, { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import home from "../../assets/images/caseStudies/BethnielFinance/Home.png";
import frame1 from "../../assets/images/caseStudies/BethnielFinance/Frame20252.png";
import { scrollToSection } from "../../data/functions";

const BethnielFinance = () => {
  const overview = useRef(null);
  const voyage = useRef(null);
  const ideation = useRef(null);
  const designs = useRef(null);
  const thoughts = useRef(null);

  return (
    <div>
      <div className="uk-section-large uk-container uk-padding-remove-bottom">
        <div className=" uk-margin-large uk-padding">
          <h5 className="study-name uk-margin-remove">BETHNIEL FINANCE</h5>
          <h1 className="header-text study-header uk-margin-remove">
            Designing a dashboard for finance experts
          </h1>
          <p className="study-brief uk-margin-top">
            Bethniel Finance is a super app that incorporates all things
            personal finance into one blah nubcvo;dvudbihnposhihhjdjddhd
            dudo;ihdbuvdvo’d dubdohsbd dihnokpdpjd.
          </p>
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={frame1}>
              <img src={frame1} alt="" />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-padding-remove study-tab">
        <div className="uk-margin-large uk-padding">
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
                DESIGNS
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
      <div className="uk-section uk-container">
        <div className="uk-margin-large uk-padding">
          <div className="uk-child-width-1-2@s uk-margin-top" data-uk-grid>
            <p>
              Role: Design Lead, UX Design, UI Design, User Research,
              Prototyping, Usability Testing.
            </p>
            <p>
              Tools: Figma, Protopie, Airtable, Adobe Illustrator, Miro, iPad
            </p>
            <p>Team: AJ Mensah- UX Lead Samuel Lartey- Developer</p>
            <p>Timeline: 03/10/2022-7/11/2022</p>
          </div>
        </div>
      </div>
      <div
        className="uk-section-large uk-container"
        ref={overview}
        id="overview"
      >
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text">Overview</h2>
          <p>
            Overview Bethniel Finace is one of Africa’s reputable Financial
            technology companies, headquartered in Accra. But even with this
            status, it still has stiff competition for market share with other
            top companies like Bamboo. One way the team plans to stay ahead of
            the curve is to establish itself as the all-in-one platform for
            stakeholders to manage their personal finance needs.
          </p>
          <p>
            Over the last few months at Bethniel I've led the team to design
            viable multi-platform products that materialised their goals of
            increasing customer adoption rates by 30% and increased revenue by
            as much as 2x, helping the company stay ahead of the curve amidst
            growing competition.
          </p>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={home}>
              <img src={home} alt="" />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container" id="thoughts">
        <div className="uk-margin-large uk-padding">
          <h2 className="header-text">Final Screens</h2>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BethnielFinance;
