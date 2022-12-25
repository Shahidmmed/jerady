import React, { useRef } from "react";
import NextProjects from "../../components/NextProjects/NextProjects";
import { selectedProjects } from "../../data/info";
import clinicDetails from "../../assets/images/caseStudies/Yamas/ClinicDetails.png";
import persona1 from "../../assets/images/caseStudies/Yamas/persona1.png";
import persona2 from "../../assets/images/caseStudies/Yamas/persona2.png";
import companal from "../../assets/images/caseStudies/Yamas/companal.png";
import YamasInfoArch from "../../assets/images/caseStudies/Yamas/YamasInfoArch.png";
import userJourney from "../../assets/images/caseStudies/Yamas/userJourney.png";
import findings from "../../assets/images/caseStudies/Yamas/findings.png";
import topwire from "../../assets/images/caseStudies/Yamas/topwire.png";
import bottomwire from "../../assets/images/caseStudies/Yamas/bottomwire.png";
import sign from "../../assets/images/caseStudies/Yamas/sign.png";
import homepage from "../../assets/images/caseStudies/Yamas/homepage.png";
import screens from "../../assets/images/caseStudies/Yamas/screens.png";
import hero from "../../assets/images/caseStudies/Yamas/yamashero.png";

const Yamas = () => {
  const context = useRef(null);
  const poking = useRef(null);
  const ideation = useRef(null);
  const testing = useRef(null);
  const lessons = useRef(null);

  let nextprojects = selectedProjects.slice(3, 5);

  return (
    <div>
      <div className="uk-section-large uk-container uk-padding-remove-bottom">
        <div className=" uk-margin-large uk-padding">
          <h5 className="study-name uk-margin-remove">YAMAS</h5>
          <h2 className="header-text study-header uk-margin-remove">
            Pushing the Frontiers of Health Technology
          </h2>
          <p className="study-brief uk-margin-top">
            Yamas makes it easy for patients to schedule appointments with
            healthcare providers With just a few taps on their smartphone,
            patients can browse available appointment times, select a date and
            time that works for them, and book their appointment directly
            through the app.
          </p>
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={hero}>
              <img src={hero} alt="" />
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
              <a href="#" onClick={() => scrollToSection(context)}>
                CONTEXT
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(poking)}>
                POKING & PRYING
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(ideation)}>
                IDEATION
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(testing)}>
                TESTING
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(lessons)}>
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
        ref={context}
        id="overview"
      >
        <div className=" uk-margin-large uk-padding">
          <h2 className="header-text">Context</h2>
          <p>
            Yamas makes it easy for patients to schedule appointments with
            healthcare providers. With just a few taps on their smartphone,
            patients can browse available appointment times, select a date and
            time that works for them, and book their appointment directly
            through the app.
          </p>
          <h2 className="header-text">Challenge</h2>
          <p>
            Patients struggle to book appointments online or over the phone,
            leading to long wait times and abandoned appointments. Hospital
            staff also have a difficult time assisting patients with the booking
            process, leading to inefficiencies and increased workload.
          </p>
          <div className="uk-padding-remove">
            <h4>My Role</h4>
            <ul className="tasks">
              <li>Customers Insights & Ideation</li>
              <li>Contributing to the Project Vision</li>
              <li>Planning and scope definition</li>
              <li>
                Design Execution and validation of the homepage, standard and
                priority booking flow and sign up & sign in.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="uk-padding uk-padding-remove-bottom uk-margin-bottom uk-flex">
          <div style={{ width: "80%" }}>
            <div className="study-image" data-uk-lightbox="animation: fade">
              <a href={clinicDetails}>
                <img src={clinicDetails} alt="" />
              </a>
            </div>
          </div>
          <div>
            <p>
              Working together with the research team, we uncovered a number of
              pain points with the healthcare appointment booking process.
              Patients found the process to be time-consuming, among others.
              Hospital administration also highlighted that they had to spend a
              lot of time on the phone assisting patients with the booking
              process.
            </p>
            <h4>
              How might we make the healthcare appointment booking process
              convenient and effortless?
            </h4>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="uk-padding uk-padding-remove-bottom">
          <h3 className="header-text uk-margin-remove-bottom">Research</h3>
          <p className="uk-margin-remove">
            The first step was to have a deep look at user needs and behaviour.
            To gather insights on how we would best design the Yamas app, the
            research team conducted user research through a variety of methods,
            including online surveys and focus groups.
          </p>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="uk-padding">
          <h3 className="header-text uk-margin-remove-bottom">
            01 User Pain Points
          </h3>
          <p className="uk-margin-remove-top">
            Based on the user research, the team identified several key pain
            points in the healthcare appointment booking process including:
          </p>
          <div
            className="study-image uk-margin-bottom"
            data-uk-lightbox="animation: fade"
          >
            <a href={findings}>
              <img src={findings} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="uk-padding">
          <h2 className="header-text uk-margin-remove-bottom">02 Personas</h2>
          <div
            className="study-image uk-margin-bottom"
            data-uk-lightbox="animation: fade"
          >
            <a href={persona1}>
              <img src={persona1} alt="" />
            </a>
          </div>
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={persona2}>
              <img src={persona2} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="uk-padding">
          <h3 className="header-text uk-margin-remove-bottom">
            03 Competitive Analysis
          </h3>
          <p>
            Together with the research team, we conducted market analysis of our
            competitors who are already on the market to identify areas where
            user experience on our app can be improved in order to stand out in
            the market. We discovered quite a number of apps that served similar
            purpose but we downsized our analysis to 3 prominent apps.
          </p>
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={companal}>
              <img src={companal} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="uk-padding">
          <h3 className="header-text uk-margin-remove-bottom">
            04 Feature Ideation
          </h3>
          <p>
            Sapphire is a fuel purchasing app that affords user the convenience
            of buying fuel with the tap of a button without having to be at the
            gas station. As an end-to-end energy tech start-up, the company
            required a dashboard for fuel suppliers to track fuel orders,
            deliveries, sales, earnings and inventory levels in real-time. The
            dashboard will be used by both individual and corporate energy
            service providers alike to manage the day-to-day supply of fuel to
            consumers, make and receive payment and manage operations.
          </p>
        </div>
      </div>
      <div className="uk-section-large uk-container uk-padding-remove-top">
        <div className="uk-padding">
          <h3 className="header-text uk-margin-remove-bottom">
            05 Information Architecture
          </h3>
          <p>
            Once I identified user needs, the next step was to create a
            high-level hierarchy of the app's content, structuring the necessary
            information that needed to be displayed and how our users would
            access that information. It was a bit challenging at this point
            considering the 2 different types of booking processes a user had to
            choose from. The main concern was how to stucture the information to
            reduce the number of pages to be navigated, making it more
            user-friendly.
          </p>
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={YamasInfoArch} className="long-container">
              <img src={YamasInfoArch} className="long-image" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section-xlarge uk-container uk-padding-xlarge hide-mobile">
        <div className="uk-margin-large uk-padding-large"></div>
      </div>
      <div className="uk-section-large uk-container uk-padding-remove-bottom">
        <div className="uk-padding">
          <h3 className="header-text uk-margin-top">06 User Journey</h3>
          <p>
            With the information architecture done, I moved on to mapping out
            the different steps and interactions that my user would go through
            as they use the app. This would help me understand their needs and
            goals at every touch point, as well as identify any potential
            bottlenecks in my user’s journey that could be addressed.
          </p>
          <div className="study-image" data-uk-lightbox="animation: fade">
            <a href={userJourney}>
              <img src={userJourney} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="uk-padding">
          <h3 className="header-text uk-margin-remove-bottom">Visual Design</h3>
          <p>
            When it was time to integrate color, text and other UI elements into
            the wireframes, I considered w fidelity blue prints together with
            the information architecture.
          </p>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="uk-padding">
          <h3 className="header-text uk-margin-remove-bottom">07 Wireframes</h3>
          <p>
            At this point, I was ready to carve out mid-fidelity wireframes of
            the solution, reason being that i had already created low fidelity
            blue prints together with the information architecture.
          </p>
          <div
            className="study-image uk-margin-bottom"
            data-uk-lightbox="animation: fade"
          >
            <a href={topwire} className="long-container">
              <img src={topwire} alt="" className="long-image" />
            </a>
          </div>
          <div
            className="study-image uk-margin-bottom"
            data-uk-lightbox="animation: fade"
          >
            <a href={bottomwire} className="long-container">
              <img src={bottomwire} alt="" className="long-image" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="uk-padding">
          <h3 className="header-text uk-margin-remove-bottom">
            Sign Up + Sign In
          </h3>
          <p>
            One key design decision was to simplify the sign up process so not
            to scare new users away. Sign Up
          </p>
          <div
            className="study-image uk-margin-bottom"
            data-uk-lightbox="animation: fade"
          >
            <a href={sign} className="long-container">
              <img src={sign} alt="" className="long-image" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="uk-padding">
          <h3 className="header-text uk-margin-remove-bottom">Home Page</h3>
          <p>
            One key design decision was to simplify the appointment booking
            process by allowing patients to search for and book appointments
            directly from the app's homepage. This eliminated the need for
            patients to navigate through multiple pages or enter unnecessary
            information.
          </p>
          <div
            className="study-image uk-margin-bottom"
            data-uk-lightbox="animation: fade"
          >
            <a href={homepage} className="long-container">
              <img src={homepage} alt="" className="long-image" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="uk-padding">
          <h3 className="header-text uk-margin-remove-bottom">
            Booking Appointment
          </h3>
          <p>
            Based on the subscription model of the app, booking an appointment
            with a healthcare provider involved 2 distinct processes or
            categories. The standard process of booking appointments which
            automatically selects time for users while priority booking gives a
            user the flexibility to choose their own date and time.
          </p>
          <div
            className="study-image uk-margin-bottom"
            data-uk-lightbox="animation: fade"
          >
            <a href={screens} className="long-container">
              <img src={screens} alt="" className="long-image" />
            </a>
          </div>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="uk-padding">
          <h3 className="header-text uk-margin-remove-bottom">User Feedback</h3>
          <p>
            I conducted usability testing with our focus group to gather
            valuable insights into the user experience of the app and identify
            areas for improvement.
          </p>
          <h3 className="header-text uk-margin-remove-bottom">
            What they liked
          </h3>
          <p>
            Overall, the results of the usability testing study were positive. 7
            out of 10 users were able to complete the tasks with minimal
            difficulty, and had high levels of satisfaction with the app. What
            they liked most were:
          </p>
          <ul>
            <li>The interface was simple and consistent.</li>
            <li>
              The app was quite easy to navigate in order to perform key tasks.
            </li>
            <li>
              The booking process was generally smooth and straightforward.
            </li>
          </ul>
          <h3>What could be improved</h3>
          <ul>
            <li>
              An edit button could be provided under Complaint text box to allow
              users edit text
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="uk-padding">
          <h3 className="header-text uk-margin-remove-bottom">
            Moving Forward
          </h3>
          <p>
            it was interesting to see which motivations, how many contexts and
            use cases triggered users to open the Yamas App to book health care
            appointments.
          </p>
          <p>
            Again, it is important to consider the specific needs and
            preferences of target users when designing an app. The Yamas health
            care booking app was designed with the goal of making it easy for
            patients to manage their health care appointments and personal
            information and understanding needs and expectations of our set of
            users was crucial in the design process
          </p>
          <p>Finally, recommendations from the usability studies</p>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="uk-padding">
          <h3 className="header-text uk-margin-remove-bottom"></h3>
          <p></p>
        </div>
      </div>

      <NextProjects nextprojects={nextprojects} />
    </div>
  );
};

export default Yamas;
