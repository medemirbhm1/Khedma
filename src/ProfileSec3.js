import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import RatingSet from "./RatingSet";
function ProfileSec3({ name, type, data, setData }) {
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [editingIdx, setEditingIdx] = useState(0);
  function handleChanges() {
    if (adding) {
      setData((d) => [...d, { first: inp1, second: inp2 }]);
    } else if (editing) {
      setData((d) => [
        ...d.slice(0, editingIdx),
        { first: inp1, second: inp2 },
        ...d.slice(editingIdx + 1),
      ]);
    }
  }
  function removeAt(i) {
    setData((d) => [...d.slice(0, i), ...d.slice(i + 1)]);
  }
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
            if (editing || adding) {
              if (inp1 && inp2) {
                handleChanges();
                setAdding(false);
                setEditing(false);
              } else {
                alert("Please fill in all the inputs");
              }
            } else {
              setInp1("");
              setInp2("");
              setAdding(true);
            }
          }}
        >
          {editing ? "Save" : "Add"}
        </button>
      </div>
      {adding || editing ? (
        <form>
          <label className="label">
            {depLabel("skill", "Name", "Name", "Username")}
          </label>
          <input
            type="text"
            className="input"
            value={inp1}
            onChange={(e) => {
              setInp1(e.target.value);
            }}
          />
          <label className="label">
            {depLabel("Rating", "Link", "Rating", "Link")}
          </label>
          {type === "withRating" ? (
            <RatingSet rating={inp2} setRating={setInp2} />
          ) : (
            <input
              type="url"
              className="input"
              value={inp2}
              onChange={(e) => setInp2(e.target.value)}
            />
          )}
        </form>
      ) : (
        <ul className="list">
          {data
            ? data.map((d, i) => (
                <li key={d.first}>
                  {type === "withRating" ? (
                    <>
                      <span>- {d.first}</span>
                      <RatingSet rating={d.second} />
                    </>
                  ) : (
                    <>
                      <a href={d.second} target="_blank">
                        - {d.first}
                      </a>
                    </>
                  )}
                  <span
                    className="edit"
                    onClick={() => {
                      setEditing(true);
                      setEditingIdx(i);
                      setInp1(d.first);
                      setInp2(d.second);
                    }}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </span>
                  <span
                    onClick={() => {
                      removeAt(i);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </li>
              ))
            : null}
        </ul>
      )}
    </div>
  );
}

export default ProfileSec3;
