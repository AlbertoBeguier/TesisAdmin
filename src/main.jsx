import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg-X4SJ7yu6irh_-DgFwGRFg7JLaZVsBM",
  authDomain: "tesadmin-5f366.firebaseapp.com",
  projectId: "tesadmin-5f366",
  storageBucket: "tesadmin-5f366.appspot.com",
  messagingSenderId: "598146820341",
  appId: "1:598146820341:web:fe772ec925ae29ab477dbc",
  measurementId: "G-5HEFH9WMR8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

export { db };
