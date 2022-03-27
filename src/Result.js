import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./result.css";
import { faDollarSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import img from "./img/image 299.png";
import stary from "./img/Star 1.svg";
import starg from "./img/Star 5.svg";

function Result() {
  const [chosen, setChosen] = useState(false);
  return (
    <div className="result">
      <div className="head">
        <div
          className={`choice ${chosen ? "chosen" : ""}`}
          onClick={() => {
            setChosen(true);
          }}
        >
          Need a job
        </div>
        <div
          className={`choice ${!chosen ? "chosen" : ""}`}
          onClick={() => {
            setChosen(false);
          }}
        >
          Need to hire
        </div>
      </div>
      <div className="container">
        {chosen ? (
          <>
            <div className="job">
              <div className="title">Frontend developer</div>
              <div className="name">ESI-SBA</div>
              <div className="details">
                <div className="det">
                  <FontAwesomeIcon icon={faDollarSign} />
                  <div className="text">50,000$</div>
                </div>
                <div className="det">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <div className="text">Remote</div>
                </div>
                <div className="det">
                  <FontAwesomeIcon icon={faClockFour} />
                  <div className="text">Full-time</div>
                </div>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                nobis quos facere iusto atque, blanditiis dolore a inventore,
                sequi aspernatur culpa tenetur maxime. Temporibus explicabo vero
                corporis officia sapiente quasi.
              </div>
              <div className="btn-cont">
                <div className="btn">more</div>
              </div>
            </div>
            <div className="job">
              <div className="title">Frontend developer</div>
              <div className="name">ESI-SBA</div>
              <div className="details">
                <div className="det">
                  <FontAwesomeIcon icon={faDollarSign} />
                  <div className="text">50,000$</div>
                </div>
                <div className="det">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <div className="text">Remote</div>
                </div>
                <div className="det">
                  <FontAwesomeIcon icon={faClockFour} />
                  <div className="text">Full-time</div>
                </div>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                nobis quos facere iusto atque, blanditiis dolore a inventore,
                sequi aspernatur culpa tenetur maxime. Temporibus explicabo vero
                corporis officia sapiente quasi.
              </div>
              <div className="btn-cont">
                <div className="btn">more</div>
              </div>
            </div>
            <div className="job">
              <div className="title">Frontend developer</div>
              <div className="name">ESI-SBA</div>
              <div className="details">
                <div className="det">
                  <FontAwesomeIcon icon={faDollarSign} />
                  <div className="text">50,000$</div>
                </div>
                <div className="det">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <div className="text">Remote</div>
                </div>
                <div className="det">
                  <FontAwesomeIcon icon={faClockFour} />
                  <div className="text">Full-time</div>
                </div>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                nobis quos facere iusto atque, blanditiis dolore a inventore,
                sequi aspernatur culpa tenetur maxime. Temporibus explicabo vero
                corporis officia sapiente quasi.
              </div>
              <div className="btn-cont">
                <div className="btn">more</div>
              </div>
            </div>
          </>
        ) : (
          <div className="person">
            <div className="sqr"></div>
            <div className="text">
              <div className="cont">
                <div className="name">Mansour Houssam</div>
                <img src={img} alt="" />
              </div>
              <div className="jtitle">Frontend developer</div>
              <div className="rating">
                <img src={stary} alt="" />
                <img src={stary} alt="" />
                <img src={stary} alt="" />
                <img src={stary} alt="" />
                <img src={starg} alt="" />
              </div>
              <div className="location">Msila, Algeria</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, voluptas natus sunt illo sapiente eum nihil nulla ipsam
                fugit vitae. Temporibus provident est minima, officia
                repudiandae iste sint maiores molestias.
              </div>
              <div className="btn-cont">
                <button className="btn">Visit Profile</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Result;
