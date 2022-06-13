import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./result.css";
import { faDollarSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import Person from "./Person";

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
            {jobs.length ? (
              jobs.map((job) => (
                <div className="job" key={job.userId}>
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
                    <button className="btn">
                      <a href={"mailto: " + job.email}>Contact</a>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h2>nothing found !</h2>
            )}
          </>
        ) : (
          <>
            {users.length ? (
              users.map((user) => <Person user={user} />)
            ) : (
              <h2>nothing found !</h2>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Result;
