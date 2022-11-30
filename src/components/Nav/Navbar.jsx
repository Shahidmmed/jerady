import { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logos/jiggy2.png";
import { Link, useNavigate } from "react-router-dom";

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
        <div className="uk-navbar-left uk-margin-left">
          <ul className="uk-navbar-nav left-nav">
            <li>
              <Link className="uk-navbar-item logo" to="/">
                <img src={logo} alt="logo" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-right uk-margin-right">
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
              <ul className="uk-navbar-nav primary-nav" data-visible="false">
                <li>
                  <Link
                    className="uk-navbar-item menu-btn"
                    to="/#projects"
                    /* onClick={scrollProjects} */
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link className="uk-navbar-item menu-btn" to="/about">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link className="uk-navbar-item menu-btn" to="/uncut">
                    Uncut Gems
                  </Link>
                </li>
                <li>
                  <Link
                    className="uk-navbar-item menu-btn"
                    to="#"
                    onClick={scroll}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
