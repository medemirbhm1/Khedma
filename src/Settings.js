import React, { useState } from "react";
import Nav from "./Nav";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import img from "./img/business-3d-seated-businessman-in-black-suit-with-laptop.png";
import "./settings.css";
function Settings() {
  let user = useSelector(selectUser);
  console.log(user);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    //send modifications to backend
  }
  return (
    <div className="settings gradient-bg">
      <Nav />
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="left">
            <h2>Settings</h2>
            <div className="cont">
              <label className="label">First name</label>
              <input type="text" className="input" />
            </div>
            <div className="cont">
              <label className="label">Last name</label>
              <input type="text" className="input" />
            </div>
            <div className="cont mrg">
              <label className="label">Phone</label>
              <PhoneInput country={"dz"} value={""} onChange={""} />
            </div>
            <div className="cont">
              <label className="label">Country</label>
              <CountryDropdown
                className="input"
                value={country}
                onChange={(val) => setCountry(val)}
              />
            </div>
            <div className="cont">
              <label className="label">City</label>
              <RegionDropdown
                className="input"
                country={country}
                value={region}
                onChange={(val) => setRegion(val)}
              />
            </div>
            <div className="cont">
              <label className="label">Current Password</label>
              <input type="password" className="input" />
            </div>
            <div className="cont">
              <label className="label">New Password</label>
              <input type="password" className="input" />
            </div>
            <button className="btn">Delete account</button>
            <button className="btn">Save changes</button>
          </div>
          <img src={img} alt="" />
        </div>
      </form>
    </div>
  );
}

export default Settings;
