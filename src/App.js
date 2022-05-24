import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./Login";
import "./App.css";
import SignUp from "./SignUp";
import ForgotPw from "./ForgotPw";
import Home from "./Home";
import PostJob from "./PostJob";
import Profile from "./Profile";
import Settings from "./Settings";
import { auth, database } from "./firebase";
import {
  doc,
  getDoc,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Portfolio from "./Portfolio";
import Chat from "./Chat";
function App() {
  let user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      settleUser(userAuth);
    });
    return unsubscribe;
  }, []); //eslint-disable-line
  async function settleUser(userAuth) {
    if (userAuth) {
      const docRef = doc(database, "users", userAuth.uid);
      getDoc(docRef).then((doc) => {
        const userDoc = doc.data();
        dispatch(
          login({
            id: userAuth.uid,
            email: userAuth.email,
            fName: userDoc.firstname,
            lName: userDoc.lastname,
            country: userDoc.country,
            city: userDoc.city,
            job: userDoc.job,
          })
        );
      });
    } else {
      dispatch(logout());
    }
  }
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
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Portfolio/:id" element={<Portfolio />} />
            <Route path="/Chat" element={<Chat />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
