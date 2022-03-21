import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import choice1 from "./img/undraw_personal_file_re_5joy.svg";
import choice2 from "./img/undraw_quite_town_mg2q.svg";
import "./signUp.css";
import logo from "./img/logo.png";
import signup1 from "./img/undraw_my_password_re_ydq7.svg";
import signup2 from "./img/undraw_profile_details_re_ch9r.svg";
import { database } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";

function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerlastname, setRegisterlastname] = useState("");
  const [registerfirstname, setRegisterfirstname] = useState("");
  const [registerbirthday, setRegisterbirthday] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  //registre_user :
  const registeruser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;

        setDoc(doc(database, "users", user.uid), {
          //addDoc((database , 'users'+ user.uid),{

          Email: user.email,
          lastname: registerlastname,
          firstname: registerfirstname,
          birthday: registerbirthday,
          create_date: new Date().getTime(),
          date: new Date().getDate(),
        });
      });

      alert("user created");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  //registre_company :
  const registercompany = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;

        setDoc(doc(database, "users", user.uid), {
          Email: user.email,
          companyname: registerlastname,
          Location: registerfirstname,
          date_de_creation: registerbirthday,
          create_date: new Date().getTime(),
          date: new Date().getDate(),
        });
      });
      alert("user created");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const [chose, setChose] = useState(false);
  const [comp, setComp] = useState(false);
  const navigate = useNavigate();
  function getForm(p) {
    setChose("true");
    if (p === "comp") {
      setComp(true);
    }
  }
  return (
    <div className="signup">
      <nav>
        <div className="container">
          <button className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
            Khedma
          </button>
        </div>
      </nav>
      <form>
        <div className={`container ${chose ? "chose" : ""}`}>
          {!chose ? (
            <>
              <h2>Sign up as a :</h2>
              <div className="choices">
                <div
                  className="choice"
                  onClick={() => {
                    getForm();
                  }}
                >
                  <img src={choice1} alt="" />
                  <h3>Person</h3>
                </div>
                <div
                  className="choice"
                  onClick={() => {
                    getForm("comp");
                  }}
                >
                  <img src={choice2} alt="" />
                  <h3>Company</h3>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="left">
                <h2>Signup</h2>
                <div className="row">
                  <div>
                    <label className="label" htmlFor="first">
                      {comp ? "Company Name" : "First Name"}
                    </label>
                    <input
                      id="first"
                      className="input"
                      type="text"
                      onChange={(event) => {
                        setRegisterfirstname(event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="second">
                      {comp ? "Location" : "Last Name"}
                    </label>
                    <input
                      id="second"
                      className="input"
                      type="text"
                      onChange={(event) => {
                        setRegisterlastname(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <label className="label" htmlFor="third">
                  {comp ? "Creation Date" : "Birthdate"}
                </label>
                <input
                  id="third"
                  className="input"
                  type="date"
                  onChange={(event) => {
                    setRegisterbirthday(event.target.value);
                  }}
                />
                <label className="label" htmlFor="fourth">
                  Email
                </label>
                <input
                  id="fourth"
                  className="input"
                  type="email"
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                  }}
                />
                <label className="label" htmlFor="fifth">
                  Password
                </label>
                <input
                  id="fifth"
                  className="input"
                  type="password"
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                />
                <button
                  className="btn"
                  type="button"
                  onClick={comp ? registercompany : registeruser}
                >
                  Signup
                </button>
              </div>
              <img src={comp ? signup2 : signup1} alt="" />
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default SignUp;
