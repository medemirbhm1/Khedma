import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import image from "./img/267513079_1346936529074555_5231013764367827969_n 3.png";
import { useNavigate } from "react-router-dom";
function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="sideBar">
      <div className="owner" onClick={()=>{navigate("/Profile")}}>
        <img src={image} alt="" />
        <span>Houssem28</span>
      </div>
      <span onClick={()=>{navigate("/")}}>
        <FontAwesomeIcon icon={faHome} />
      </span>
    </div>
  );
}

export default SideBar;
