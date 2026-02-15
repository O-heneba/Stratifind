import { useState } from "react";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

function RecruiterDashboard() {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  const addJob = (job) => setJobs([...jobs, job]);
  const deleteJob = (id) => setJobs(jobs.filter(job => job.id !== id));
  const editJob = (job) => setEditingJob(job);
  const updateJob = (updatedJob) => {
    setJobs(jobs.map(j => (j.id === updatedJob.id ? updatedJob : j)));
    setEditingJob(null);
  };

  return (
    <div>
      <h1>Recruiter Dashboard</h1>
      <JobForm addJob={addJob} editingJob={editingJob} updateJob={updateJob} />
      <JobList jobs={jobs} deleteJob={deleteJob} editJob={editJob} />
    </div>
  );
}

export default RecruiterDashboard;
