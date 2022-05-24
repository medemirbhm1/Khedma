import React, { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import RatingSet from "./RatingSet";
import { doc, getDoc } from "firebase/firestore";
import { database, storage } from "./firebase";
import { getDownloadURL, ref } from "firebase/storage";
function Portfolio() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [portfolio, setPortfolio] = useState(null);
  const [imgLink, setImgLink] = useState("");
  const params = useParams();
  useEffect(() => {
    const portfolioRef = doc(database, "portfolios", params.id);
    const userRef = doc(database, "users", params.id);
    getDoc(userRef).then((r) => setUser(r.data()));
    getDoc(portfolioRef).then((r) => setPortfolio(r.data()));
    const imgRef = ref(storage, "images/" + params.id);
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
  return user && portfolio ? (
    <div className="portfolio">
      <div className="container">
        <span className="goHome" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <div className="white">
          <div className="card">
            <div className="avatar">
              <img src={imgLink} alt="" />
              <img src={ellipse} alt="" />
            </div>
            <div className="text">
              <h2>
                {user.firstname} <span>{user.lastname}</span>
              </h2>
              <div className="job">{user.job.join(" ")}</div>
              <ul className="infos">
                <li>
                  <FontAwesomeIcon icon={faPhoneSquare} />
                  <span>+213552411532</span>
                </li>
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
          </div>
          <div className="edu section">
            <div className="head">
              <span>
                <FontAwesomeIcon icon={faGraduationCap} />
              </span>
              <h3>Education</h3>
            </div>
            <ul>
              {portfolio.education.map((q) => (
                <li className="info" key={q.fourth}>
                  <div className="info">
                    <h4>{q.first}</h4>
                    <h5>{q.second}</h5>
                    <p>{q.fifth}</p>
                  </div>
                  <span className="period">
                    {q.third + " -"} <br />
                    {q.fourth}
                  </span>
                </li>
              ))}
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
              {portfolio.projects.map((q) => (
                <li className="info" key={q.fourth}>
                  <div className="info">
                    <h4>{q.first}</h4>
                    <h5>{q.second}</h5>
                    <p>{q.fifth}</p>
                  </div>
                  <span className="period">
                    {q.third + " -"} <br />
                    {q.fourth}
                  </span>
                </li>
              ))}
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
              {portfolio.workExp.map((q) => (
                <li className="info" key={q.fourth}>
                  <div className="info">
                    <h4>{q.first}</h4>
                    <h5>{q.second}</h5>
                    <p>{q.fifth}</p>
                  </div>
                  <span className="period">
                    {q.third + " -"} <br />
                    {q.fourth}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hobb section">
            <div className="head">
              <span>
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <h3>Hobbies and interests</h3>
            </div>
            <p>{portfolio.hobb}</p>
          </div>
          <div className="lang section">
            <div className="head">
              <span>
                <FontAwesomeIcon icon={faLanguage} />
              </span>
              <h3>Langauges</h3>
            </div>
            <ul className="lg">
              {portfolio.languages.map((d) => (
                <li>{d.first}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="blue">
          <div className="about section">
            <h4>About</h4>
            <p>{portfolio.about}</p>
          </div>
          <div className="skills section">
            <h4>Skills</h4>
            <ul>
              {portfolio.skills.map((s) => (
                <li>
                  <span>{s.first}</span>
                  <RatingSet rating={s.second} />
                </li>
              ))}
            </ul>
          </div>
          <div className="docs section">
            <h4>Docs</h4>
            <ul>
              {portfolio.certificates.map((d) => (
                <li>
                  <a href={d.second} target="_blank">{d.first}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="find section">
            <h4>Find me</h4>
            <ul>
              {/* {portfolio.acc.map((d) => (
                <li>
                  <a href={d.second} target="_blank">{d.first}</a>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Portfolio;
