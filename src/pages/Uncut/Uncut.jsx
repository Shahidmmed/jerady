import React, { useEffect } from "react";
import "./Uncut.scss";
import { TinderLikeCard } from "react-stack-cards";
import { useState, useRef } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  console.log(brand);

  let brand1 = brand;
  for (let i = 0; i < 50; i++) {
    brand1 = brand1.concat(brand);
  }
  let marketing1 = marketing;
  for (let i = 0; i < 50; i++) {
    marketing1 = marketing1.concat(marketing);
  }
  let graphic1 = graphic;
  for (let i = 0; i < 50; i++) {
    graphic1 = graphic1.concat(graphic);
  }

  const stackRef = useRef();

  const onSwipe = (e) => {
    stackRef.current.swipe();
  };
  const marketRef = useRef();

  const onMarketSwipe = (e) => {
    marketRef.current.swipe();
  };
  const graphicRef = useRef();

  const onGraphicSwipe = (e) => {
    graphicRef.current.swipe();
  };

  return (
    <div>
      <div className="uk-section uk-container uk-padding-remove-bottom">
        <div
          className=" uk-margin-large uk-padding"
          data-uk-scrollspy="cls: uk-animation-slide-left; delay: 500"
        >
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
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="">
          <a onClick={onSwipe}>
            <TinderLikeCard
              images={brand1}
              ref={stackRef}
              width="950"
              height="560"
              direction="swipeRight"
              duration={400}
              className="tinder"
              onClick={onSwipe}
            ></TinderLikeCard>
          </a>
        </div>
        <div className="uk-margin-large uk-padding uncut-header">
          <h3
            className="header-text uk-margin-top"
            data-uk-scrollspy="cls: uk-animation-slide-bottom; delay: 500"
          >
            BRAND DESIGN
          </h3>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="">
          <a onClick={onMarketSwipe}>
            <TinderLikeCard
              images={marketing1}
              ref={marketRef}
              width="950"
              height="560"
              direction="swipeRight"
              duration={400}
              className="tinder"
            ></TinderLikeCard>
          </a>
        </div>
        <div className="uk-margin-large uk-padding uncut-header">
          <h3
            className="header-text uk-margin-top"
            data-uk-scrollspy="cls: uk-animation-slide-bottom; delay: 500"
          >
            MARKETING DESIGN
          </h3>
        </div>
      </div>
      <div className="uk-section uk-container uk-padding-remove-vertical">
        <div className="">
          <a onClick={onGraphicSwipe}>
            <TinderLikeCard
              images={graphic1}
              ref={graphicRef}
              width="950"
              height="560"
              direction="swipeRight"
              duration={400}
              className="tinder"
            ></TinderLikeCard>
          </a>
        </div>
        <div className="uk-margin-large uk-padding uncut-header">
          <h3
            className="header-text uk-margin-top"
            data-uk-scrollspy="cls: uk-animation-slide-bottom; delay: 500"
          >
            GRAPHIC DESIGN
          </h3>
        </div>
      </div>
      <div className="uk-section-large uk-container"></div>
    </div>
  );
};

export default Uncut;
