import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore"; // if using Firestore
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // if using Storage
const firebaseConfig = {
  apiKey: "AIzaSyAuDzbzY7MrfADgeb3ADHorijssUXflwls",
  authDomain: "disney-clone-34fc1.firebaseapp.com",
  projectId: "disney-clone-34fc1",
  storageBucket: "disney-clone-34fc1.firebasestorage.app",
  messagingSenderId: "998771564725",
  appId: "1:998771564725:web:0268254589bd4398fa5efc",
  measurementId: "G-94N6SXEZW8",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("profile");
export { auth, db, storage, googleProvider };
