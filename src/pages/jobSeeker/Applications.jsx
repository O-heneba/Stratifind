import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { getApplicationsByUser } from "../../firebase/firestore";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getApplicationsByUser(auth.currentUser.uid);
      setApplications(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>My Applications</h2>

      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        applications.map((app) => (
          <div key={app.id} style={styles.card}>
            <p><strong>Job ID:</strong> {app.jobId}</p>
            <p>
              <strong>Applied On:</strong>{" "}
              {app.appliedAt?.toDate
                ? app.appliedAt.toDate().toLocaleString()
                : "N/A"}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "10px"
  }
};

export default Applications;
