import React from "react";
import "./Uncut.scss";
import { TinderLikeCard } from "react-stack-cards";
import { useState } from "react";
const graphicDesign = import.meta.glob(
  "../../assets/images/GraphicDesign/*.(png|jpg)"
);
const brandDesign = import.meta.glob(
  "../../assets/images/BrandDesign/*.(png|jpg)"
);
const marketingDesign = import.meta.glob(
  "../../assets/images/MarketingDesign/*.(png|jpg)"
);

const Uncut = () => {
  const [swipe, setSwipe] = useState(false);
  var brand = [];
  brand = Object.keys(brandDesign);
  console.log(brandDesign);

  const onSwipe = () => {
    setSwipe(true);
  };

  return (
    <div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h1 className="header-text">Side Missions</h1>
          <p>
            I am an Experience Designer with a Graphic Design, Research and
            Creative Writing background who tries not to take herself seriously.
            When I'm not contributing to solving business and user problems, I'm
            sometimes spotted in a cozy studio making music, reading, writing or
            playing word games.
          </p>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h4 className="header-text">BRAND DESIGN</h4>
          <TinderLikeCard
            images={brand}
            width="600"
            height="560"
            direction="swipeRight"
            duration={400}
            className="tinder"
          ></TinderLikeCard>
          <div className="uk-card uk-card-default uk-card-large uk-card-body brand-card"></div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h4 className="header-text">MARKETING DESIGN</h4>
          <div className="uk-card uk-card-default uk-card-large uk-card-body brand-card"></div>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h4 className="header-text">GRAPHIC DESIGN</h4>
          <div className="uk-card uk-card-default uk-card-large uk-card-body brand-card"></div>
        </div>
      </div>
    </div>
  );
};

export default Uncut;
