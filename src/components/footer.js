import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <section className="footer__component">
      <div class="wave">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="Footer__container">
          <div className="row footer__title">
            LATEN WE IETS GEWELDIGS CREËREN
          </div>
          <div className="row info">
            <div className="footer__email">
              <h3>E-mail:</h3>
              <a href="mailto:info@laforga.nl">info@laforga.nl</a>
            </div>
            <div>
              <h3>Telefoonnummer</h3> <a href="tel:+31238440060">023 8440060</a>
            </div>
            <div className="social-links">
              <h3>Social</h3>
              <div>
                {" "}
                <a href="">
                  Instagram{" "}
                  <span> {/* <img src={Vector} alt="" />{" "} */}</span>
                </a>
                <a href="">
                  Facebook <span>{/* <img src={Vector} alt="" />{" "} */}</span>
                </a>
                <a href="">
                  LinkedIn{" "}
                  <span> {/* <img src={Vector} alt="" />{" "} */}</span>
                </a>
                <a href="">
                  TikTok <span> {/* <img src={Vector} alt="" />{" "} */}</span>
                </a>
                <a href="">
                  Whatsapp <span>{/* <img src={Vector} alt="" />{" "} */}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p>©2021 Laforga. Alle rechten voorbehouden</p>
      </section>
    </div>
  );
};

export default Footer;
