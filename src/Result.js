import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./result.css";
import { faDollarSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import img from "./img/image 299.png";
import stary from "./img/Star 1.svg";
import starg from "./img/Star 5.svg";

function Result({ users, jobs }) {
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
            {jobs.map((job) => (
              <div className="job">
                <div className="title">{job.title.join(" ")}</div>
                <div className="name">{job.country + ", " + job.city}</div>
                <div className="details">
                  <div className="det">
                    <FontAwesomeIcon icon={faDollarSign} />
                    <div className="text">
                      {job.minPay + " - " + job.maxPay}
                    </div>
                  </div>
                  <div className="det">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <div className="text">{job.workplace}</div>
                  </div>
                  <div className="det">
                    <FontAwesomeIcon icon={faClockFour} />
                    <div className="text">{job.work}</div>
                  </div>
                </div>
                <div className="description">{job.description}</div>
                <div className="btn-cont">
                  <div className="btn">contact</div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {users.map((user) => (
              <div className="person">
                <div className="sqr"></div>
                <div className="content">
                  <div className="cont">
                    <div className="text">
                      <div className="name">
                        {user.firstname + " " + user.lastname}
                      </div>
                      <div className="jtitle">{user.job.join(" ")}</div>
                      <div className="rating">
                        <img src={stary} alt="" />
                        <img src={stary} alt="" />
                        <img src={stary} alt="" />
                        <img src={stary} alt="" />
                        <img src={starg} alt="" />
                      </div>
                      <div className="location">
                        {user.country + " " + user.city}
                      </div>
                    </div>
                    <img className="avatar" src={img} alt="" />
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores, voluptas natus sunt illo sapiente eum nihil nulla
                    ipsam fugit vitae. Temporibus provident est minima, officia
                    repudiandae iste sint maiores molestias.
                  </div>
                  <div className="btn-cont">
                    <button className="btn">Visit Profile</button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Result;
