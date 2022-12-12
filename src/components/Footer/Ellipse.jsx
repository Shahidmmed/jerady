import React from "react";
import ellipse from "../../assets/images/Ellipse42.png";

const Ellipse = () => {
  return (
    <>
      <div className="ellipse-section">
        <div className="uk-section uk-container uk-padding-remove-bottom">
          <div className="uk-padding uk-padding-remove-bottom">
            <div className="uk-margin" data-uk-grid>
              <div
                className="uk-width-auto"
                data-uk-scrollspy="cls: uk-animation-fade; delay: 500"
              >
                <img src={ellipse} alt="" className="home-image" />
              </div>
              <div
                className="uk-width-expand"
                data-uk-scrollspy="cls: uk-animation-fade; delay: 500"
              >
                <div className="home-contact">
                  <h2 className="header-text">Need some help on a project</h2>
                  <p className="help-text">
                    Send an email if you would like to collaborate or have
                    questions about my work.
                  </p>
                  <a
                    href="mailto:jeradybrew18@gmail.com"
                    className="uk-button uk-button-default jerday-btn"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ellipse;
