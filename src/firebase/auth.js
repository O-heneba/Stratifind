import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

// SIGN UP
export const signup = async ({
  email,
  password,
  role,
  name,
  location,
  phone,
}) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    email,
    role, // "job_seeker" | "recruiter"
    name,
    location,
    phone,
    createdAt: new Date(),
  });

  return user;
};

// LOGIN
export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

// LOGOUT
export const logout = async () => {
  await signOut(auth);
};
