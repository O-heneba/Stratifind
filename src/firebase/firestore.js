import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

/* =========================================================
   USERS
========================================================= */

export const createUserProfile = async (uid, data) => {
  await setDoc(doc(db, "users", uid), {
    name: data.name,
    email: data.email,
    location: data.location,
    phone: data.phone,
    role: data.role,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};

export const getUserById = async (uid) => {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
};

export const updateUserProfile = async (uid, data) => {
  await updateDoc(doc(db, "users", uid), {
    ...data,
    updatedAt: serverTimestamp(),
  });
};

/* =========================================================
   JOBS
========================================================= */

export const createJob = async (jobData) => {
  return await addDoc(collection(db, "jobs"), {
    title: jobData.title,
    description: jobData.description,
    company: jobData.company,
    location: jobData.location,
    category: jobData.category,
    jobType: jobData.jobType, // full-time | part-time | remote
    salary: jobData.salary || null,
    recruiterId: jobData.recruiterId,
    createdAt: serverTimestamp(),
  });
};

/**
 * Real-time job listing
 */
export const subscribeToJobs = (callback) => {
  return onSnapshot(
    query(collection(db, "jobs"), orderBy("createdAt", "desc")),
    (snapshot) => {
      const jobs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(jobs);
    }
  );
};

/**
 * Job details page
 */
export const getJobById = async (jobId) => {
  const snap = await getDoc(doc(db, "jobs", jobId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

/**
 * Pagination
 */
export const getPaginatedJobs = async (lastDoc = null) => {
  let q;

  if (lastDoc) {
    q = query(
      collection(db, "jobs"),
      orderBy("createdAt", "desc"),
      startAfter(lastDoc),
      limit(10)
    );
  } else {
    q = query(
      collection(db, "jobs"),
      orderBy("createdAt", "desc"),
      limit(10)
    );
  }

  const snapshot = await getDocs(q);

  return {
    jobs: snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })),
    lastVisible: snapshot.docs[snapshot.docs.length - 1],
  };
};

/**
 * Search & Filters
 */
export const filterJobs = async ({
  category,
  location,
  jobType,
}) => {
  let baseQuery = collection(db, "jobs");
  const conditions = [];

  if (category) {
    conditions.push(where("category", "==", category));
  }

  if (location) {
    conditions.push(where("location", "==", location));
  }

  if (jobType) {
    conditions.push(where("jobType", "==", jobType));
  }

  const q = query(baseQuery, ...conditions);

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const updateJob = async (jobId, data) => {
  await updateDoc(doc(db, "jobs", jobId), data);
};

export const deleteJob = async (jobId) => {
  await deleteDoc(doc(db, "jobs", jobId));
};

/* =========================================================
   APPLICATIONS
========================================================= */

/**
 * Apply for job with duplicate prevention + CV
 */
export const applyForJob = async ({
  jobId,
  recruiterId,
  applicantId,
  coverLetter,
  cvUrl,
}) => {
  const q = query(
    collection(db, "applications"),
    where("jobId", "==", jobId),
    where("applicantId", "==", applicantId)
  );

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    throw new Error("You already applied for this job.");
  }

  return await addDoc(collection(db, "applications"), {
    jobId,
    recruiterId,
    applicantId,
    coverLetter: coverLetter || "",
    cvUrl: cvUrl || null,
    status: "pending",
    appliedAt: serverTimestamp(),
  });
};

/**
 * Real-time applications (Job Seeker)
 */
export const subscribeToUserApplications = (uid, callback) => {
  const q = query(
    collection(db, "applications"),
    where("applicantId", "==", uid)
  );

  return onSnapshot(q, (snapshot) => {
    const applications = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(applications);
  });
};

/**
 * Real-time applications (Recruiter)
 */
export const subscribeToRecruiterApplications = (uid, callback) => {
  const q = query(
    collection(db, "applications"),
    where("recruiterId", "==", uid)
  );

  return onSnapshot(q, (snapshot) => {
    const applications = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(applications);
  });
};

export const updateApplicationStatus = async (appId, status) => {
  await updateDoc(doc(db, "applications", appId), {
    status,
  });
};
export const isJobSaved = async (uid, jobId) => {
  const snap = await getDoc(
    doc(db, "savedJobs", uid, "jobs", jobId)
  );

  return snap.exists();
};

export const saveJob = async (uid, job) => {
  await setDoc(doc(db, "savedJobs", uid, "jobs", job.id), {
    ...job,
    savedAt: serverTimestamp(),
  });
} 