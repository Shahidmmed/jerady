import React from "react";
import bethCover from "../../assets/images/caseStudies/BethnielFinance/bethcover.png";
import signup from "../../assets/images/caseStudies/BethnielFinance/showbethsign.png";
import home from "../../assets/images/caseStudies/BethnielFinance/showhomefirst.png";
import onboarding from "../../assets/images/caseStudies/BethnielFinance/onboarding.png";
import "./Work.scss";

const Bethniel = () => {
  return (
    <div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h5 className="study-name uk-margin-remove">BETHNIEL FINANCE</h5>
          <h1 className="header-text study-header uk-margin-remove">
            Shaping and improving the Future of Personal Finance
          </h1>
          <p className="study-brief uk-margin-top">
            Bethniel Finance is a super app that incorporates all things
            personal finance into one blah nubcvo;dvudbihnposhihhjdjddhd
            dudo;ihdbuvdvo’d dubdohsbd dihnokpdpjd.
          </p>
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={bethCover}>
              <img src={bethCover} alt="" />
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
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text">A Facelift</h2>
          <p>
            My starting point in the project was to familiarize with and
            understand the various features of the existing mobile app and
            identify ways to improve and simplify the experience and interface
            for existing and new users alike.
          </p>
          <h3>
            How might we redesign the Bethniel Mobile app to make it intuitive,
            user-friendly and seamless for new and existing users?
          </h3>
          <p>
            Working with the agile methodology, we incrementally built our MVP,
            the next iteration more fine-tuned than the last. This allowed us to
            move fast and test clickable prototypes with existing customers. The
            agile approach also enabled us to do continuous and collaborative
            research with every sprint to validate assumptions we made while
            drafting the proposed service design.
          </p>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <div
            className="study-image uk-child-width-1-3@m"
            data-uk-grid
            data-uk-lightbox="animation: slide"
          >
            <a href={onboarding}>
              <img src={onboarding} alt="" />
            </a>
            <a href={signup}>
              <img src={signup} alt="" />
            </a>
            <a href={home}>
              <img src={home} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text">Forming the Hypothesis</h2>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text">Carving New Feautres</h2>
          <p>
            Many young people make poor financial decisions due to 3 root
            causes; low levels of financial literacy, poor financial management,
            and inaccessibility of financial services. African countries score
            the worst compared to the world in financial literacy. Ghana's
            financial literacy rate stands at 32% with Somalia being the least
            at 15% and Botswana the highest at 51%.
          </p>
          <p>
            How might we help young people seamlessly manage their finances on a
            single, end-to-end platform.
          </p>
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

export default Bethniel;
