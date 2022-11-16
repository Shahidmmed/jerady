import React from "react";
import { Instagram, Linkedin, Twitter } from "react-feather";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="uk-container">
      <div className=" uk-padding">
        <hr className="bottom-line" />
        <div className="uk-flex uk-flex-between@s footer-section">
          <h2 className="footer-text">
            Let’s Connect and talk about music, conspiracy theories and all
            things design.
          </h2>
          <div className="uk-margin-bottom">
            <a href="#" className="uk-margin-right social">
              <Linkedin />
            </a>
            <a href="#" className="uk-margin-right social">
              <Instagram />
            </a>
            <a href="#" className="uk-margin-right social">
              <Twitter />
            </a>
          </div>
        </div>
        <hr className="bottom-line" />
        <div className="uk-padding">
          <p className="uk-text-center">
            Made With Warmth and a Cup of Chamomile Tea
          </p>
          <p className="uk-text-center">2022 AJ Mensah</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
