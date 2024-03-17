// Import the functions you need from the SDKs you need
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { initializeApp  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXDkyCLxjWZiTkKTQ4KklK_2eHcE0IEyI",
  authDomain: "jsi-17.firebaseapp.com",
  projectId: "jsi-17",
  storageBucket: "jsi-17.appspot.com",
  messagingSenderId: "719553556845",
  appId: "1:719553556845:web:4cd1c7efb5da032d9fea64",
  measurementId: "G-ESKNE76RS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

