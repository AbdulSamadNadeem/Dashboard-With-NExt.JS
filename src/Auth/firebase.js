
import { initializeApp } from "firebase/app";
import {getAuth ,  createUserWithEmailAndPassword ,onAuthStateChanged ,signOut   } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBum3LcC2mLye2YAfR341l9GHpFelJiNOk",
  authDomain: "next-js-dashboard-6820a.firebaseapp.com",
  projectId: "next-js-dashboard-6820a",
  storageBucket: "next-js-dashboard-6820a.firebasestorage.app",
  messagingSenderId: "735479491285",
  appId: "1:735479491285:web:2b9962c9388fc73d35905c",
  measurementId: "G-BWP02PY29Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{ auth , createUserWithEmailAndPassword ,onAuthStateChanged ,signOut  }