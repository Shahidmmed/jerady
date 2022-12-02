import React from "react";
import { Instagram } from "react-feather";
import LinkedIn from "../../assets/icons/LinkedIn.svg";
import twitter from "../../assets/icons/Twitter.svg";
import mail from "../../assets/icons/Mail.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="uk-container" id="contact">
      <div className=" uk-padding">
        <hr className="bottom-line" />
        <div className="uk-flex uk-flex-between@s footer-section">
          <h2 className="footer-text">
            Let’s Connect and talk about music, conspiracy theories and all
            things design.
          </h2>
          <div className="uk-margin-bottom">
            <a
              href="mailto:jeradybrew18@gmail.com"
              className="uk-margin-right social"
              target="_blank"
            >
              <img src={mail} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/aj-mensah-04517523a"
              className="uk-margin-right social"
              target="_blank"
            >
              <img src={LinkedIn} alt="" />
            </a>
            <a
              href="https://www.instagram.com/ayycalaiss"
              className="uk-margin-right social"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com/ayycalaiss"
              className="uk-margin-small-right social"
              target="_blank"
            >
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
        <hr className="bottom-line" />
        <div className="uk-padding-small bottom-text">
          <p className="uk-text-right">
            Made With Warmth and a Cup of Chamomile Tea
          </p>
          <p className="uk-text-right">&copy; 2022 AJ Mensah</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
