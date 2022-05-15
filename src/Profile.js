import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./profile.css";
import img from "./img/267513079_1346936529074555_5231013764367827969_n 3.png";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import DropCont from "./DropCont";
function Profile() {
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <div className="profile">
        <div className="container">
          <div className="head sec">
            <div className="image">
              <img src={img} alt="" />
              <span className="edit">
                <FontAwesomeIcon icon={faCamera} />
              </span>
            </div>
            <div className="text">
              <h2>Houcem Mansour</h2>
              <h3>Full Stack Web Developer / UX Designer</h3>
              <div className="btns">
                <button
                  type="button"
                  className="btn white"
                  onClick={() => {
                    navigate("/portfolio");
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
          <DropCont name="Portfolio Content"/>
          <DropCont name="Posted jobs"/>
        </div>
      </div>
    </>
  );
}

export default Profile;
