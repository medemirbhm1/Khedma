import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import logo from "./img/logo.png";
import Result from "./Result";
function Home() {
  const [search, setSearch] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="home">
      <nav>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
            Khedma
          </div>
          <div className="buttons">
            <button
              className="btn"
              onClick={() => {
                navigate("/PostAJob");
              }}
            >
              Post a job
            </button>
            <button
              className="btn"
              onClick={() => {
                navigate("/Profile");
              }}
            >
              Your profile
            </button>
          </div>
        </div>
      </nav>
      <div className="search">
        <div className="container">
          <form>
            <div className="cont">
              <label htmlFor="titl">What</label>
              <input
                id="titl"
                type="text"
                placeholder="Job title"
                className="input"
              />
            </div>
            <div className="cont">
              <label htmlFor="loc">Where</label>
              <input type="text" placeholder="Location" className="input" />
            </div>
          </form>
          <button
            className="btn"
            type="button"
            onClick={() => {
              setSearch(true);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {search ? <Result /> : ""}
    </div>
  );
}

export default Home;
