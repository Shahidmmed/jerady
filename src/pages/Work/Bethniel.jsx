import React from "react";
import bethCover from "../../assets/images/caseStudies/BethnielFinance/bethnielcasestudyhero.png";
import onboarding from "../../assets/images/caseStudies/BethnielFinance/onboarding.png";
import splashScreen from "../../assets/images/caseStudies/BethnielFinance/splashScreen.png";
import moodboard from "../../assets/images/caseStudies/BethnielFinance/moodboard.png";
import facelift from "../../assets/images/caseStudies/BethnielFinance/facelift.png";
import interviewresults from "../../assets/images/caseStudies/BethnielFinance/interviewresults.png";
import scamper from "../../assets/images/caseStudies/BethnielFinance/SCAMPER.png";
import lowfidelitywireframes from "../../assets/images/caseStudies/BethnielFinance/lowfidelitywireframes.png";
import oldbethniel from "../../assets/images/caseStudies/BethnielFinance/oldbethniel.png";
import signUp from "../../assets/images/caseStudies/BethnielFinance/PhoneNumberSignUp.png";
import signIn from "../../assets/images/caseStudies/BethnielFinance/signinemail.png";
import personalization from "../../assets/images/caseStudies/BethnielFinance/Personalization.png";
import personalizationActive from "../../assets/images/caseStudies/BethnielFinance/PersonalizationActive.png";
import search from "../../assets/images/caseStudies/BethnielFinance/Search.png";
import searchResults from "../../assets/images/caseStudies/BethnielFinance/SearchResults.png";
import "./Work.scss";
import { selectedProjects } from "../../data/info";
import { NavLink } from "react-router-dom";
import { getImgUrl, scrollToSection } from "../../data/functions";
import { useRef } from "react";

const Bethniel = () => {
  const overview = useRef(null);
  const sprint = useRef(null);
  const ideation = useRef(null);
  const designs = useRef(null);
  const thoughts = useRef(null);

  let nextprojects = selectedProjects.slice(1, 3);

  return (
    <div>
      <div className="uk-section-large uk-container uk-padding-remove-bottom">
        <div className=" uk-margin-large uk-padding">
          <h5 className="study-name uk-margin-remove">BETHNIEL FINANCE</h5>
          <h1 className="blue-header study-header uk-margin-remove">
            Rethinking User Experience of Personal Finance
          </h1>
          <p className="study-brief uk-margin-top">
            Bethniel Finance is an app that helps young people improve their
            financial literacy, manage personal finances, and access financial
            services in a seamless and rewarding way.
          </p>
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={bethCover}>
              <img src={bethCover} alt="" />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-padding-remove study-tab">
        <div className="uk-padding">
          <ul data-uk-tab className="uk-padding-horizontal blue-tab">
            <li>
              <a href="#" onClick={() => scrollToSection(overview)}>
                OVERVIEW
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(sprint)}>
                RUNNING A DESIGN SPRINT
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(ideation)}>
                RETHINKING UX
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(designs)}>
                TESTING
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
              Role: Design Lead, UX Design, UI Design, User Research,
              Prototyping, Usability Testing.
            </p>
            <p>
              Tools: Figma, Protopie, Airtable, Adobe Illustrator, Miro, iPad
            </p>
            <p>
              <p className="uk-margin-remove">Team: AJ Mensah- UX Lead</p>
              <p className="uk-margin-remove">Isaac Nkansah- Developer</p>
              <p className="uk-margin-remove">Bright Sunu- Developer</p>
            </p>
            <p>Timeline: 03/10/2022-7/11/2022</p>
          </div>
        </div>
      </div>
      <div
        className="uk-section uk-container uk-padding-remove-vertical overview"
        ref={overview}
        id="overview"
      >
        <div className="uk-padding ">
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
        <div className="uk-padding uk-padding-remove-vertical">
          <h2 className="header-text">The Problem</h2>
          <p>
            The current Bethniel Mobile app is not intuitive and the user
            experience could be significantly improved. The user interface is
            not the easiest to navigate, making it difficult for users to manage
            their finances effectively. As a result, the company records high
            bounce rates and conversion rates are quite low.
          </p>
        </div>
        <div className="uk-padding  uk-padding-remove-bottom">
          <h2 className="header-text">A Facelift</h2>
          <p>
            My starting point in the project was to familiarize with and
            understand the various features of the existing mobile app and
            identify ways to improve and simplify the experience and interface
            for existing and new users alike.
          </p>
          <h4>
            How might we redesign the Bethniel Mobile app to make it intuitive,
            user-friendly and seamless for new and existing users?
          </h4>
        </div>
      </div>
      <div className="uk-section uk-padding-remove-top uk-container">
        <div className="uk-padding uk-padding-remove-top">
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={facelift}>
              <img src={facelift} alt="" />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="uk-section-large uk-padding-remove-vertical uk-margin-top uk-container"
        ref={sprint}
      >
        <div className="uk-padding ">
          <h3 className="header-text">Running a 5-day Design Sprint</h3>
          <p>
            The focus right from the jump was to make lightweight and
            progressive changes that users would able to pick up easily. The
            agile approach enabled me to do continuous and collaborative
            research with various stakeholders to validate assumptions I made
            while drafting the proposed service design, together with clearly
            defined design KPIs.
          </p>
        </div>
        <div className="uk-padding uk-padding-remove-bottom">
          <p className="grey-text">
            1/5 Gathering user feedback on current homepage design
          </p>
          <p>
            Conversations with 6 participants and existing data on user
            behaviour on the homepage highlighted an opportunity to improve the
            current homepage. Available data showed a bounce rate of 30 % on the
            homepage for new users and our research revealed that this was
            mostly due to some features being quite difficult to find. User
            interviews revealed that the calculator feature, for instance, was
            hidden in the sliding cards of the current homepage design and 4 out
            of 6 users fumbled to find the feature, when asked to. This was a
            roadblock in achieving their goal of using the financial calculator
            feature, which is an important feature to calculate tax returns,
            SSNIT, Mortgage, E-levy etc. Again, there was no way of quickly
            searching for anything on the app since there was no search button.
          </p>
        </div>
      </div>
      <div className="uk-section uk-padding-remove-top uk-container">
        <div className="uk-padding uk-padding-remove-top">
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={interviewresults}>
              <img src={interviewresults} alt="" />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container uk-padding-remove-bottom">
        <div className="uk-padding uk-padding-remove-bottom uk-margin-bottom">
          <p className="grey-text">2/5 Brainstorming and Ideation</p>
          Using the SCAMPER technique as a northstar, I brooded over a series of
          questions and used the answers to generate new ideas. The goal was to
          help me come up with creative and innovative ideas for new designs,
          all while targeting the low-hanging fruits, precisely, actions that
          lead users to the end goal and to make those flows as simple and
          effortless as possible.
        </div>
      </div>
      <div className="uk-section uk-padding-remove-top uk-container">
        <div className="uk-padding uk-padding-remove-top">
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={scamper}>
              <img src={scamper} alt="" />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-small">
        <div className="uk-padding uk-padding-remove-bottom uk-margin-bottom">
          <h4 className="header-text">Moodboarding</h4>
          The next step was to look for designs that had been created for
          similar products which had features and layouts that I found
          appealing. The reason being that it could help to get ideas and
          inspiration for my own wireframes.
        </div>
      </div>
      <div className="uk-section uk-padding-remove-top uk-container">
        <div className="uk-padding uk-padding-remove-top">
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={moodboard}>
              <img src={moodboard} alt="" />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="uk-padding uk-padding-remove-vertical uk-margin-bottom">
          <p className="grey-text">3/5 Crafting Wireframes</p>
          Once I had a clear understanding of user goals and journey, it was
          time to visualize my solution. I started by sketching out the basic
          layout of the product, including the overall structure and the
          placement of key elements such as the navigation menu, search, buttons
        </div>
      </div>
      <div className="uk-section uk-padding-remove-top uk-container">
        <div className="uk-padding">
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={lowfidelitywireframes}>
              <img src={lowfidelitywireframes} alt="" />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-small">
        <div className="uk-padding uk-padding-remove-vertical uk-margin-bottom">
          <p className="grey-text">4/5 Out with the old, in with the new.</p>
          Once the basic layout was complete, I added in details such as text,
          images, buttons, and other interactive elements, considering how the
          user would interact with the product and what actions they would take
          at each step of the process. Since I was revamping an existing flow, I
          found that there was no need to map out a new userflow.
        </div>
      </div>
      <div className="uk-section uk-padding-remove-vertical uk-container">
        <div className="uk-padding uk-padding-remove-top uk-flex">
          <div
            className="study-image"
            data-uk-lightbox="animation: fade"
            style={{ marginRight: "0px" }}
          >
            <a href={oldbethniel}>
              <img src={oldbethniel} alt="" style={{ width: "390px" }} />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
          <div
            className="study-image"
            data-uk-lightbox="animation: fade"
            style={{ marginLeft: "45px" }}
          >
            <a href={oldbethniel}>
              <img src={oldbethniel} style={{ width: "390px" }} alt="" />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-small">
        <div className="uk-padding uk-margin-bottom">
          Rather than just improving features as they are on the mobile app, I
          saw an opportunity to improve the overall user experience of the app.
          The current mobile app had no onboarding flow to ease in new users,
          among a myriad of missing performance boosters. I worked on
          integrating the following:
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-small" ref={ideation}>
        <div className="uk-padding uk-padding-remove-bottom uk-margin-bottom">
          <h4 className="header-text">Rethinking User Experience</h4>
          <p>
            Rather than just improving features as they are on the mobile app, I
            saw an opportunity to improve the overall user experience of the
            app. The current mobile app had no onboarding flow to ease in new
            users, among a myriad of missing performance boosters. I worked on
            integrating the following:
          </p>
          <h4 className="header-text">Onboarding</h4>
          <p>
            I worked on brief and easy to follow onboarding screens , with clear
            instructions and intuitive navigation to provide new users with a
            smooth and enjoyable introduction to the app, as well as how to make
            the most out of the app to help increase user retention and
            engagement.
          </p>
        </div>
      </div>
      <div className="uk-section uk-padding-remove-vertical uk-container">
        <div className="uk-padding uk-padding-remove-top uk-flex">
          <div
            className="study-image"
            data-uk-lightbox="animation: fade"
            style={{ marginRight: "0px" }}
          >
            <a href={splashScreen}>
              <img src={splashScreen} alt="" style={{ width: "390px" }} />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
          <div
            className="study-image"
            data-uk-lightbox="animation: fade"
            style={{ marginLeft: "45px" }}
          >
            <a href={onboarding}>
              <img src={onboarding} style={{ width: "390px" }} alt="" />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-small">
        <div className="uk-padding uk-padding-remove-bottom uk-margin-bottom">
          <h4 className="header-text">Sign In/Sign Up</h4>
          <p>
            Building on the Sign Up and Sign In screen on the existing mobile
            app, I added alternatives to sign up or in with. The idea was to
            make sign in and sign up effortless by providing users the
            convenience of signing in with google, facebook or apple (for IOS
            users). The goal was to help improve the user experience, increase
            the number of new users sign ups, and provide additional security
            and data benefits.
          </p>
        </div>
      </div>
      <div className="uk-section uk-padding-remove-vertical uk-container">
        <div className="uk-padding uk-padding-remove-top uk-flex">
          <div
            className="study-image"
            data-uk-lightbox="animation: fade"
            style={{ marginRight: "0px" }}
          >
            <a href={signIn}>
              <img src={signIn} alt="" style={{ width: "390px" }} />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
          <div
            className="study-image"
            data-uk-lightbox="animation: fade"
            style={{ marginLeft: "45px" }}
          >
            <a href={signUp}>
              <img src={signUp} style={{ width: "390px" }} alt="" />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding uk-padding-remove-bottom">
        <div className="uk-padding uk-padding-remove-bottom uk-margin-bottom">
          <h4 className="header-text">Personalized Feed</h4>
          <p>
            In order to create a more personalized experience, I added the
            option of selecting topics users were truly interested in reading
            under the learn feature to show on the homepage.
          </p>
        </div>
      </div>
      <div className="uk-section uk-padding-remove-vertical uk-container">
        <div className="uk-padding uk-padding-remove-top uk-flex">
          <div
            className="study-image"
            data-uk-lightbox="animation: fade"
            style={{ marginRight: "0px" }}
          >
            <a href={personalization}>
              <img src={personalization} alt="" style={{ width: "390px" }} />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
          <div
            className="study-image"
            data-uk-lightbox="animation: fade"
            style={{ marginLeft: "45px" }}
          >
            <a href={personalizationActive}>
              <img
                src={personalizationActive}
                style={{ width: "390px" }}
                alt=""
              />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-small">
        <div className="uk-padding uk-padding-remove-bottom uk-margin-bottom">
          <h4 className="header-text">Search</h4>
          <p>
            I worked on designing a search feature with careful consideration of
            the purpose of the search feature, the input method, the search
            results page, and the needs of the users.
          </p>
        </div>
      </div>
      <div className="uk-section uk-padding-remove-vertical uk-container">
        <div className="uk-padding uk-padding-remove-top uk-flex">
          <div
            className="study-image"
            data-uk-lightbox="animation: fade"
            style={{ marginRight: "0px" }}
          >
            <a href={search}>
              <img src={search} alt="" style={{ width: "390px" }} />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
          <div
            className="study-image"
            data-uk-lightbox="animation: fade"
            style={{ marginLeft: "45px" }}
          >
            <a href={searchResults}>
              <img src={searchResults} style={{ width: "390px" }} alt="" />
              <span className="gray-overlay">
                <span>Click to expand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding">
        <div className="uk-padding uk-margin-bottom">
          <p className="grey-text">5/5 Usability Testing</p>
          The next step was to test my prototype with both new and existing
          users to ensure that it was intuitive and easy to use. I conducted a
          controlled test where I observed users perform specific tasks
          presented to them and asked about their experience. This was to help
          me identify any issues or areas for improvement and make any necessary
          changes.
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className="uk-margin-large uk-padding">
          <h4 className="header-text">Wrapping it all up</h4>
          <p>
            The redesign of the home page resulted in a [improvement in metrics,
            such as increased usability or user satisfaction]. Additionally, the
            implementation of [new feature] not only enhanced the overall user
            experience, but also [achieved specific business goals]. Moving
            forward, I will continue to gather user feedback and make
            data-driven decisions, together with various stakeholder to improve
            and evolve the product.
          </p>
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
    </div>
  );
};

export default Bethniel;
