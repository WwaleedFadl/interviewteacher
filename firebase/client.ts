import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD5Ax9ocpUyWu_F9qH5LTwYjuT1lTC6paY",
  authDomain: "interviewteacher-9a3d5.firebaseapp.com",
  projectId: "interviewteacher-9a3d5",
  storageBucket: "interviewteacher-9a3d5.firebasestorage.app",
  messagingSenderId: "663833712499",
  appId: "1:663833712499:web:fdd34f25451ba878b95706",
  measurementId: "G-GGX6T2F53N",
};
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
