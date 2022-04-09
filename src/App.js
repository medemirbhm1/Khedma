import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./Login";
import "./App.css";
import SignUp from "./SignUp";
import ForgotPw from "./ForgotPw";
import Home from "./Home";
import PostJob from "./PostJob";
import Profile from "./Profile";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function App() {
  let user = useSelector(selectUser);
  user = true;
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      {!user ? (
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotPassword" element={<ForgotPw />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PostAJob" element={<PostJob />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
