import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import {
  getFilteredJobs,
  applyForJob,
  hasUserApplied,
  saveJob,
  unsaveJob,
} from "../../firebase/firestore";
import JobCard from "../../components/JobCard";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    jobType: "",
    location: "",
  });
  const [lastDoc, setLastDoc] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ==============================
  // INITIAL LOAD
  // ==============================
  useEffect(() => {
    const loadInitialJobs = async () => {
      setLoading(true);

      const result = await getFilteredJobs({
        ...filters,
        lastDoc: null,
      });

      setJobs(result.jobs);
      setLastDoc(result.lastVisible);
      setLoading(false);
    };

    loadInitialJobs();
  }, [filters]);

  // ==============================
  // LOAD MORE (Pagination)
  // ==============================
  const loadMore = async () => {
    if (!lastDoc) return;

    setLoading(true);

    const result = await getFilteredJobs({
      ...filters,
      lastDoc,
    });

    setJobs((prev) => [...prev, ...result.jobs]);
    setLastDoc(result.lastVisible);
    setLoading(false);
  };

  // ==============================
  // SEARCH
  // ==============================
  const handleSearch = async () => {
    setLoading(true);

    const result = await getFilteredJobs({
      ...filters,
      lastDoc: null,
    });

    setJobs(result.jobs);
    setLastDoc(result.lastVisible);
    setLoading(false);
  };

  // ==============================
  // APPLY
  // ==============================
  const handleApply = async (job) => {
    const uid = auth.currentUser?.uid;
    if (!uid) return;

    const applied = await hasUserApplied(job.id, uid);

    if (applied) {
      setMessage("Already applied.");
      return;
    }

    await applyForJob({
      jobId: job.id,
      applicantId: uid,
      recruiterId: job.recruiterId,
    });

    setMessage("Application submitted!");
  };

  // ==============================
  // SAVE / UNSAVE
  // ==============================
  const handleSave = async (job, saved) => {
    const uid = auth.currentUser?.uid;
    if (!uid) return;

    if (saved) {
      await unsaveJob(uid, job.id);
    } else {
      await saveJob(uid, job);
    }

    // Refresh list
    handleSearch();
  };

  return (
    <div>
      <h2>Job Marketplace</h2>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search job title..."
        value={filters.search}
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
      />

      {/* FILTERS */}
      <select
        value={filters.category}
        onChange={(e) =>
          setFilters({ ...filters, category: e.target.value })
        }
      >
        <option value="">All Categories</option>
        <option value="Technology">Technology</option>
        <option value="Healthcare">Healthcare</option>
      </select>

      <select
        value={filters.jobType}
        onChange={(e) =>
          setFilters({ ...filters, jobType: e.target.value })
        }
      >
        <option value="">All Types</option>
        <option value="full-time">Full-time</option>
        <option value="remote">Remote</option>
      </select>

      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      {/* JOB LIST */}
      {jobs.length === 0 && !loading && <p>No jobs found.</p>}

      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onApply={handleApply}
          onSave={handleSave}
        />
      ))}

      {/* LOAD MORE */}
      {lastDoc && (
        <button onClick={loadMore} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </button>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default Dashboard;
