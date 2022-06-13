import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./postJob.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { database } from "./firebase";
import { setDoc,doc } from "firebase/firestore";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

import illu from "./img/undraw_people_search_re_5rre.svg";
import Nav from "./Nav";
function PostJob() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [workplace, setWorkplace] = useState("One location");
  const [work, setWork] = useState("Full time");
  const [minPay, setMinPay] = useState(0);
  const [maxPay, setMaxPay] = useState(0);
  const [completedFirst, setCompletedFirst] = useState(false);
  const [desc, setDesc] = useState("");
  function makeid (length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  function completeFirst() {
    if (title && (minPay || maxPay)) {
      setCompletedFirst(true);
    } else {
      alert("please fill in all the inputs.");
    }
  }
  function submitJob() {
    if (desc) {
      const id = makeid(20)
      setDoc(doc(database, "jobs", id),{
        docId: id,
        email: user.email,
        userId: user.id,
        title: title.split(" "),
        country: user.country,
        city: user.city,
        workplace: workplace,
        work: work,
        minPay: minPay,
        maxPay: maxPay,
        description: desc,
        date: new Date().toLocaleDateString(),
      }).then((e) => {
        navigate("/");
      });
    }
  }
  return (
    <div className="postJob gradient-bg">
      <Nav />
      <form>
        <div className="container">
          {!completedFirst ? (
            <div className="text">
              <h2>Post a job</h2>
              <div className="cont">
                <label className="label" htmlFor="first">
                  Job title
                </label>
                <input
                  id="first"
                  type="text"
                  className="input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="cont">
                <label className="label">
                  Which option best describes this role's location?
                </label>
                <div>
                  <input
                    type="radio"
                    name="workplace"
                    value="One location"
                    onChange={(e) => setWorkplace(e.target.value)}
                    defaultChecked
                  />
                  <label>
                    One location <br />
                    <span>Job is performed at a specific address.</span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="location"
                    value="Multiple locations"
                    onChange={(e) => setWorkplace(e.target.value)}
                  />
                  <label>
                    Multiple locations <br />
                    <span>Job may be performed at multiple sites.</span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="location"
                    value="Remote"
                    onChange={(e) => setWorkplace(e.target.value)}
                  />
                  <label>
                    Remote
                    <br />
                    <span>
                      Job is performed remotely. No on-site work is required.
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="location"
                    value="On the road"
                    onChange={(e) => setWorkplace(e.target.value)}
                  />
                  <label>
                    On the road
                    <br />
                    <span>Job requires regular travel.</span>
                  </label>
                </div>
              </div>
              <div className="cont">
                <label className="label">Is this a full-time or ... ?</label>
                <div>
                  <input
                    type="radio"
                    name="work"
                    value="Full time"
                    onChange={(e) => setWork(e.target.value)}
                    defaultChecked
                  />
                  <label>Full time</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="work"
                    value="Part-time"
                    onChange={(e) => setWork(e.target.value)}
                  />
                  <label>Part-time</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="work"
                    value="Freelance"
                    onChange={(e) => setWork(e.target.value)}
                  />
                  <label>Freelance</label>
                </div>
              </div>
              <div className="cont">
                <label className="label">How much is the pay ?</label>
                <div>
                  <label>Min</label>
                  <input
                    className="input"
                    type="number"
                    value={minPay}
                    onChange={(e) => {
                      if (e.target.value.length > 6) {
                        e.target.value = e.target.value.slice(0, 6);
                      }
                      const currVal = parseInt(e.target.value);
                      setMinPay(currVal);
                      if (currVal > maxPay) {
                        setMaxPay(currVal + 1);
                      }
                    }}
                  />
                  <span className="icon">
                    <FontAwesomeIcon icon={faDollarSign} />
                  </span>
                </div>
                <div>
                  <label>Max</label>
                  <input
                    className="input"
                    type="number"
                    value={maxPay}
                    onChange={(e) => {
                      if (e.target.value.length > 6) {
                        e.target.value = e.target.value.slice(0, 6);
                      }
                      const currVal = parseInt(e.target.value);
                      setMaxPay(currVal);
                      if (currVal < minPay) {
                        setMinPay(currVal - 1);
                      }
                    }}
                  />
                  <span className="icon">
                    <FontAwesomeIcon icon={faDollarSign} />
                  </span>
                </div>
              </div>
              <button className="btn" type="button" onClick={completeFirst}>
                Next
              </button>
            </div>
          ) : (
            <div className="text second">
              <h2>Post a job</h2>
              <div className="cont">
                <label className="label">Description</label>
                <textarea
                  className="input"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="bt-cont">
                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    setCompletedFirst(false);
                  }}
                >
                  Back
                </button>
                <button className="btn" type="button" onClick={submitJob}>
                  Submit
                </button>
              </div>
            </div>
          )}
          <img src={illu} alt="" />
        </div>
      </form>
    </div>
  );
}

export default PostJob;
