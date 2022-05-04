import { useState } from "react";
import stary from "./img/Star 1.svg";
import starg from "./img/Star 5.svg";
function ProfileSec3({ name, type }) {
  const [editing, setEditing] = useState(false);
  function handleChanges() {}
  function depLabel(lb1, lb2, lb3, lb4) {
    return name === "skills"
      ? lb1
      : name === "certificates"
      ? lb2
      : name === "languages"
      ? lb3
      : lb4;
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
          {editing ? "Save" : "Edit"}
        </button>
      </div>
      {editing ? (
        <form>
          <label className="label">
            {depLabel("skill", "Name", "Name", "Username")}
          </label>
          <input type="text" className="input" />
          <label className="label">
            {depLabel("Rating", "Link", "Rating", "Link")}
          </label>
          {type==="withRating"?(<input
            placeholder="0-5"
            type="number"
            onChange={(e) => {
              if (e.target.value > 5) e.target.value = 5;
              else if (e.target.value < 0) e.target.value = 0;
            }}
            className="input"
          />):(
            <input type="url" className="input" />
          )}
          
        </form>
      ) : (
        <ul className="list">
          <li>
            {type === "withRating" ? (
              <>
                <span>- HTML/css</span>
                <span className="rating">
                  <img src={stary} alt="" />
                  <img src={stary} alt="" />
                  <img src={stary} alt="" />
                  <img src={stary} alt="" />
                  <img src={starg} alt="" />
                </span>
              </>
            ) : (
              <a href="somwhere" target="_blank">
                - Link
              </a>
            )}
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileSec3;
