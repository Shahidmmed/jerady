import React from "react";
import { Instagram, Linkedin, Mail, Twitter } from "react-feather";
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
              <Mail className="fill" />
            </a>
            <a
              href="https://www.linkedin.com/in/aj-mensah-04517523a"
              className="uk-margin-right social linkedin"
              target="_blank"
            >
              <span data-uk-icon="linkedin" className="reverse-fill"></span>
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
              <Twitter className="fill" />
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
