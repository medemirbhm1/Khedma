import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo.png";
import "./forgotPw.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
function ForgotPw() {
  const navigate = useNavigate("/");
  const [codeSent, setCodeSent] = useState(false);
  const [codeConfirmed, setCodeConfirmed] = useState(false);
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  function sendCode() {
    setCodeSent(true);
  }
  function confirm() {
    // if the confirmation code is true
    setCodeConfirmed(true);
  }
  function chngPassword() {
    if (
      password === confPassword &&
      password.length > 6 &&
      password.length < 21
    ) {
      //change password
    } else {
      if (password.length < 6) {
        alert("Password must be > 6");
      } else if (password.length > 20) alert("Password must be < 20");
      else alert("Passwords are not equal");
    }
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
          <div className="title">
            <h2>
              {" "}
              {!codeSent
                ? "Forgot your password ?"
                : !codeConfirmed
                ? "Code was sent"
                : "Set a new password"}
            </h2>
            <h5>
              {!codeSent
                ? "Don't worry"
                : !codeConfirmed
                ? "Please check your mail"
                : "Login again"}
            </h5>
          </div>
          {!codeSent ? (
            <div className="cont">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="input"
                type="email"
                id="email"
                onChange={(event) => {}}
              />
              <button className="btn" onClick={sendCode} type="button">
                Send verification code
              </button>
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
          ) : !codeConfirmed ? (
            <div className="cont">
              <label htmlFor="code" className="label">
                Verification Code
              </label>
              <input
                id="code"
                type="number"
                className="input"
                placeholder="######"
                onInput={(e) => (e.target.value = e.target.value.slice(0, 6))}
              />
              <button className="btn" type="button" onClick={confirm}>
                Confirm
              </button>
            </div>
          ) : (
            <>
              <div className="cont">
                <label htmlFor="password" className="label">
                  New Password
                </label>
                <input
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="input"
                />
              </div>
              <div className="cont">
                <label htmlFor="confirmPw" className="label">
                  Confirm Password
                </label>
                <input
                  id="confirmPw"
                  onChange={(e) => {
                    setConfPassword(e.target.value);
                  }}
                  type="password"
                  className="input"
                />
              </div>
              <button
                type="button"
                className="btn chngpw"
                onClick={chngPassword}
              >
                Change Password
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default ForgotPw;
