import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo.png";
import "./login.css";
import SignUp from "./SignUp";

function Login() {
  const [signUp, setSignUp ] = useState(false);
  const navigate = useNavigate("");
  return (
    <div className="login">
      <nav>
        <div className="container">
          <button className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
            Khedma
          </button>
        </div>
      </nav>
      {!signUp ? (
        <form>
          <div className="container">
            <div className="title">
              <h2>Login to your account</h2>
              <h5>see what's going on</h5>
            </div>
            <div className="cont">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input className="input" type="email" id="email" />
            </div>
            <div className="cont">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input className="input" type="password" id="password" />
            </div>
            <button className="btn">Login</button>
            <p>New to Khedma ?</p>
            <button
              type="button"
              className="btn"
              onClick={() => setSignUp(true)}
            >
              SignUp
            </button>
          </div>
        </form>
      ) : (
        <SignUp />
      )}
    </div>
  );
}

export default Login;
