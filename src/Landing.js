import React, { useRef } from "react";
import logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import landImg from "./img/business-3d-recruiter-found-an-employee.png";
import aboutImg from "./img/business-3d-325.png";
import featImg1 from "./img/Icon.svg";
import featImg3 from "./img/Icon (3).svg";
import featImg4 from "./img/Icon (4).svg";
import ourApp1 from "./img/app1.png";
import ourApp2 from "./img/app2.png";
import phoneImg from "./img/mobile muckup.svg";
import "./landing.css";
import { useNavigate } from "react-router-dom";
import ellipse from "./img/Abstrack.png";
import me from "./img/me.jpg";
import adel from "./img/adel.jpg";
import zaki from "./img/zaki.jpg";
import houssem from "./img/houssem.jpg";
import moh from "./img/moh.jpg";
function Landing() {
  const navigate = useNavigate();
  const links = useRef();
  const toggle = useRef();
  function toggleMenu() {
    toggle.current.classList.toggle("active");
    links.current.classList.toggle("active");
  }
  function copyLink() {
    console.log(window.location.href);
    navigator.clipboard.writeText(window.location.href);
    alert("Copied the text: " + window.location.href);
  }
  return (
    <div className="landing">
      <div className="header gradient-bg">
        {/* NAVBAR */}
        <nav>
          <div className="container">
            <div className="logo" onClick={() => navigate("/")}>
              <img src={logo} alt="logo" />
              Khedma
            </div>
            <ul className="links" ref={links}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#feat">Features</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <button className="btn" onClick={() => navigate("/login")}>
                  Login
                </button>
              </li>
            </ul>
            <div className="toggle" onClick={toggleMenu} ref={toggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
        {/* land */}
        <div className="land">
          <div className="container">
            <div className="text">
              <h1>
                Search for a job,
                <br />
                Find the right staff
              </h1>
              <div className="buttons">
                <button className="btn">
                  <a href="#contact">Contact Us</a>
                </button>
                <button className="btn" onClick={copyLink}>
                  Invite a Friend
                </button>
              </div>
            </div>
            <img src={landImg} alt="" />
          </div>
        </div>
      </div>
      {/* ABOUT */}
      <div className="about" id="about">
        <div className="container">
          <div className="text">
            <h3>What is Khedma ?</h3>
            <h2>About Us</h2>
            <p>
              Khedma is a web application that faciliates communication between
              those who need work and those who need a service or an employee.
            </p>
          </div>
          <img src={aboutImg} alt="" />
        </div>
      </div>
      {/* FEATURES */}
      <div className="feat" id="feat">
        <div className="container">
          <h2>Features</h2>
          <div className="cards">
            <div className="card">
              <img src={featImg1} alt="" />
              <div className="text">
                <h3>Connections</h3>
                <p>Connect with people and expand your network.</p>
              </div>
            </div>
            <div className="card">
              <img src={featImg4} alt="" />
              <div className="text">
                <h3>Create your Portfolio</h3>
                <p>
                  Create your portfolio and add the projects that you have made.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={featImg3} alt="" />
              <div className="text">
                <h3>Create recruitment ads</h3>
                <p>Create an advertisement and find the right staff.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT */}
      <div class="sec contact" id="contact">
        <h2>Contact Us</h2>
        <div class="container">
          <div class="text">
            <h4>Contact Information</h4>
            <ul class="info">
              <li>
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                Khedma117@gmail.com
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faFacebook} /> @Khedma
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faInstagram} />
                @khedma117
              </li>
            </ul>
          </div>
          <form
            action="https://formsubmit.co/khedma117@gmail.com"
            method="POST"
          >
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              id="name"
              className="input"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              id="email"
              className="input"
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <label htmlFor="message" className="label">
              Message
            </label>
            <input
              id="message"
              className="input"
              type="text"
              name="message"
              placeholder="Your message"
              required
            />
            <input
              type="hidden"
              name="_subject"
              value="From personal website"
            />
            <button type="submit" className="btn">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="createdby sec">
        <h2>Created by</h2>
        <div className="container">
          <div className="person">
            <div className="image">
              <img src={me} alt="" />
              <img src={ellipse} alt="" />
            </div>
            <div className="name">Med Emir Bouhamar</div>
          </div>
          <div className="person">
            <div className="image">
              <img src={houssem} alt="" />
              <img src={ellipse} alt="" />
            </div>
            <div className="name">Houssem Mansour</div>
          </div>
          <div className="person">
            <div className="image">
              <img src={zaki} alt="" />
              <img src={ellipse} alt="" />
            </div>
            <div className="name">Zakaria Rehiel</div>
          </div>
          <div className="person">
            <div className="image">
              <img src={moh} alt="" />
              <img src={ellipse} alt="" />
            </div>
            <div className="name">Mohamed Belhadj</div>
          </div>
          <div className="person">
            <div className="image">
              <img src={adel} alt="" />
              <img src={ellipse} alt="" />
            </div>
            <div className="name">Adel Allani</div>
          </div>
        </div>
      </div>
      <div className="ourapp">
        <div className="container">
          <div className="text">
            <h3>Get Our Application</h3>
            <h2>Our app is coming soon ...</h2>
            <p>We are launching Khedma on Mobile devices soon..</p>
            <div className="buttons">
              <img src={ourApp1} alt="" />
              <img src={ourApp2} alt="" />
            </div>
          </div>
          <img src={phoneImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
