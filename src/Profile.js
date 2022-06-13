import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./profile.css";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import DropCont from "./DropCont";
import { useEffect, useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function Profile() {
  const navigate = useNavigate();
  const [imgLink, setImgLink] = useState("");
  const inpRef = useRef();
  const user = useSelector(selectUser);
  useEffect(() => {
    const imgRef = ref(storage, "images/" + user.id);
    getDownloadURL(imgRef)
      .then((r) => {
        setImgLink(r);
      })
      .catch(() => {
        if (user.isComp) {
          setImgLink(
            "https://icons-for-free.com/download-icon-default+home+house+main+page+icon-1320186211000235547_512.png"
          );
        } else {
          setImgLink(
            "https://i1.wp.com/www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg?fit=1100%2C1100&ssl=1"
          );
        }
      });
  }, []); //eslint-disable-line
  function uploadImg() {
    const imgRef = ref(storage, "images/" + user.id);
    uploadBytes(imgRef, inpRef.current.files[0]);
  }
  return (
    <>
      <Nav />
      <div className="profile">
        <div className="container">
          <div className="head sec">
            <div className="image">
              <img src={imgLink} alt="" />
              <span className="edit">
                <input ref={inpRef} type="file" onChange={uploadImg} />
                <FontAwesomeIcon icon={faCamera} />
              </span>
            </div>
            <div className="text">
              <h2>{user.isComp ? user.name : user.fName + " " + user.lName}</h2>
              <h3>{!user.isComp && user.job.join(" ")}</h3>
              <div className="btns">
                <button
                  type="button"
                  className="btn white"
                  onClick={() => {
                    if (user.isComp) {
                      navigate("/company/" + user.id);
                    } else {
                      navigate("/portfolio/" + user.id);
                    }
                  }}
                >
                  View your portfolio
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    navigate("/settings");
                  }}
                >
                  Settings
                </button>
              </div>
            </div>
          </div>
          <DropCont name="Portfolio Content" />
          <DropCont name="Posted jobs" />
        </div>
      </div>
    </>
  );
}

export default Profile;
