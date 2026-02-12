import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

import {
  doc,
  setDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";

import { auth, db } from "./firebase";


// ========================
// SIGNUP
// ========================
export const signup = async ({
  email,
  password,
  role,
  name,
  location,
  phone,
}) => {
  try {
    if (!["job_seeker", "recruiter"].includes(role)) {
      throw new Error("Invalid role selected");
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email,
      role,
      name,
      location,
      phone,
      createdAt: serverTimestamp(),
    });

    await sendEmailVerification(user);

    return user;
  } catch (error) {
    throw error.message;
  }
};


// ========================
// LOGIN
// ========================
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    if (!user.emailVerified) {
      throw new Error("Please verify your email first.");
    }

    return user;
  } catch (error) {
    throw error.message;
  }
};


// ========================
// LOGOUT
// ========================
export const logout = async () => {
  await signOut(auth);
};


// ========================
// RESET PASSWORD
// ========================
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return "Password reset email sent!";
  } catch (error) {
    throw error.message;
  }
};


// ========================
// GET USER DATA
// ========================
export const getUserData = async (uid) => {
  const docSnap = await getDoc(doc(db, "users", uid));
  return docSnap.data();
};
