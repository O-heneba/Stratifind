import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC68rhNJmo0xWEJewYiVKxbBkpw34z9dHk",
  authDomain: "stratifind.firebaseapp.com",
  projectId: "stratifind",
  storageBucket: "stratifind.firebasestorage.app",
  messagingSenderId: "879311786961",
  appId: "1:879311786961:web:1ecf37c0d8fc5cdd79c6f0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
