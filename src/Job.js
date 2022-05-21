import {
  faDollarSign,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { database } from "./firebase";
function Job({ id, title, work, workplace, description, minpay, maxpay }) {
  const [editing, setEditing] = useState(false);
  const [first, setFirst] = useState(title);
  const [second, setSecond] = useState(work);
  const [third, setThird] = useState(workplace);
  const [fourth, setFourth] = useState(minpay);
  const [fifth, setFifth] = useState(maxpay);
  const [sixth, setSixth] = useState(description);
  function handleChanges(e) {
    e.preventDefault();
    const docRef = doc(database, "jobs", id);
    if (first && fourth && fifth) {
      updateDoc(docRef, {
        title: first.split(" "),
        work: second,
        workplace: third,
        minPay: fourth,
        maxPay: fifth,
        description: sixth,
      });
      setEditing(false);
    } else {
      alert("Please fill in all the inputs");
    }
  }
  function deleteJob() {
    const docRef = doc(database, "jobs", id);
    deleteDoc(docRef).then(() => window.location.reload(false));
  }
  return (
    <div className="job">
      {editing ? (
        <form onSubmit={handleChanges}>
          <label className="label">Job title</label>
          <input
            type="text"
            className="input"
            value={first}
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />
          <div className="holder">
            <label className="label">
              Which option best describes this role's location?
            </label>
            <div>
              <input
                type="radio"
                name="location"
                value="One location"
                onChange={(e) => setSecond(e.target.value)}
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
                onChange={(e) => setSecond(e.target.value)}
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
                onChange={(e) => setSecond(e.target.value)}
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
                onChange={(e) => setSecond(e.target.value)}
              />
              <label>
                On the road
                <br />
                <span>Job requires regular travel.</span>
              </label>
            </div>
          </div>
          <div className="holder">
            <label className="label">Is this a full-time or ... ?</label>
            <div>
              <input
                type="radio"
                name="work"
                value="Full time"
                onChange={(e) => setThird(e.target.value)}
                defaultChecked
              />
              <label>Full time</label>
            </div>
            <div>
              <input
                type="radio"
                name="work"
                value="Part-time"
                onChange={(e) => setThird(e.target.value)}
              />
              <label>Part-time</label>
            </div>
            <div>
              <input
                type="radio"
                name="work"
                value="Freelance"
                onChange={(e) => setThird(e.target.value)}
              />
              <label>Freelance</label>
            </div>
          </div>
          <div className="holder">
            <label className="label">How much is the pay ?</label>
            <div>
              <label>Min</label>
              <input
                className="input"
                type="number"
                value={fourth}
                onChange={(e) => {
                  if (e.target.value.length > 6) {
                    e.target.value = e.target.value.slice(0, 6);
                  }
                  const currVal = parseInt(e.target.value);
                  setFourth(currVal);
                  if (currVal > fifth) {
                    setFifth(currVal + 1);
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
                value={fifth}
                onChange={(e) => {
                  if (e.target.value.length > 6) {
                    e.target.value = e.target.value.slice(0, 6);
                  }
                  const currVal = parseInt(e.target.value);
                  setFifth(currVal);
                  if (currVal < fourth) {
                    setFourth(currVal - 1);
                  }
                }}
              />
              <span className="icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </span>
            </div>
            <label className="label">Description</label>
            <textarea
              className="input"
              value={sixth}
              onChange={(e) => setSixth(e.target.value)}
            ></textarea>
          </div>
          <button className="btn white">Save changes</button>
        </form>
      ) : (
        <>
          <div className="top">
            <h3>{title}</h3>
            <div className="icons">
              <span
                onClick={() => {
                  setEditing(true);
                }}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </span>
              <span onClick={deleteJob}>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
          </div>
          <div className="features">
            <span>{workplace}</span>
            <span>{work}</span>
            <span>{minpay + " - " + maxpay + " $"}</span>
          </div>
          <p>{description}</p>
        </>
      )}
    </div>
  );
}
export default Job;
