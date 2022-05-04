import React, { useEffect, useState } from "react";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProfileSec2({ name }) {
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    //get info from backend
  }, []);
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [inp3, setInp3] = useState({});
  const [inp4, setInp4] = useState({});
  const [inp5, setInp5] = useState("");
  function handleChanges() {}
  function depLabel(lb1, lb2, lb3) {
    return name === "education" ? lb1 : name === "project" ? lb2 : lb3;
  }
  return (
    <div className={`${name} sec`}>
      <div className="top">
        <h2>{name}</h2>
        <button
          className="btn"
          onClick={() => {
            if (editing) {
              handleChanges();
            }
            setEditing(!editing);
          }}
        >
          {editing ? "Save" : "Add"}
        </button>
      </div>
      {editing ? (
        <form>
          <label className="label">
            {depLabel("Type", "Name", "Position")}
          </label>
          <input type="text" className="input" />
          <label className="label">{depLabel("Name", "Link", "Company")}</label>
          <input type="text" className="input" />
          <label className="label">Start</label>
          <input type="date" className="input" />
          <label className="label">End</label>
          <input type="date" className="input" />
          <label className="label">Description</label>
          <textarea className="input"></textarea>
        </form>
      ) : (
        <ul className="content">
          <li>
            <div className="period">
              <h3>University</h3>
              <span className="control">
                <span
                  onClick={() => {
                    setEditing(true);
                    //fill inputs with education data
                  }}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </span>
                <span
                  onClick={() => {
                    /*remove*/
                  }}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </span>
            </div>
            <h4>University name</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
              sapiente repellendus quidem aliquam et cupiditate itaque corporis
              autem?
            </p>
          </li>
        </ul>
      )}
    </div>
  );
}
export default ProfileSec2;
