import React from "react";
import idImg from "./img/image 296.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
function Profile() {
  return (
    <div className="profile">
      <div className="container">
        <div className="white">
          <div className="card">
            <div className="avatar">
              <img src={idImg} alt="" />
            </div>
            <div className="text">
              <h2>
                Houcem <span>Mansour</span>
              </h2>
              <div className="job">Full stack web dev &#38; UI/UX Designer</div>
              <ul className="infos">
                <li>
                  <FontAwesomeIcon icon={faPhoneSquare} />
                  <span>+213552411532</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>h.mansour@esi-sba.dz</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>Msila, Algeria</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
