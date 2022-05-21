import { useState } from "react";
function ProfileSec1({name,data,setData}) {
  const [editingText, setEditingText] = useState("");
  function handleChanges() {}
  return (
    <div className={`${name} sec`}>
      <div className="top">
        <h2>{name}</h2>
        <button
          className="btn"
          onClick={() => {
            if (editingText) handleChanges();
            setEditingText(!editingText);
          }}
        >
          {editingText ? "save" : data ? "Edit" : "Add"}
        </button>
      </div>
      <div className="content">
        {editingText ? (
          <textarea
            className="input"
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
          ></textarea>
        ) : data ? (
          <p>{data}</p>
        ) : (
          "No information added"
        )}
      </div>
    </div>
  );
}
export default ProfileSec1;
