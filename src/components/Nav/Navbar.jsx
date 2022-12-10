import { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logos/jiggy2.png";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Instagram } from "react-feather";
import LinkedIn from "../../assets/icons/LinkedIn.svg";
import twitter from "../../assets/icons/Twitter.svg";
import mail from "../../assets/icons/Mail.svg";

const Navbar = () => {
  const [navToggled, setNavToggled] = useState(false);

  const navigate = useNavigate();

  const scroll = () => {
    const section = document.querySelector("#contact");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="top-nav"
      data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
    >
      <nav className="uk-navbar-container uk-navbar-transparent uk-navbar nav-section">
        <div className="uk-navbar-left left-nav">
          <ul className="uk-navbar-nav">
            <li>
              <Link className="uk-navbar-item logo" to="/">
                <img src={logo} alt="logo" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-right right-nav">
          <button
            aria-controls="primary-nav"
            aria-expanded="false"
            className="toggle-mobile-nav"
            data-uk-toggle="target: #offcanvas-flip"
          ></button>

          <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
            <div className="uk-offcanvas-bar">
              <button
                className="uk-offcanvas-close"
                type="button"
                data-uk-close
              ></button>
              <ul
                className="uk-navbar-nav primary-nav uk-margin-large-top"
                data-visible="false"
              >
                <li>
                  <HashLink className="uk-navbar-item menu-btn" to="/#projects">
                    <p className="uk-margin-remove">Case Studies</p>
                    Work
                  </HashLink>
                </li>
                <li>
                  <Link className="uk-navbar-item menu-btn" to="/about">
                    <p className="uk-margin-remove">Not Case Studies</p>
                    About Me
                  </Link>
                </li>
                <li>
                  <Link className="uk-navbar-item menu-btn" to="/uncut">
                    <p className="uk-margin-remove">Also not Case Studies</p>
                    Uncut Gems
                  </Link>
                </li>
                <li>
                  <Link
                    className="uk-navbar-item menu-btn"
                    to="#"
                    onClick={scroll}
                  >
                    <p className="uk-margin-remove">Want to reach me?</p>
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="nav-socials uk-margin-top">
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
                  className="uk-margin-right social"
                  target="_blank"
                >
                  <img src={twitter} alt="" />
                </a>
                <a
                  href="mailto:jeradybrew18@gmail.com"
                  className="uk-margin-right social"
                  target="_blank"
                >
                  <img src={mail} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
