// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARrwacG6EFvFZFd7L7hzzEMlXFn08bHB8",
  authDomain: "bith-portfolio.firebaseapp.com",
  projectId: "bith-portfolio",
  storageBucket: "bith-portfolio.appspot.com",
  messagingSenderId: "45728169186",
  appId: "1:45728169186:web:8e93900bcca7aa7153f2bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
