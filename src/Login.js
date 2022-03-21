import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo.png";
import "./login.css";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "./firebase";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      alert("email valide");
      console.log(user);
    } catch (error) {
      alert(" existe pas");
      console.log(error.message);
    }
  };
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
            <input
              className="input"
              type="email"
              id="email"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
          </div>
          <div className="cont">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              type="password"
              id="password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
          </div>
          <button className="btn" onClick={login} type="button">
            Login
          </button>
          <p>New to Khedma ?</p>
          <button
            type="button"
            className="btn"
            onClick={() => navigate("/signup")}
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
