import React from "react";
import idImg from "./img/267513079_1346936529074555_5231013764367827969_n 3.png";
import ellipse from "./img/Ellipse 22.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBriefcase,
  faGraduationCap,
  faHeart,
  faLanguage,
  faLaptopCode,
  faLocationDot,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import stary from "./img/Star 1.svg";
import starg from "./img/Star 5.svg";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./portfolio.css";
import { useNavigate } from "react-router-dom";
function Portfolio() {
  const navigate = useNavigate();
  return (
    <div className="portfolio">
      <div className="container">
        <span className="goHome" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <div className="white">
          <div className="card">
            <div className="avatar">
              <img src={idImg} alt="" />
              <img src={ellipse} alt="" />
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
          <div className="edu section">
            <div className="head">
              <span>
                <FontAwesomeIcon icon={faGraduationCap} />
              </span>
              <h3>Education</h3>
            </div>
            <ul>
              <li>
                <div className="info">
                  <h4>Full stack web development</h4>
                  <h5>Private school</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore in provident nemo minus? Aspernatur nobis doloribus,
                    eaque rem fugiat deleniti.
                  </p>
                </div>
                <span className="period">08/2021-Present</span>
              </li>
              <li>
                <div className="info">
                  <h4>Full stack web development</h4>
                  <h5>Private school</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore in provident nemo minus? Aspernatur nobis doloribus,
                    eaque rem fugiat deleniti.
                  </p>
                </div>
                <span className="period">08/2021-Present</span>
              </li>
            </ul>
          </div>
          <div className="projects section">
            <div className="head">
              <span>
                <FontAwesomeIcon icon={faLaptopCode} />
              </span>
              <h3>Projects</h3>
            </div>
            <ul>
              <li>
                <div className="info">
                  <h4>Website</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores veniam provident sunt corporis! Deserunt
                    recusandae consectetur error tenetur tempore necessitatibus
                    optio? Quasi necessitatibus rerum rem pariatur recusandae
                    molestias quas laudantium!
                  </p>
                </div>
                <span className="period">08/2021-Present</span>
              </li>
            </ul>
          </div>
          <div className="work section">
            <div className="head">
              <span>
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
              <h3>Work experience</h3>
            </div>
            <ul>
              <li>
                <div className="info">
                  <h4>Senior web developer</h4>
                  <h5>esi-sba</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores veniam provident sunt corporis! Deserunt
                    recusandae consectetur error tenetur tempore necessitatibus
                    optio? Quasi necessitatibus rerum rem pariatur recusandae
                    molestias quas laudantium!
                  </p>
                </div>
                <span className="period">08/2021-Present</span>
              </li>
            </ul>
          </div>
          <div className="hobb section">
            <div className="head">
              <span>
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <h3>Hobbies and interests</h3>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              perspiciatis quod distinctio earum voluptates velit dolore
              sapiente impedit iste alias.
            </p>
          </div>
          <div className="lang section">
            <div className="head">
              <span>
                <FontAwesomeIcon icon={faLanguage} />
              </span>
              <h3>Langauges</h3>
            </div>
            <ul className="lg">
              <li>Arabic</li>
              <li>English</li>
            </ul>
          </div>
        </div>
        <div className="blue">
          <div className="about section">
            <h4>About</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuriesdummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries.
            </p>
          </div>
          <div className="skills section">
            <h4>Skills</h4>
            <ul>
              <li>
                <span>HTML</span>
                <span className="rating">
                  <img src={stary} alt="" />
                  <img src={stary} alt="" />
                  <img src={stary} alt="" />
                  <img src={stary} alt="" />
                  <img src={starg} alt="" />
                </span>
              </li>
              <li>
                <span>CSS</span>
                <span className="rating">
                  <img src={stary} alt="" />
                  <img src={stary} alt="" />
                  <img src={stary} alt="" />
                  <img src={stary} alt="" />
                  <img src={starg} alt="" />
                </span>
              </li>
              <li>
                <span>JS</span>
                <span className="rating">
                  <img src={stary} alt="" />
                  <img src={stary} alt="" />
                  <img src={stary} alt="" />
                  <img src={stary} alt="" />
                  <img src={starg} alt="" />
                </span>
              </li>
            </ul>
          </div>
          <div className="docs section">
            <h4>Docs</h4>
            <ul>
              <li>CV</li>
              <li>BAC Certificate</li>
            </ul>
          </div>
          <div className="find section">
            <h4>Find me</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faFacebook} />
                facebook.com/MansourHoucem
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
                twitter.com/MansourHoucem
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
