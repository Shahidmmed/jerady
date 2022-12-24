import React, { useRef } from "react";
import NextProjects from "../../components/NextProjects/NextProjects";
import { selectedProjects } from "../../data/info";

const Yamas = () => {
  const overview = useRef(null);
  const voyage = useRef(null);
  const ideation = useRef(null);
  const designs = useRef(null);
  const thoughts = useRef(null);

  let nextprojects = selectedProjects.slice(3, 5);

  return (
    <div>
      <div className="uk-section-large uk-container uk-padding-remove-bottom">
        <div className=" uk-margin-large uk-padding">
          <h5 className="study-name uk-margin-remove">YAMAS</h5>
          <h1 className="header-text study-header uk-margin-remove">
            Pushing the Frontiers of Health Technology
          </h1>
          <p className="study-brief uk-margin-top">
            Yamas makes it easy for patients to schedule appointments with
            healthcare providers With just a few taps on their smartphone,
            patients can browse available appointment times, select a date and
            time that works for them, and book their appointment directly
            through the app.
          </p>
          <div className="study-image" data-uk-lightbox="animation: fade">
            {/* <a href={frame1}>
              <img src={frame1} alt="" />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a> */}
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-padding-remove study-tab">
        <div className="uk-padding">
          <ul data-uk-tab className="uk-padding-horizontal blue-tab">
            <li>
              <a href="#" onClick={() => scrollToSection(overview)}>
                CONTEXT
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(voyage)}>
                POKING & PRYING
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(ideation)}>
                IDEATION
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(designs)}>
                TESTING
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(thoughts)}>
                LESSONS
              </a>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-top">
        <div className="uk-margin-large uk-padding">
          <div className="uk-child-width-1-2@s uk-margin-top" data-uk-grid>
            <p>UX Design, User Research, Prototyping, Usability Testing.</p>
            <p>Tools: Figma, Trello, Slack, Google Meets</p>
            <p>Team: AJ Mensah, Eugene Korvo, Yevhenia Yogyakarta</p>
            <p>Timeline: 29/07/2021- 7/02/2022</p>
          </div>
        </div>
      </div>
      <div
        className="uk-section uk-container uk-padding-remove-vertical overview"
        ref={overview}
        id="overview"
      >
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text">Context</h2>
          <p>
            Yamas makes it easy for patients to schedule appointments with
            healthcare providers. With just a few taps on their smartphone,
            patients can browse available appointment times, select a date and
            time that works for them, and book their appointment directly
            through the app. ‍
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
      <div className="uk-section uk-padding-remove-top uk-container">
        <div className="uk-padding uk-padding-remove-top">
          <div className="study-image" data-uk-lightbox="animation: fade">
            {/* <a href={home}>
              <img src={home} alt="" />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a> */}
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container" id="thoughts">
        <div className="uk-margin-large uk-padding">
          <div></div>
          <div></div>
        </div>
      </div>

      <NextProjects nextprojects={nextprojects} />
    </div>
  );
};

export default Yamas;
