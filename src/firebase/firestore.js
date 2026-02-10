import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

/* ---------------- USERS ---------------- */

export const getUserById = async (uid) => {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
};

export const updateUserProfile = async (uid, data) => {
  const ref = doc(db, "users", uid);
  await updateDoc(ref, {
    ...data,
    updatedAt: new Date(),
  });
};

/* ---------------- JOBS ---------------- */

export const createJob = async (jobData) => {
  return await addDoc(collection(db, "jobs"), {
    ...jobData,
    createdAt: new Date(),
  });
};

export const getAllJobs = async () => {
  const snapshot = await getDocs(collection(db, "jobs"));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const updateJob = async (jobId, data) => {
  const ref = doc(db, "jobs", jobId);
  await updateDoc(ref, data);
};

export const deleteJob = async (jobId) => {
  await deleteDoc(doc(db, "jobs", jobId));
};

/* ---------------- APPLICATIONS ---------------- */

export const applyForJob = async (applicationData) => {
  return await addDoc(collection(db, "applications"), {
    ...applicationData,
    appliedAt: new Date(),
  });
};

export const getApplicationsByUser = async (uid) => {
  const q = query(
    collection(db, "applications"),
    where("applicantId", "==", uid)
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
