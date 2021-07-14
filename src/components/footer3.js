import "../styles/footer2.scss";
import React from "react";

export default function Footer3() {
  return (
    <footer class="">
      <div class="container">
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={3}
                fill="rgba(19,67,84,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={5}
                fill="rgba(19,67,84,0.3)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={7}
                fill="rgba(19, 67, 84, 1)"
              />
            </g>
          </svg>
        </div>

        <div className="content">
          <div className="first__content">
            <div className="row footer__title">
              LATEN WE IETS GEWELDIGS CREËREN
            </div>
            <div className="row info">
              <div className="footer__email">
                <h3>E-mail:</h3>
                <a href="mailto:info@laforga.nl">info@laforga.nl</a>
              </div>
              <div className="footer__tel">
                <h3>Telefoonnummer</h3>{" "}
                <a href="tel:+31238440060">023 8440060</a>
              </div>
              <div className="social-links">
                <h3>Social</h3>
                <div className="social__items">
                  {" "}
                  <a href="">
                    Instagram{" "}
                    <span> {/* <img src={Vector} alt="" />{" "} */}</span>
                  </a>
                  <a href="">
                    Facebook{" "}
                    <span>{/* <img src={Vector} alt="" />{" "} */}</span>
                  </a>
                  <a href="">
                    LinkedIn{" "}
                    <span> {/* <img src={Vector} alt="" />{" "} */}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>@2021 Laforga_design, Alle rechten voorbehouden</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
