// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  getRedirectResult,
  signOut,
  FacebookAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs1AMc-f4SRo7FLfUSu2xq0hSdnACMLCQ",
  authDomain: "login-69442.firebaseapp.com",
  projectId: "login-69442",
  storageBucket: "login-69442.appspot.com",
  messagingSenderId: "367312982893",
  appId: "1:367312982893:web:6420be067f730a3dd94064",
  measurementId: "G-FWZVRR3NX0",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const fbprovider = new FacebookAuthProvider()

export {
    auth,provider ,signInWithPopup, getRedirectResult,GoogleAuthProvider,signOut,fbprovider, FacebookAuthProvider
}