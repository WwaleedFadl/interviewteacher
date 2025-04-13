// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5Ax9ocpUyWu_F9qH5LTwYjuT1lTC6paY",
  authDomain: "interviewteacher-9a3d5.firebaseapp.com",
  projectId: "interviewteacher-9a3d5",
  storageBucket: "interviewteacher-9a3d5.firebasestorage.app",
  messagingSenderId: "663833712499",
  appId: "1:663833712499:web:fdd34f25451ba878b95706",
  measurementId: "G-GGX6T2F53N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
