import { useEffect, useRef, useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileSec1 from "./ProfileSec1";
import ProfileSec2 from "./ProfileSec2";
import ProfileSec3 from "./ProfileSec3";
import PostedJobs from "./PostedJobs";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { database } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function DropCont({ name }) {
  const prContentRef = useRef();
  const chevRef = useRef();
  const user = useSelector(selectUser);
  const [about, setAbout] = useState("");
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [workExp, setWorkExp] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [hobb, setHobb] = useState("");
  const [acc, setAcc] = useState([]);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    if (name === "Portfolio Content") {
      const docRef = doc(database, "portfolios", user.id);
      getDoc(docRef).then((doc) => {
        const portfolio = doc.data();
        setAbout(portfolio.about);
        setEducation(portfolio.education);
        setProjects(portfolio.projects);
        setWorkExp(portfolio.workExp);
        setSkills(portfolio.skills);
        setCertificates(portfolio.certificates);
        setLanguages(portfolio.languages);
        setHobb(portfolio.hobbies);
        setAcc(portfolio.accounts);
      });
    } else {
      getJobsDocs();
    }
    async function getJobsDocs() {
      const jobsRef = collection(database, "jobs");
      const q = query(jobsRef, where("userId", "==", user.id));
      const qSnapshot = await getDocs(q);
      qSnapshot.docs.forEach((doc) => {
        setJobs((j) => [...j, doc.data()]);
      });
    }
  }, []);
  function updatePortfolio() {
    const docRef = doc(database, "portfolios", user.id);
    updateDoc(docRef, {
      about: about,
      education: education,
      projects: projects,
      workExp: workExp,
      skills: skills,
      certificates: certificates,
      languages: languages,
      hobb: hobb,
      acc: acc,
    });
  }
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
            <ProfileSec1 name="about" data={about} setData={setAbout} />
            <ProfileSec2
              name="education"
              data={education}
              setData={setEducation}
            />
            .
            <ProfileSec2
              name="projects"
              data={projects}
              setData={setProjects}
            />
            .
            <ProfileSec2
              name="work experience"
              data={workExp}
              setData={setWorkExp}
            />
            .
            <ProfileSec3
              name="skills"
              type="withRating"
              data={skills}
              setData={setSkills}
            />
            <ProfileSec3
              name="certificates"
              data={certificates}
              setData={setCertificates}
            />
            <ProfileSec3
              name="languages"
              type="withRating"
              data={languages}
              setData={setLanguages}
            />
            <ProfileSec1
              name="Hobbies and Interests"
              data={hobb}
              setData={setHobb}
            />
            <ProfileSec3 name="Social Accounts" />
          </>
        ) : (
          <PostedJobs jobs={jobs} />
        )}
        {name === "Portfolio Content" ? (
          <button
            className="btn white"
            onClick={() => {
              handleDropdown();
              updatePortfolio();
            }}
          >
            Submit
          </button>
        ) : null}
      </div>
    </div>
  );
}
export default DropCont;
