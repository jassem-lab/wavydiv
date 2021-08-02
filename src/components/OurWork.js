import React from "react";
import "swiper/swiper.scss";

import Swiper from "react-id-swiper";

const OurWork = () => {
  const sliderParams = {
    centeredSlides: false,
    slidesPerView: 1.2,
  };
  return (
    <section className="study-case-container">
      <h2>Meest recente werk</h2>
      {/* <div className="recent-work">
        <div className="recent-work-container">
          <article className="thumbnail-work maglashic">
            <a href="/">
              <div className="recent-work--info">
                <h3>Maglashic</h3>
                <p>
                  Maakt wimpers aanbrengen eenvoudiger dan ooit met een
                  natuurlijke look.
                </p>
              </div>
            </a>
          </article>
          <article className="thumbnail-work four-editors">
            <a href="/">
              <div className="recent-work--info">
                <h3>Four Editors</h3>
                <p>
                  De meest complete & hoogwaardige bundels voor het editing
                  proces van film.
                </p>
              </div>
            </a>
          </article>
          <article className="thumbnail-work maglashic">
            <a href="/">
              <div className="recent-work--info">
                <h3>Maglashic</h3>
                <p>
                  Maakt wimpers aanbrengen eenvoudiger dan ooit met een
                  natuurlijke look.
                </p>
              </div>
            </a>
          </article>
          <article className="thumbnail-work maglashic">
            <a href="/">
              <div className="recent-work--info">
                <h3>Maglashic</h3>
                <p>
                  Maakt wimpers aanbrengen eenvoudiger dan ooit met een
                  natuurlijke look.
                </p>
              </div>
            </a>
          </article>
        </div>
      </div> */}
      <div className="thumbnail__container">
        <Swiper {...sliderParams}>
          <div className="test">
            <p className="test__paragraphe">
              <h3>Maglashic</h3>
              Maakt wimpers aanbrengen eenvoudiger dan ooit met een natuurlijke
              look.
            </p>
          </div>

          <div className="test">
            <p className="test__paragraphe">
              <h3>Maglashic</h3>
              Maakt wimpers aanbrengen eenvoudiger dan ooit met een natuurlijke
              look.
            </p>
          </div>

          <div className="test">
            <p className="test__paragraphe">
              <h3>Maglashic</h3>
              Maakt wimpers aanbrengen eenvoudiger dan ooit met een natuurlijke
              look.
            </p>
          </div>
          <div className="test">
            <p className="test__paragraphe">
              <h3>Maglashic</h3>
              Maakt wimpers aanbrengen eenvoudiger dan ooit met een natuurlijke
              look.
            </p>
          </div>
        </Swiper>
      </div>
      {/* <div className="test2__wrapper">
      <div className="test2">hello world</div>
      </div> */}
    </section>
  );
};

export default OurWork;
