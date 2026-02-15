

import JobItem from "./JobItem";

function JobList({ jobs, deleteJob, editJob }) {
  return (
    <div>
      {jobs.map(job => (
        <JobItem key={job.id} job={job} deleteJob={deleteJob} editJob={editJob} />
      ))}
    </div>
  );
}

export default JobList;
