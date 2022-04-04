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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerlastname, setRegisterlastname] = useState("");
  const [registerfirstname, setRegisterfirstname] = useState("");
  const [registerbirthday, setRegisterbirthday] = useState("");
  const [user, setUser] = useState({});
  const [signed, setSigned] = useState(false);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const confirmemail = async (token) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        requestType: "VERIFY_EMAIL",
        idToken: token,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      var response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyD9KDPcDyMAPzHrK8QO20Ibs2pt3JoybyQ",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log("error", error);
        });

      console.log(registerEmail);
    } catch (error) {
      alert(" existe pas");
      console.log(error.message);
    }
  };

  const registeruser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then(async (userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        var token = await user.getIdToken();

        console.log(token);
        confirmemail(token);

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
      ).then(async (userCredential) => {
        const user = userCredential.user;
        var token = await user.getIdToken();

        console.log(token);

        confirmemail(token);
        console.log(userCredential);

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
  function createAcc() {
    comp ? registercompany() : registeruser();
  }
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
          ) : !signed ? (
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
                      value={registerfirstname}
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
                      value={registerlastname}
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
                  value={registerEmail}
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
                  value={registerPassword}
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                />
                <label className="label" htmlFor="sixth">
                  Confirm password
                </label>
                <input
                  id="sixth"
                  className="input"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                  }}
                />
                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    if (
                      registerfirstname &&
                      registerlastname &&
                      registerEmail &&
                      registerPassword
                    ) {
                      if (registerPassword === confirmPassword) {
                        createAcc();
                        setSigned(true);
                      } else alert("Passwords do not match");
                    } else alert("pleasse fill in all the inputs");
                  }}
                >
                  Signup
                </button>
              </div>
              <img src={comp ? signup2 : signup1} alt="" />
            </>
          ) : (
            <div className="confirm">
              <h2>Verification link was sent</h2>
              <h5>please check your email</h5>
              <div className="back" onClick={() => navigate("/login")}>
                <FontAwesomeIcon className="icon" icon={faArrowLeft} /> Back to
                login
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
export default SignUp;
