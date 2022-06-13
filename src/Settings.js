import React, { useState } from "react";
import Nav from "./Nav";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import img from "./img/business-3d-seated-businessman-in-black-suit-with-laptop.png";
import "./settings.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";
import { database } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";

function Settings() {
  let currentUser = useSelector(selectUser);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [lName, setLname] = useState("");
  const [fName, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [Pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [validationStarted, setValidationStarted] = useState(false);

  const navigate = useNavigate("");
  const updateUserInfo = async (user) => {
    updateDoc(doc(database, "users", user.uid), {
      firstname: fName ? fName : currentUser.fName,
      lastname: lName ? lName : currentUser.lName,
      city: region ? region : currentUser.city,
      country: country ? country : currentUser.country,
    });
  };

  function updateUser() {
    var user = firebase.auth().currentUser;
    updateUserInfo(user);
    user
      .updateProfile({
        displayName:
          (fName ? fName : currentUser.fName) +
          " " +
          (lName ? lName : currentUser.lName),
      })
      .then(function () {
        console.log(" Update successful");
      })
      .catch(function (error) {
        console.log("An error happened.");
      });
  }

  function deleteUser(password) {
    //  e.preventDefault();
    if (password == "")
      document.getElementById("deletion-password-error").innerHTML =
        "password required";
    else {
      reauthenticate(password)
        .then(() => {
          var userToDelete = firebase.auth().currentUser;
          userToDelete
            .delete()
            .then(function () {
              navigate("/");
              // User deleted.
              console.log("user deleted");
            })
            .catch(function (error) {
              // An error happened.
              console.log(error, "error while deleting user");
            });
        })
        .catch((error) => {
          console.log(error.code);
          if ((error.code = "auth/wrong-password"))
            document.getElementById("deletion-password-error").innerHTML =
              "incorrect password";
        });
    }
  }

  function resetPassword(oldPass, newPass) {
    setValidationStarted(true);
    if (oldPass !== "") {
      if (oldPass.length >= 8) {
        document.getElementById("current-password-error").innerHTML = "";
      } else {
        document.getElementById("current-password-error").innerHTML =
          "invalid password";
      }
    } else {
      document.getElementById("current-password-error").innerHTML =
        "password required";
    }

    if (newPass !== "") {
      if (newPass.length >= 8) {
        document.getElementById("new-password-error").innerHTML = "";
      } else {
        document.getElementById("new-password-error").innerHTML =
          "invalid password";
      }
    } else {
      document.getElementById("new-password-error").innerHTML =
        "password required";
    }

    if (
      oldPass !== "" &&
      oldPass.length >= 8 &&
      newPass !== "" &&
      newPass.length >= 8
    ) {
      changePassword(
        oldPass,
        newPass,
        "password updated",
        "error while updating password",
        "error while updating authentication"
      );
      console.log("password changed");
    } else {
      console.log("error");
    }
  }

  function reauthenticate(currentPassword) {
    var userToUpdate = firebase.auth().currentUser;
    console.log(userToUpdate.email, currentPassword);
    var cred = firebase.auth.EmailAuthProvider.credential(
      userToUpdate.email,
      currentPassword
    );
    return userToUpdate.reauthenticateWithCredential(cred);
  }

  function changePassword(
    currentPassword,
    newPassword,
    message1,
    message2,
    message3
  ) {
    reauthenticate(currentPassword)
      .then(() => {
        var userToUpdate = firebase.auth().currentUser;
        userToUpdate
          .updatePassword(newPassword)
          .then(() => {
            // this.presentToast(message1);
            console.log("Password updated!");
            setValidationStarted(false);
          })
          .catch((error) => {
            // this.presentToast(message2);
            console.log(error);
          });
      })
      .catch((error) => {
        //  this.presentToast(message3);
        console.log(error.code);
        if ((error.code = "auth/wrong-password"))
          document.getElementById("current-password-error").innerHTML =
            "incorrect password";
      });
  }
  return (
    <div className="settings gradient-bg">
      <Nav />
      <form>
        <div className="container">
          <div className="left">
            <h2>Settings</h2>
            <div className="cont">
              <label className="label">First name</label>
              <input
                type="text"
                className="input"
                value={fName}
                onChange={(event) => {
                  setFname(event.target.value);
                }}
              />
            </div>
            <div className="cont">
              <label className="label">Last name</label>
              <input
                type="text"
                className="input"
                value={lName}
                onChange={(event) => {
                  setLname(event.target.value);
                }}
              />
            </div>
            {/* <div className="cont mrg">
              <label className="label">Phone</label>
              <PhoneInput
                country={"dz"}
                value={""}
                onChange={(value) => {
                  setPhone(value);
                }}
              />
            </div> */}
            <div className="cont">
              <label className="label">Country</label>
              <CountryDropdown
                className="input"
                value={country}
                onChange={(val) => setCountry(val)}
              />
            </div>
            <div className="cont">
              <label className="label">City</label>
              <RegionDropdown
                className="input"
                country={country}
                value={region}
                onChange={(val) => setRegion(val)}
              />
            </div>
            <button
              type="button"
              className="btn"
              onClick={() => {
                updateUser();
              }}
            >
              Save changes
            </button>
            <div className="cont pos-relative">
              <label className="label">Current Password</label>
              <input
                type="password"
                className="input"
                onChange={(event) => {
                  setOldPass(event.target.value);
                }}
              />

              <p className="error-text" id="current-password-error"></p>
            </div>
            <div className="cont pos-relative">
              <label className="label">New Password</label>
              <input
                type="password"
                className="input"
                onChange={(event) => {
                  setNewPass(event.target.value);
                }}
              />
              <p className="error-text" id="new-password-error"></p>
            </div>
            <button
              type="button"
              className="btn"
              onClick={() => {
                resetPassword(oldPass, newPass);
              }}
            >
              Update Password
            </button>

            <div className="cont pos-relative">
              <label className="label">
                enter your password to delete your account
              </label>
              <input
                type="password"
                className="input"
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />
              <p className="error-text" id="deletion-password-error"></p>
            </div>
            <button
              type="button"
              className="btn delete"
              onClick={() => {
                deleteUser(Pass);
              }}
            >
              Delete account
            </button>
          </div>
          <img src={img} alt="" />
        </div>
      </form>
    </div>
  );
}

export default Settings;
