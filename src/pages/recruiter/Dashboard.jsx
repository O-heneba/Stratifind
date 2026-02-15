import { useState, useEffect } from "react";
import { deleteJob, subscribeToJobs } from "../../firebase/firestore";
import PostJob from "./PostJob";

function Dashboard({ recruiterId }) {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  // Inject animation keyframes once
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(25px) scale(0.97);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeToJobs((allJobs) => {
      const recruiterJobs = allJobs.filter(
        (job) => job.recruiterId === recruiterId
      );
      setJobs(recruiterJobs);
    });
    return () => unsubscribe();
  }, [recruiterId]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this job?")) return;
    try {
      await deleteJob(id);
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Recruiter Dashboard</h2>

        <PostJob
          recruiterId={recruiterId}
          editingJob={editingJob}
          setEditingJob={setEditingJob}
        />

        <div style={styles.jobsSection}>
          <h3 style={styles.sectionTitle}>Your Jobs</h3>

          {jobs.length === 0 ? (
            <div style={styles.empty}>
              <p style={{ fontWeight: 600 }}>No jobs yet 🚀</p>
              <small>Post your first role to start hiring</small>
            </div>
          ) : (
            <div style={styles.grid}>
              {jobs.map((job, index) => (
                <div
                  key={job.id}
                  style={{
                    ...styles.card,
                    animationDelay: `${index * 0.08}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-6px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 45px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.06)";
                  }}
                >
                  <div>
                    <h4 style={styles.jobTitle}>{job.title}</h4>
                    <p style={styles.jobDesc}>{job.description}</p>

                    <div style={styles.meta}>
                      {job.company && <span>🏢 {job.company}</span>}
                      {job.location && <span>📍 {job.location}</span>}
                      {job.category && <span>📂 {job.category}</span>}
                    </div>

                    <span style={styles.badge}>
                      {(job.jobType || "").replace("_", " ")}
                    </span>
                  </div>

                  <div style={styles.actions}>
                    <button
                      style={styles.editBtn}
                      onClick={() => setEditingJob(job)}
                    >
                      Edit
                    </button>

                    <button
                      style={styles.deleteBtn}
                      onClick={() => handleDelete(job.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Styles ---
const styles = {
  wrapper: {
    background: "#7c7c7c",
    minHeight: "100vh",
    padding: "30px 16px",
    fontFamily: "Inter, system-ui, sans-serif",
  },

  container: { maxWidth: 1100, margin: "0 auto" },

  heading: { fontSize: 40, fontWeight: 700, marginBottom: 20,textAlign: "center" },

  jobsSection: { marginTop: 30 },

  sectionTitle: { fontSize: 18, fontWeight: 600, marginBottom: 15 },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 18,
  },

  card: {
    background: "#ffffff",
    borderRadius: 14,
    padding: 18,
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.25s ease",
    animation: "fadeInUp 0.5s ease forwards",
  },

  jobTitle: { margin: "0 0 6px", fontSize: 18, fontWeight: 600 },
  jobDesc: { fontSize: 14, color: "#555", marginBottom: 12 },

  meta: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    fontSize: 13,
    color: "#666",
    marginBottom: 10,
  },

  badge: {
    display: "inline-block",
    background: "#eef2ff",
    color: "#4f46e5",
    fontSize: 12,
    padding: "4px 8px",
    borderRadius: 6,
    fontWeight: 600,
  },

  actions: { marginTop: 14, display: "flex", justifyContent: "flex-end", gap: 10 },

  editBtn: {
    background: "#10c254",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 12,
  },

  deleteBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 12,
  },

  empty: {
    background: "#cbcaca",
    borderRadius: 12,
    padding: 30,
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(255, 255, 255, 0.05)",
  },
};

export default Dashboard;
