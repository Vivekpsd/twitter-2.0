// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvJevmxyoQf_vXYy9CMTKJsk2NK-4jNaU",
  authDomain: "react-social-media-ef7a4.firebaseapp.com",
  projectId: "react-social-media-ef7a4",
  storageBucket: "react-social-media-ef7a4.appspot.com",
  messagingSenderId: "706265163467",
  appId: "1:706265163467:web:cf38de6d7caa16bededd4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
