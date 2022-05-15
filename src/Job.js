import {
  faDollarSign,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function Job() {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("One location");
  const [work, setWork] = useState("Full time");
  const [minPay, setMinPay] = useState(0);
  const [maxPay, setMaxPay] = useState(0);
  function handleChanges(e) {
    e.preventDefault();
    setEditing(false);
    // send changes to backend
  }
  return (
    <div className="job">
      {editing ? (
        <form onSubmit={handleChanges}>
          <label className="label">Job title</label>
          <input
            type="text"
            className="input"
            onChange={(e) => {
              setTitle(e.target.value);
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
                onChange={(e) => setLocation(e.target.value)}
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
                onChange={(e) => setLocation(e.target.value)}
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
                onChange={(e) => setLocation(e.target.value)}
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
                onChange={(e) => setLocation(e.target.value)}
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
          <div className="holder">
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
          <div className="holder">
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
          <button className="btn white">Save changes</button>
        </form>
      ) : (
        <>
          <div className="top">
            <h3>Job title</h3>
            <div className="icons">
              <span
                onClick={() => {
                  setEditing(true);
                }}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </span>
              <span>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
          </div>
          <div className="features">
            <span>Location</span>
            <span>Time</span>
            <span>Pay</span>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            nesciunt impedit molestiae veniam eaque doloremque, ipsa architecto
            ratione. Voluptates minus quas libero dolor magni fugiat?
          </p>
        </>
      )}
    </div>
  );
}
export default Job;
