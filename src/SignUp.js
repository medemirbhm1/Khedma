import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import choice1 from "./img/undraw_personal_file_re_5joy.svg";
import choice2 from "./img/undraw_quite_town_mg2q.svg";
import "./signUp.css";
import logo from "./img/logo.png";
import signup1 from "./img/undraw_my_password_re_ydq7.svg"
import signup2 from "./img/undraw_profile_details_re_ch9r.svg"
function SignUp() {
  const [chose, setChose] = useState(false);
  const [comp, setComp] = useState(false);
  const navigate = useNavigate();
  function getForm(p) {
    setChose("true");
    if (p === "comp") {
      setComp(true);
    }
  }
  return (
    <div className="signup">
      <nav>
        <div className="container">
          <button className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
            Khedma
          </button>
        </div>
      </nav>
      <form>
        <div className={`container ${chose ? "chose" : ""}`}>
          {!chose ? (
            <>
              <h2>Sign up as a :</h2>
              <div className="choices">
                <div
                  className="choice"
                  onClick={() => {
                    getForm();
                  }}
                >
                  <img src={choice1} alt="" />
                  <h3>Person</h3>
                </div>
                <div
                  className="choice"
                  onClick={() => {
                    getForm("comp");
                  }}
                >
                  <img src={choice2} alt="" />
                  <h3>Company</h3>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="left">
                <h2>Signup</h2>
                <div className="row">
                  <div>
                    <label className="label" htmlFor="first">
                      {comp ? "Company Name" : "First Name"}
                    </label>
                    <input id="first" className="input" type="text" />
                  </div>
                  <div>
                    <label className="label" htmlFor="second">
                      {comp ? "Location" : "Last Name"}
                    </label>
                    <input id="second" className="input" type="text" />
                  </div>
                </div>
                <label className="label" htmlFor="third">
                  {comp ? "Creation Date" : "Birthdate"}
                </label>
                <input id="third" className="input" type="date" />
                <label className="label" htmlFor="fourth">
                  Email
                </label>
                <input id="fourth" className="input" type="email" />
                <label className="label" htmlFor="fifth">
                  Password
                </label>
                <input id="fifth" className="input" type="password" />
                <button className="btn" type="button">
                  Signup
                </button>
              </div>
              <img src={comp ? signup2 : signup1} alt="" />
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default SignUp;
