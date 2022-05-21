import React, { useState } from "react";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProfileSec2({ name, data, setData }) {
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const [editingIdx, setEditingIdx] = useState(0);
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [inp3, setInp3] = useState("");
  const [inp4, setInp4] = useState("");
  const [inp5, setInp5] = useState("");
  function handleChanges() {
    if (adding) {
      setData((d) => [
        ...d,
        { first: inp1, second: inp2, third: inp3, fourth: inp4, fifth: inp5 },
      ]);
    } else if (editing) {
      setData((d) => [
        ...d.slice(0, editingIdx),
        { first: inp1, second: inp2, third: inp3, fourth: inp4, fifth: inp5 },
        ...d.slice(editingIdx + 1),
      ]);
    }
  }
  function removeAt(i) {
    setData((d) => [...d.slice(0, i), ...d.slice(i + 1)]);
  }
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
            if (editing || adding) {
              if (inp1 && inp2 && inp3 && inp4 && inp5) {
                handleChanges();
                setAdding(false);
                setEditing(false);
              } else {
                alert("Please fill in all the inputs");
              }
            } else {
              setInp1("");
              setInp2("");
              setInp3("");
              setInp4("");
              setInp5("");
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
            {depLabel("Type", "Name", "Position")}
          </label>
          <input
            type="text"
            className="input"
            value={inp1}
            onChange={(e) => setInp1(e.target.value)}
          />
          <label className="label">{depLabel("Name", "Link", "Company")}</label>
          <input
            type="text"
            className="input"
            value={inp2}
            onChange={(e) => setInp2(e.target.value)}
          />
          <label className="label">Start</label>
          <input
            type="date"
            className="input"
            value={inp3}
            onChange={(e) => setInp3(e.target.value)}
          />
          <label className="label">End</label>
          <input
            type="date"
            className="input"
            value={inp4}
            onChange={(e) => setInp4(e.target.value)}
          />
          <label className="label">Description</label>
          <textarea
            className="input"
            value={inp5}
            onChange={(e) => setInp5(e.target.value)}
          ></textarea>
        </form>
      ) : (
        <ul className="content">
          {data
            ? data.map((d, i) => (
                <li key={d.second}>
                  <div className="period">
                    <h3>{d.first}</h3>
                    <span className="control">
                      <span
                        onClick={() => {
                          setEditing(true);
                          setInp1(d.first);
                          setInp2(d.second);
                          setInp3(d.third);
                          setInp4(d.fourth);
                          setInp5(d.fifth);
                          setEditingIdx(i);
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
                    </span>
                  </div>
                  <h4>{d.second}</h4>
                  <p>{d.fifth}</p>
                </li>
              ))
            : null}
        </ul>
      )}
    </div>
  );
}
export default ProfileSec2;
