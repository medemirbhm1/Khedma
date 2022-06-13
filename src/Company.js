import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faLocationDot,
  faMoneyBill1Wave,
  faPhoneSquare,
  faUsers,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faStar } from "@fortawesome/free-regular-svg-icons";
import "./Company.css";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database, storage } from "./firebase";
import { getDownloadURL, ref } from "firebase/storage";
function Company() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [comp, setComp] = useState(null);
  const [imgLink, setImgLink] = useState("");
  const params = useParams();
  useEffect(() => {
    const companyRef = doc(database, "companies", params.id);
    const userRef = doc(database, "users", params.id);
    const imgRef = ref(storage, "images/" + params.id);
    getDoc(userRef).then((r) => setUser(r.data()));
    getDoc(companyRef).then((r) => setComp(r.data()));
    getDownloadURL(imgRef)
      .then((r) => {
        setImgLink(r);
      })
      .catch(() => {
        if (!user?.isComp) {
          setImgLink(
            "https://icons-for-free.com/download-icon-default+home+house+main+page+icon-1320186211000235547_512.png"
          );
        } else {
          setImgLink(
            "https://i1.wp.com/www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg?fit=1100%2C1100&ssl=1"
          );
        }
      });
  }, []);
  return (
    <div className="company gradient-bg">
      {user && comp ? (
        <div className="container">
          <div className="head">
            <img src={imgLink} alt="" />
            <div className="text">
              <h1>{user.companyname}</h1>
              <ul className="infos">
                {user.phone && (
                  <li>
                    <FontAwesomeIcon icon={faPhoneSquare} />
                    <span>{user.phone}</span>
                  </li>
                )}
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>{user.Email}</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{user.country + ", " + user.city}</span>
                </li>
              </ul>
            </div>
            <button className="return" onClick={()=>navigate("/")}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>
          <div className="about">
            <h2>About the company</h2>
            <p>{comp.about}</p>
          </div>
          <div className="infos">
            <div className="card">
              <span className="icon">
                <FontAwesomeIcon icon={faUserTie} />
              </span>
              <span>CEO</span>
              <span>{comp.ceo}</span>
            </div>
            <div className="card">
              <span className="icon">
                <FontAwesomeIcon icon={faUsers} />
              </span>
              <span>Size</span>
              <span>{comp.size}</span>
            </div>
            <div className="card">
              <span className="icon">
                <FontAwesomeIcon icon={faMoneyBill1Wave} />
              </span>
              <span>Revenue</span>
              <span>{comp.revenue}</span>
            </div>
            <div className="card">
              <span className="icon">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>Field</span>
              <span>{comp.field}</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Company;
