import { useState, useEffect } from "react";
import { createJob, updateJob } from "../../firebase/firestore";

function PostJob({ recruiterId, editingJob, setEditingJob, onJobCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [jobType, setJobType] = useState("full_time");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editingJob) {
      setTitle(editingJob.title);
      setDescription(editingJob.description);
      setJobType(editingJob.jobType);
      setCompany(editingJob.company || "");
      setLocation(editingJob.location || "");
      setCategory(editingJob.category || "");
    }
  }, [editingJob]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jobPayload = {
        title,
        description,
        jobType,
        recruiterId,
        company: company || "Unknown Company",
        location: location || "Anywhere",
        category: category || "General",
      };

      if (editingJob) {
        await updateJob(editingJob.id, jobPayload);
        setEditingJob(null);
      } else {
        const docRef = await createJob(jobPayload);

        // Immediately update parent dashboard
        if (onJobCreated) {
          onJobCreated({ id: docRef.id, ...jobPayload });
        }
      }

      // Clear form instantly
      setTitle("");
      setDescription("");
      setJobType("full_time");
      setCompany("");
      setLocation("");
      setCategory("");
    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>{editingJob ? "Edit Job" : "Post a New Job"}</h3>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={styles.input}
      />
      <textarea
        placeholder="Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        rows={4}
        style={styles.textarea}
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={styles.input}
      />
      <select
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
        style={styles.select}
      >
        <option value="full_time">Full Time</option>
        <option value="part_time">Part Time</option>
        <option value="remote">Remote</option>
      </select>
      <button type="submit" style={styles.submitBtn}>
        {editingJob ? "Update Job" : "Post Job"}
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  select: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  submitBtn: {
    padding: "10px 15px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#2700ec",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
};

export default PostJob;
