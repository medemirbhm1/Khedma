import { useRef } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileSec1 from "./ProfileSec1";
import ProfileSec2 from "./ProfileSec2";
import ProfileSec3 from "./ProfileSec3";
import PostedJobs from "./PostedJobs";
function DropCont({ name }) {
  const prContentRef = useRef();
  const chevRef = useRef();
  function handleDropdown() {
    chevRef.current.classList.toggle("active");
    prContentRef.current.classList.toggle("active");
  }
  return (
    <div className="prContent">
      <div className="ctrl">
        <h2>{name}</h2> 
        
        <span onClick={handleDropdown} ref={chevRef}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>
      <div ref={prContentRef} className="cont">
        {name === "Portfolio Content" ? (
          <>
            <ProfileSec1 name="about" />
            <ProfileSec2 name="education" />.
            <ProfileSec2 name="project" />.
            <ProfileSec2 name="work experience" />.
            <ProfileSec3 name="skills" type="withRating" />
            <ProfileSec3 name="certificates" />
            <ProfileSec3 name="languages" type="withRating" />
            <ProfileSec1 name="Hobbies and Interests" />
            <ProfileSec3 name="Social Accounts" />
          </>
        ) : (
          <PostedJobs />
        )}
      </div>
    </div>
  );
}

export default DropCont;
