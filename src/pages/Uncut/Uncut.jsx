import React from "react";
import "./Uncut.scss";
import { TinderLikeCard } from "react-stack-cards";
import { useState } from "react";
import { getImgUrl } from "../../data/functions";
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
  var marketing = [];
  var graphic = [];
  brand = Object.keys(brandDesign).map((bc) =>
    getImgUrl(bc?.replace("../../assets/images/", ""))
  );
  marketing = Object.keys(marketingDesign).map((bc) =>
    getImgUrl(bc?.replace("../../assets/images/", ""))
  );
  graphic = Object.keys(graphicDesign).map((bc) =>
    getImgUrl(bc?.replace("../../assets/images/", ""))
  );

  const onSwipe = (e) => {
    e.target.Tinder.swipe();
  };

  return (
    <div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h1 className="header-text">Side Missions</h1>
          <p className="uncut-text">
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
            width="950"
            height="560"
            direction="swipeRight"
            duration={400}
            className="tinder"
            onClick={onSwipe}
          ></TinderLikeCard>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h4 className="header-text">MARKETING DESIGN</h4>
          <TinderLikeCard
            images={marketing}
            width="950"
            height="560"
            direction="swipeRight"
            duration={400}
            className="tinder"
          ></TinderLikeCard>
        </div>
      </div>
      <div className="uk-section-large uk-container">
        <div className=" uk-margin-large uk-padding">
          <h4 className="header-text">GRAPHIC DESIGN</h4>
          <TinderLikeCard
            images={graphic}
            width="950"
            height="560"
            direction="swipeRight"
            duration={400}
            className="tinder"
          ></TinderLikeCard>
        </div>
      </div>
      <div className="uk-section-large uk-container uk-padding-xlarge-top uk-margin-xlarge-top"></div>
    </div>
  );
};

export default Uncut;
