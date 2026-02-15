import { useState } from "react";

function JobForm({ addJob, editingJob, updateJob }) {
  const [title, setTitle] = useState(editingJob?.title || "");
  const [description, setDescription] = useState(editingJob?.description || "");
  const [type, setType] = useState(editingJob?.type || "full_time");

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = { id: editingJob ? editingJob.id : Date.now(), title, description, type };

    if(editingJob) {
      updateJob(job);
    } else {
      addJob(job);
    }

    setTitle("");
    setDescription("");
    setType("full_time");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Job Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea placeholder="Job Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="full_time">Full Time</option>
        <option value="part_time">Part Time</option>
        <option value="remote">Remote</option>
      </select>
      <button type="submit">{editingJob ? "Update Job" : "Post Job"}</button>
    </form>
  );
}

export default JobForm;
