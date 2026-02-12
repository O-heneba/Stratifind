import React, { useState } from "react";
import { resetPassword } from "../firebase/auth";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const msg = await resetPassword(email);
      setMessage(msg);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}

      <form onSubmit={handleReset}>
        <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Send Reset Link</button>
      </form>

      <p><Link to="/login">Back to Login</Link></p>
    </div>
  );
};

export default ForgotPassword;
