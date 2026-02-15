function JobItem({ job, deleteJob, editJob }) {
  return (
    <div>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p>{job.type}</p>
      <button onClick={() => editJob(job)}>Edit</button>
      <button onClick={() => deleteJob(job.id)}>Delete</button>
    </div>
  );
}

export default JobItem;