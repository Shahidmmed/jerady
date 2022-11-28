import React from "react";
import bannerimage from "../../assets/images/caseStudies/Spayces/bannerimage.png";
import frame1 from "../../assets/images/caseStudies/Spayces/Frame1.png";
import frame2 from "../../assets/images/caseStudies/Spayces/newempathy.png";
import frame3 from "../../assets/images/caseStudies/Spayces/frame3.png";
import frame4 from "../../assets/images/caseStudies/Spayces/personas.png";
import frame5 from "../../assets/images/caseStudies/Spayces/empathymap.png";
import frame7 from "../../assets/images/caseStudies/Spayces/pov.png";
import frame8 from "../../assets/images/caseStudies/Spayces/arch.png";
import frame10 from "../../assets/images/caseStudies/Spayces/wireframes.png";
import onboarding from "../../assets/images/caseStudies/Spayces/onboarding.png";
import signup from "../../assets/images/caseStudies/Spayces/signup.png";
import finalDesign from "../../assets/images/caseStudies/Spayces/finalDesign.png";
import "./Work.scss";

const Spayces = () => {
  return (
    <div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h5 className="study-name">SPAYCES</h5>
          <h1 className="header-text study-header">
            Reimagining the Restaurant Reservation Experience
          </h1>
          <p className="study-brief">
            Spayces is a Table Reservation App that provides reliable and
            accurate restaurant information (personalized menus, prices,
            location, contact details etc)and also gives users the option to
            pre-order meals ahead of any occasion.
          </p>
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={bannerimage}>
              <img src={bannerimage} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <ul data-uk-tab>
            <li>
              <a href="#">OVERVIEW</a>
            </li>
            <li>
              <a href="#">THE VOYAGE</a>
            </li>
            <li>
              <a href="#">IDEATION</a>
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
        <div className=" uk-margin-large uk-padding">
          <div className="uk-child-width-1-2@s uk-margin-top" data-uk-grid>
            <p>
              Role: UX Design, User Research, Prototyping, Usability Testing.
            </p>
            <p>Tools: Figma, Airtable, Adobe Illustrator, Miro, iPad </p>
            <p>Team: AJ Mensah, Naa Ayeley Ayettey, Daniel Olukoya </p>
            <p>Timeline: 29/03/2022-7/07/2022 </p>
          </div>
          <div className="uk-margin">
            <h2 className="header-text">Overview</h2>
            <p>
              Spayces is a passion project birthed out of the need and
              frustration of making quick and easy reservations at restaurants.
              In Ghana, finding a centralized medium with restaurant menus and
              making table reservations ahead is quite difficult for both locals
              and foreigners alike.
            </p>
            <p>
              By providing, reliable and accurate restaurant information
              (personalized menus, prices, location, contact details etc), and
              giving users the option to pre-order meals ahead of the occasion,
              Spayces is meant to make going out to eat as simple and
              stress-free as simple and stress-free can get.
            </p>
            <p>
              How might we help curious users easily access accurate information
              on restaurants, make reseravtions and pre-order meals seamlessly?
            </p>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container image-block">
        <div className=" uk-margin-large uk-padding">
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={frame1}>
              <img src={frame1} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text">The Voyage</h2>
          <p>
            Originally named Resto, we (a team of 2 designers and a full-stack
            developer) wanted to create a marginally better and scalable
            experience for finding restaurants, personalized menus and booking
            table reservations in the city of Accra and neighbouring cities in
            the country. As with most design processes, the first and most
            important step was to understand our user, their needs and their
            goals, and thus with our sleeves rolled up, we set out into the
            problem space.
          </p>
          <p>
            To be sure we were addressing the right problems, we designed our
            process around the end-to-end user experience, validating every step
            of the way with input from real users.
          </p>
        </div>
      </div>
      <div className="study-image" data-uk-lightbox="animation: fade">
        <a href={frame2}>
          <img src={frame2} alt="" />
        </a>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text">Poking & Prying</h2>
          <p>
            My starting point in the process was talking to users to gain
            insight into what they saw, felt and thought about the problem space
            we were working in. Using a mix of user interviews and quantitative
            feedback in the form of a survey, we identified key issues our users
            had within our problem space. We conducted a survey with 38
            individuals using Miro and face-to-face interview sessions with 5
            individuals.
          </p>
          <p>The Key problems we identified were:</p>
          <ul>
            <li>Accessing accurate information on restaurants</li>
            <li>
              Poor user experience making these platforms hard to navigate
            </li>
            <li>Last point of contact is missing after making a reservation</li>
          </ul>
          <p>
            I grouped our findings under common themes using an affinity diagram
            to help us visually identify recurring themes and patterns. This
            would help us identify actionable insights, bring order and clarity
            to the problem and help narrow our focus in order to take the next
            step.
          </p>
        </div>
      </div>
      <div className="study-image" data-uk-lightbox="animation: fade">
        <a href={frame3}>
          <img src={frame3} alt="" />
        </a>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          The survey armed us with insights and the face- to face user
          interviews gave us further understanding of our users’ needs and
          empathy for their preferences, thoughts and feelings. This helped us
          to define our target persona to give context to the challenge. 
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={frame4} className="long-container">
              <img src={frame4} alt="" className="long-image" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          To help define the problem and come up with an appropriate problem
          statement, I synthesized the information gathered from the user
          interviews and then created an empathy map based on our findings. This
          was to help me realize how my users' lives were impacted within the
          context we were working and to find out what they actually mean rather
          than just what they said to me.
        </div>
      </div>
      <div className="uk-section-xlarge uk-container">
        <div className=" uk-margin-large uk-padding">
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={frame5} className="long-container">
              <img src={frame5} alt="" className="xlong-image" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          In order to move forward, we needed to learn what the recurring
          patterns and similarities in our findings were. To do that, I quickly
          created an affinity diagram to group user pain points by themes. The
          two main themes we identified were overall poor reservation experience
          and inaccurate information on restaurant websites. This would help us
          identify actionable insights, bring order and clarity to the problem
          and help narrow our focus in order to take the next step.
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          {/*<div className="study-image" data-uk-lightbox="animation: fade">
             <a href={frame5}>
              <img src={frame5} alt="" />
            </a> 
          </div>*/}
          missing image inaccurate information
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <p>POINT OF VIEW</p>
          <p>
            They say a challenge well framed is a challenge half solved and with
            a deep understanding of our users' needs, we dug even deeper to get
            a clear focus on the specific needs uncovered and what solution to
            aim for. I created point-of-view (POV) statement and How Might We
            (HMW) question table to help drive the ideating process.
          </p>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={frame7}>
              <img src={frame7} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text">The Voyage</h2>
          <p>DRUMMING UP FEATURE IDEAS</p>
          <p>
            To move to the next stage of the voyage, we had to brainstorm on
            some features and prioritize them. I worked on a product feature
            list to determine which solutions and features we would prioritize
            based on how effectively we would be able to meet the goals of our
            users and the timeline we were working with. For this project, I
            focused on the first priority items to create the MVP, and then
            slowly build out lower priority items for future product
            development.
          </p>
          <div>
            <button className="uk-button uk-button-default jerday-btn">
              View Product Roadmap
            </button>
          </div>
          <p>INFORMATION ARCHITECTURE & USER FLOW</p>
          <p>
            With the feature priority list to guide our true north, the next
            step was to create a high-level overview of how the app would be
            structured, highlighting key features in the user’s journey and how
            our user would interact with our potential solution.
          </p>
        </div>
      </div>
      <div className="uk-section-xlarge uk-container">
        <div className=" uk-margin-large uk-padding">
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={frame8}>
              <img src={frame8} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className="uk-margin-large uk-padding"></div>
      </div>
      <div className="uk-section-xlarge uk-container">
        <div className=" uk-margin-large uk-padding">
          <p>User Flow</p>
          <p>
            To visualize the overall journey my user would be taking throughout
            the app from start to finish. I wanted to better empathize with the
            scenario they may be in, different decisions they would be making,
            and also the different paths they might take to complete the key
            tasks identified.
          </p>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          {/*<div className="study-image" data-uk-lightbox="animation: fade">
              <a href={frame8}>
              <img src={frame8} alt="" />
            </a> 
          </div>*/}
          missing image user flow
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <p>NOSES TO THE GRINDSTONE</p>
          <p>
            With a deep understanding of our user, their goals, the
            architecture, and the user’s interaction with the app, we were ready
            to get our hands and feet dirty. I worked on translating our
            abstract ideas into a working prototype. Making low-fidelity
            wireframes in Figma was a breeze. But as a team, we still had to
            make informed decisions on how to design the actual screens. The
            voyage was getting even more exciting and we could not wait to get
            cracking on those prototypes.
          </p>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className="uk-margin-large uk-padding">
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={frame10}>
              <img src={frame10} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <p>
            Before working on the visual design, I had to ensure that the design
            was functional. In order to do this, I created a mid-fidelity
            prototype of key features and flows which would help me do quick
            testing with my users and make any priority revisions before
            integrating the final visual design.
          </p>
          <p>
            Doing a quick guerilla test, I asked 5 people from a nearby office
            to test the View Restaurant Menu, Details and Reviews Flow, as well
            as the book table flow so I could get constructive feedback. I also
            sought to observe specific challenges users faced in the process and
            their emotions through each journey.
          </p>
          <div className="uk-margin-top">
            <button className="uk-button uk-button-default jerday-btn">
              Interact with prototype in Figma
            </button>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          {/*  <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={frame8}>
              <img src={frame8} alt="" />
            </a>
          </div> */}
          missing image mid fidelity prototype
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text">Testing</h2>
          <p>
            The Feedback that came to us from the test opened our eyes to see
            that our solution was great but had a few setbacks. I created an
            affinity Diagram to sort qualitative user pain points into common
            themes to make it easier for me to focus on what priority changes
            were to be made.
          </p>
          <p>INSIGHTS FROM USABILITY TESTING</p>
          <p>The main User challenges</p>
          <ul>
            <li>
              I identified and worked on were I observed that most users had
              trouble finding the “Make Reservation” button. The book table
              button was not visible on the restaurant details page, stunting
              the flow of the booking process. My solution to this problem was
              adding a "Make reservation" button on the main Restaurant details
              page.
            </li>
            <li>
              Again, I observed that most users needed a way to order more than
              one meal without having to go back and forth. I designed a flow to
              pre-order multiple meals together with a reservation
              simultaneously without the back and forth which was clearly an
              unpleasant experience.
            </li>
            <li>
              The final priority problem users faced was with the CTA buttons on
              the restaurant details page.Two main concerns were raised:
            </li>
            <li>
              ------The buttons were too tiny and not well optimized. My
              solution was to make the buttons bigger and add text for easy
              identification
            </li>
            <li>
              ------The Restaurant Gallery on the details page was distracting.
              My solution was to remove the gallery altogether since it really
              served no purpose on the page.
            </li>
          </ul>
          <p>
            I grouped our findings under common themes using an affinity diagram
            to help us visually identify recurring themes and patterns. This
            would help us identify actionable insights, bring order and clarity
            to the problem and help narrow our focus in order to take the next
            step.
          </p>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text">Testing</h2>
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={onboarding}>
              <img src={onboarding} alt="" />
            </a>
          </div>
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={signup}>
              <img src={signup} alt="" />
            </a>
          </div>
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={finalDesign}>
              <img src={finalDesign} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className="uk-margin-large uk-padding"></div>
      </div>
      <div className="uk-section-large uk-container">
        <div className="uk-margin-large uk-padding">
          <h2 className="header-text">Final Thoughts</h2>
          <p>
            The Feedback that came to us from the test opened our eyes to see
            that our solution was great but had a few setbacks. I created an
            affinity Diagram to sort qualitative user pain points into common
            themes to make it easier for me to focus on what priority changes
            were to be made.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spayces;