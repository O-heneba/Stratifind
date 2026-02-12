import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../../firebase/firestore";

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const data = await getJobById(jobId);
      setJob(data);
    };

    fetchJob();
  }, [jobId]);

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p><strong>Type:</strong> {job.jobType}</p>
      <p><strong>Recruiter:</strong> {job.recruiterId}</p>
    </div>
  );
};

export default JobDetails;
