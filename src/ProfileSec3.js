import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import RatingSet from "./RatingSet";
function ProfileSec3({ name, type }) {
  const [editing, setEditing] = useState(false);
    const [rating, setRating] = useState(5);
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
          {editing ? "Save" : "Add"}
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
          {type === "withRating" ? (
            <RatingSet rating={rating} setRating={setRating} />
          ) : (
            <input type="url" className="input" />
          )}
        </form>
      ) : (
        <ul className="list">
          <li>
            {type === "withRating" ? (
              <>
                <span>- HTML/css</span>
                <RatingSet rating={rating}/>
              </>
            ) : (
              <>
                <a href="somwhere" target="_blank">
                  - Link
                </a>
              </>
            )}
            <span
              className="edit"
              onClick={() => {
                setEditing(true);
              }}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </span>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileSec3;
