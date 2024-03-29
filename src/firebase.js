import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
import firebase from "firebase/compat/app";
const firebaseConfig = {
  apiKey: "AIzaSyD9KDPcDyMAPzHrK8QO20Ibs2pt3JoybyQ",
  authDomain: "khedma-master.firebaseapp.com",
  projectId: "khedma-master",
  storageBucket: "khedma-master.appspot.com",
  messagingSenderId: "1047119332218",
  appId: "1:1047119332218:web:739d577b3cd342457f4cc3",
  measurementId: "G-892GVCTBXT",
};

const app = firebase.initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
