export const isAdmin = (user) => user?.role === "admin";

export const isRecruiter = (user) => user?.role === "recruiter";

export const isJobSeeker = (user) => user?.role === "job_seeker";
