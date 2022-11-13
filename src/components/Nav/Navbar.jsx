import { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logos/whitelogo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navToggled, setNavToggled] = useState(false);

  const showNav = () => {
    const primaryNav = document.querySelector(".primary-nav");
    const navToggle = document.querySelector(".toggle-mobile-nav");
    const visibility = primaryNav.getAttribute("data-visible");

    if (!navToggled) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
    setNavToggled(!navToggled);

    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", "true");
      navToggle.setAttribute("aria-expanded", "true");
    } else if (visibility === "true") {
      primaryNav.setAttribute("data-visible", "false");
      navToggle.setAttribute("aria-expanded", "false");
    }

    primaryNav.addEventListener("focusout", () => {
      console.log("click");
    });
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
            onClick={showNav}
          >
            <span className="sr-only"></span>
          </button>
          <ul className="uk-navbar-nav primary-nav" data-visible="false">
            <li>
              <Link className="uk-navbar-item menu-btn" to="/#projects">
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
              <Link className="uk-navbar-item menu-btn" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
