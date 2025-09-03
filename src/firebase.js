// Import Firebase core
import { initializeApp } from "firebase/app";

// Import Auth
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Import Firestore
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCssvAKpwm87k8opgV2fQIPZy4l1tHd8sw",
  authDomain: "netflix-clone-4c591.firebaseapp.com",
  projectId: "netflix-clone-4c591",
  storageBucket: "netflix-clone-4c591.firebasestorage.app",
  messagingSenderId: "638937452504",
  appId: "1:638937452504:web:211433390b165be5a02cad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 🔹 Signup function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Save user info with UID as doc ID
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      email,
      authProvider: "local",
    });
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

// 🔹 Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

// 🔹 Logout function
const logout = () => {
  signOut(auth);
};

export { auth, db, signup, login, logout };
