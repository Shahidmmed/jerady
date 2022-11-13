import React from "react";
import { Instagram, Linkedin, Twitter } from "react-feather";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="uk-container">
      <div className=" uk-padding">
        <hr />
        <div className=" uk-flex uk-flex-between@s">
          <h2 className="footer-text">
            Let’s Connect and talk about music, conspiracy theories and all
            things design.
          </h2>
          <div>
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
      </div>
    </div>
  );
};

export default Footer;
