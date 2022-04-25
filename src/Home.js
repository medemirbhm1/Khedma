import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Result from "./Result";
import Nav from "./Nav";
function Home() {
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  function handleSearch() {
    setSearch(true);
  }
  return (
    <div className="home">
      <Nav />
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
          <button className="btn" type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {search && <Result />}
    </div>
  );
}

export default Home;
