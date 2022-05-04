import React, { useRef } from "react";
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
import profImg from "./img/image 296.png";
import { auth } from "./firebase";
function Nav() {
  const navigate = useNavigate();
  const menuRef = useRef();
  return (
    <nav>
      <div className="container">
        <div className="logo">
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
            <img src={profImg} alt="" />
            <span>Houssem28</span>
          </button>
          <button
            className="chat btn"
            onClick={() => {
              navigate("/chat");
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
