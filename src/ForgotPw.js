import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo.png";
import "./forgotPw.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
function ForgotPw() {
  const navigate = useNavigate("/");
  const [emailSent, setEmailSent] = useState(false);
  function sendEmail() {
    setEmailSent(true);
    //send verification email
  }
  return (
    <div className="forgotPw">
      <nav>
        <div className="container">
          <button className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
            Khedma
          </button>
        </div>
      </nav>
      <form>
        <div className="container">
          {!emailSent ? (
            <>
              <div className="title">
                <h2>Forgot your password ?</h2>
                <h5>Don't worry</h5>
              </div>
              <div className="cont">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input className="input" type="email" id="email" />
                <button className="btn" onClick={sendEmail} type="button">
                  Send verification code
                </button>
              </div>
            </>
          ) : (
            <div className="title">
              <h2>Verification link was sent</h2>
              <h5>Please check your mail</h5>
            </div>
          )}
          <div
            className="back"
            onClick={() => {
              navigate("/login");
            }}
          >
            <FontAwesomeIcon className="icon" icon={faArrowLeft} /> Back to
            login
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPw;
