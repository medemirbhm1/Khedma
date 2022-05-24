import { useRef, useState, useEffect } from "react";
import {
  faArrowRightFromBracket,
  faBriefcase,
  faCaretDown,
  faComment,
  faGear,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./nav.css";
import logo from "./img/logo.png";
import { auth, storage } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { getDownloadURL, ref } from "firebase/storage";

function Nav() {
  const navigate = useNavigate();
  const menuRef = useRef();
  const user = useSelector(selectUser);
  const [imgLink, setImgLink] = useState("");
  useEffect(() => {
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
  }, []);
  return (
    <nav>
      <div className="container">
        <div
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="logo" />
          Khedma
        </div>
        <div className="btns">
          <button
            className="prof btn"
            onClick={() => {
              navigate("/Profile");
            }}
          >
            <img src={imgLink} alt="" />
            <span> {user.fName + " " + user.lName}</span>
          </button>
          <button
            className="chat btn"
            onClick={() => {
              navigate("/Chat");
            }}
          >
            <FontAwesomeIcon icon={faComment} />
          </button>
          <button
            className="caret btn"
            onClick={() => {
              menuRef.current.classList.toggle("active");
            }}
          >
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>
        <ul className="menu" ref={menuRef}>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            <span className="icon">
              <FontAwesomeIcon icon={faHome} />
            </span>
            <span>Home</span>
          </li>
          <li
            onClick={() => {
              navigate("/PostAJob");
            }}
          >
            <span className="icon">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            <span>Post a job</span>
          </li>
          <li
            onClick={() => {
              navigate("/Settings");
            }}
          >
            <span className="icon">
              <FontAwesomeIcon icon={faGear} />
            </span>
            <span>Settings</span>
          </li>
          <li
            onClick={() => {
              auth.signOut();
              navigate("/");
            }}
          >
            <span className="icon">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </span>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
