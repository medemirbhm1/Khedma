import React, { useEffect, useState } from "react";
import "./result.css";
import Person from "./Person";
import Joba from "./Joba";
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
              jobs.map((job) => <Joba job={job} />)
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
