import { useEffect, useState } from "react";
function ProfileSec1({name}) {
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");
  useEffect(()=>{
    //get text from backend
  },[])
  function handleChanges() {}
  return (
    <div className={`${name} sec`}>
      <div className="top">
        <h2>{name}</h2>
        <button
          className="btn"
          onClick={() => {
            if (editText) handleChanges();
            setEditText(!editText);
          }}
        >
          {editText ? "save" : text ? "Edit" : "Add"}
        </button>
      </div>
      <div className="content">
        {editText ? (
          <textarea
            className="input"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        ) : text ? (
          <p>{text}</p>
        ) : (
          "No information added"
        )}
      </div>
    </div>
  );
}
export default ProfileSec1;
