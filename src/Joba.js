import { useEffect, useState } from "react";
import { faDollarSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDownloadURL, ref } from "firebase/storage";
import { database, storage } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
function Joba({ job }) {
  const [imgLink, setImgLink] = useState("");
  const [profileLink, setProfileLink] = useState("");
  const navigate = useNavigate("");
  useEffect(() => {
    const docRef = doc(database, "users", job.userId);
    getDoc(docRef).then((doc) => {
      if (doc.data().isComp) {
        setProfileLink("/company/" + job.userId);
      } else {
        setProfileLink("/portfolios/" + job.userId);
      }
    });
    const imgRef = ref(storage, "images/" + job.userId);
    getDownloadURL(imgRef)
      .then((r) => {
        setImgLink(r);
      })
      .catch(() =>
        setImgLink(
          "https://i1.wp.com/www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg?fit=1100%2C1100&ssl=1"
        )
      );
  }, []);
  return (
    <div className="job" key={job.userId}>
      <div className="top">
        <div className="left">
          <div className="title">{job.title.join(" ")}</div>
          <div className="name">{job.country + ", " + job.city}</div>
        </div>
        <img src={imgLink} onClick={() => navigate(profileLink)} alt="" />
      </div>
      <div className="details">
        <div className="det">
          <FontAwesomeIcon icon={faDollarSign} />
          <div className="text">{job.minPay + " - " + job.maxPay}</div>
        </div>
        <div className="det">
          <FontAwesomeIcon icon={faLocationDot} />
          <div className="text">{job.workplace}</div>
        </div>
        <div className="det">
          <FontAwesomeIcon icon={faClockFour} />
          <div className="text">{job.work}</div>
        </div>
      </div>
      <div className="description">{job.description}</div>
      <div className="btn-cont">
        <button className="btn">
          <a href={"mailto: " + job.email}>Contact</a>
        </button>
      </div>
    </div>
  );
}

export default Joba;
