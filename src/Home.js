import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Result from "./Result";
import Nav from "./Nav";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { collection, query, where, getDocs } from "firebase/firestore";
import { database } from "./firebase";
function Home() {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [search, setSearch] = useState(false);
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  async function handleSearch(e) {
    const usersRef = collection(database, "users");
    const jobsRef = collection(database, "jobs");
    let uq, jq;
    if (country && city) {
      uq = query(
        usersRef,
        where("job", "array-contains-any", title.split(" ")),
        where("country", "==", country),
        where("city", "==", city)
      );
      jq = query(
        jobsRef,
        where("title", "array-contains-any", title.split(" ")),
        where("country", "==", country),
        where("city", "==", city)
      );
    } else if (country) {
      uq = query(
        usersRef,
        where("job", "array-contains-any", title.split(" ")),
        where("country", "==", country)
      );
      jq = query(
        jobsRef,
        where("title", "array-contains-any", title.split(" ")),
        where("country", "==", country)
      );
    } else {
      uq = query(
        usersRef,
        where("job", "array-contains-any", title.split(" "))
      );
      jq = query(
        jobsRef,
        where("title", "array-contains-any", title.split(" "))
      );
    }
    const uQuerySnapshot = await getDocs(uq);
    const jQuerySnapshot = await getDocs(jq);

    uQuerySnapshot.docs.forEach((doc) => {
      setUsers((u) => [...u, doc.data()]);
    });
    jQuerySnapshot.docs.forEach((doc) => {
      setJobs((j) => [...j, doc.data()]);
    });
    setSearch(true);
  }
  return (
    <div className="home">
      <Nav />
      <div className="search">
        <div className="container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="cont">
              <label htmlFor="titl">What</label>
              <input
                id="titl"
                type="text"
                placeholder="Job title"
                className="input"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div class="break"></div>
            <CountryDropdown
              className="input"
              value={country}
              onChange={(val) => {
                setCity("");
                setCountry(val);
              }}
            />
            <RegionDropdown
              className="input"
              country={country}
              value={city}
              onChange={(val) => setCity(val)}
            />
          </form>
          <button
            className="btn"
            type="button"
            onClick={() => {
              setUsers([]);
              setJobs([]);
              handleSearch();
            }}
          >
            Search
          </button>
        </div>
      </div>
      {search && <Result users={users} jobs={jobs} />}
    </div>
  );
}

export default Home;
