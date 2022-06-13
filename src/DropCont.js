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
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);
  const [data7, setData7] = useState([]);
  const [data8, setData8] = useState("");
  const [data9, setData9] = useState([]);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    if (name === "Portfolio Content") {
      if (!user.isComp) {
        const docRef = doc(database, "portfolios", user.id);
        getDoc(docRef).then((doc) => {
          const portfolio = doc.data();
          setData1(portfolio.about);
          setData2(portfolio.education);
          setData3(portfolio.projects);
          setData4(portfolio.workExp);
          setData5(portfolio.skills);
          setData6(portfolio.certificates);
          setData7(portfolio.languages);
          setData8(portfolio.hobbies);
          setData9(portfolio.acc);
        });
      } else {
        const docRef = doc(database, "companies", user.id);
        getDoc(docRef).then((doc) => {
          const portfolio = doc.data();
          setData1(portfolio.about);
          setData2(portfolio.ceo);
          setData3(portfolio.size);
          setData4(portfolio.revenue);
          setData5(portfolio.field);
        });
      }
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
  }, []); //eslint-disable-line
  function updatePortfolio() {
    const docRef = doc(database, "portfolios", user.id);
    updateDoc(docRef, {
      about: data1,
      education: data2,
      projects: data3,
      workExp: data4,
      skills: data5,
      certificates: data6,
      languages: data7,
      hobb: data8,
      acc: data9,
    });
  }
  function updateComp() {
    const docRef = doc(database, "companies", user.id);
    updateDoc(docRef, {
      about: data1,
      ceo: data2,
      size: +data3,
      revenue: +data4,
      field: data5,
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
          user.isComp ? (
            <form className="companyform">
              <label className="label">About</label>
              <textarea
                value={data1}
                onChange={(e) => setData1(e.target.value)}
                type="text"
                className="input"
              />
              <label className="label">CEO</label>
              <input
                value={data2}
                onChange={(e) => setData2(e.target.value)}
                type="text"
                className="input"
              />
              <label className="label">Size</label>
              <input
                value={data3}
                onChange={(e) => {
                  if (e.target.value <= 0) e.target.value = 0;
                  setData3(e.target.value);
                }}
                type="number"
                className="input"
              />
              <label className="label">Revenue</label>
              <input
                value={data4}
                onChange={(e) => {
                  if (e.target.value <= 0) e.target.value = 0;
                  setData4(e.target.value);
                }}
                type="number"
                className="input"
              />
              <label className="label">Field</label>
              <input
                value={data5}
                onChange={(e) => setData5(e.target.value)}
                type="text"
                className="input"
              />
            </form>
          ) : (
            <>
              <ProfileSec1 name="about" data={data1} setData={setData1} />
              <ProfileSec2 name="education" data={data2} setData={setData2} />
              .
              <ProfileSec2 name="projects" data={data3} setData={setData3} />
              .
              <ProfileSec2
                name="work experience"
                data={data4}
                setData={setData4}
              />
              .
              <ProfileSec3
                name="skills"
                type="withRating"
                data={data5}
                setData={setData5}
              />
              <ProfileSec3
                name="certificates"
                data={data6}
                setData={setData6}
              />
              <ProfileSec3
                name="languages"
                type="withRating"
                data={data7}
                setData={setData7}
              />
              <ProfileSec1
                name="Hobbies and Interests"
                data={data8}
                setData={setData8}
              />
              <ProfileSec3
                name="Social Accounts"
                data={data9}
                setData={setData9}
              />
            </>
          )
        ) : (
          <PostedJobs jobs={jobs} />
        )}
        {name === "Portfolio Content" ? (
          <button
            className="btn white"
            onClick={() => {
              handleDropdown();
              if (user.isComp) {
                updateComp();
              } else {
                updatePortfolio();
              }
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
