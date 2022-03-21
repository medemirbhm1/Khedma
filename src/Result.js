import React, {useState} from 'react'
import "./result.css"
function Result() {
    const [chosen, setChosen] = useState(true)
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
        {chosen?(
            <div className="job">
              <div className='title'>Frontend developer</div>
              <div className='compname'>ESI§SBA</div>
            </div>
        ):""}
      </div>
    </div>
  );
}

export default Result