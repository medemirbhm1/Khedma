import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { database, storage } from "./firebase";

function Person({ user }) {
  const [about, setAbout] = useState("");
  const [imgLink, setImgLink] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const docRef = doc(database, "portfolios", user.id);
    getDoc(docRef).then((doc) => {
      setAbout(doc.data().about);
    });
    const imgRef = ref(storage, "images/" + user.id);
    getDownloadURL(imgRef)
      .then((r) => {
        setImgLink(r);
      })
      .catch(() =>
        setImgLink(
          "https://i1.wp.com/www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg?fit=1100%2C1100&ssl=1"
        )
      );
  });
  return (
    <div className="person" key={user.id}>
      <div className="sqr"></div>
      <div className="content">
        <div className="cont">
          <div className="text">
            <div className="name">{user.firstname + " " + user.lastname}</div>
            <div className="jtitle">{user.job.join(" ")}</div>
            <div className="location">{user.country + " " + user.city}</div>
          </div>
          <img
            className="avatar"
            src={imgLink}
            onClick={() => {
              if (user.isComp) {
                navigate("/Company/" + user.id);
              } else {
                navigate("/Portfolio/" + user.id);
              }
            }}
            alt=""
          />
        </div>
        <div className="description">{about}</div>
        <div className="btn-cont">
          <button className="btn">
            <a href={"mailto: " + user.Email}>Contact</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Person;
