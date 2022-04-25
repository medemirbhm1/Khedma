import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo.png";
import "./forgotPw.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
function ForgotPw() {
  const navigate = useNavigate("/");
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const forgotpass = async () => {
    try {
      setEmailSent(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        requestType: "PASSWORD_RESET",
        email: email,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      var response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyD9KDPcDyMAPzHrK8QO20Ibs2pt3JoybyQ",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log("error", error);
        });

      console.log(email);

      console.log(response);
    } catch (error) {
      alert(" existe pas");
      console.log(error.message);
    }
  };
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
      <form
        onSubmit={(e) => {
          e.preventDefault()
          email ? forgotpass(e): alert("Please type your email");
        }}
      >
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
                <input
                  className="input"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  id="email"
                />
                <button className="btn">Send verification code</button>
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
