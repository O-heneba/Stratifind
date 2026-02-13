// components/ErrorElement.jsx
import React from "react";
import { useRouteError, isRouteErrorResponse, Link, useNavigate } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();
  const navigate = useNavigate();
  
  // Check if it's a route error response (404, etc.)
  const isRouteError = isRouteErrorResponse(error);
  
  // Determine error type and message
  let title = "Oops! Something went wrong";
  let message = "We're sorry, but we encountered an unexpected error.";
  let statusCode = null;
  let statusText = "";
  
  if (isRouteError) {
    statusCode = error.status;
    statusText = error.statusText || "";
    
    if (statusCode === 404) {
      title = "Page Not Found";
      message = "The page you're looking for doesn't exist or has been moved.";
    } else if (statusCode === 401) {
      title = "Unauthorized";
      message = "You need to be logged in to access this page.";
    } else if (statusCode === 403) {
      title = "Access Denied";
      message = "You don't have permission to access this page.";
    } else if (statusCode === 500) {
      title = "Server Error";
      message = "Something went wrong on our end. Please try again later.";
    }
  } else if (error instanceof Error) {
    // JavaScript error
    message = error.message;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundColor: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
          backgroundColor: "white",
          padding: "3rem 2rem",
          borderRadius: "24px",
          boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)",
          border: "1px solid #e2e8f0",
        }}
      >
        {/* Error Icon */}
        <div style={{ marginBottom: "1.5rem" }}>
          {statusCode === 404 ? (
            <span style={{ fontSize: "5rem", lineHeight: 1 }}>🔍</span>
          ) : statusCode === 401 || statusCode === 403 ? (
            <span style={{ fontSize: "5rem", lineHeight: 1 }}>🔒</span>
          ) : (
            <span style={{ fontSize: "5rem", lineHeight: 1 }}>⚠️</span>
          )}
        </div>

        {/* Status Code */}
        {statusCode && (
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#2563eb",
              marginBottom: "0.5rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Error {statusCode}
          </p>
        )}

        {/* Title */}
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: "700",
            color: "#0f172a",
            marginBottom: "1rem",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>

        {/* Error Message */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "#475569",
            marginBottom: "2rem",
            lineHeight: 1.6,
          }}
        >
          {message}
          {statusText && ` ${statusText}`}
        </p>

        {/* Development-only error details */}
        {process.env.NODE_ENV === "development" && error instanceof Error && (
          <div
            style={{
              marginBottom: "2rem",
              padding: "1rem",
              backgroundColor: "#fee2e2",
              border: "1px solid #fecaca",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <p
              style={{
                color: "#991b1b",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              🐛 Development Error:
            </p>
            <p
              style={{
                color: "#b91c1c",
                fontFamily: "monospace",
                fontSize: "0.9rem",
                marginBottom: "0.5rem",
              }}
            >
              {error.message}
            </p>
            {error.stack && (
              <pre
                style={{
                  color: "#7f1d1d",
                  fontFamily: "monospace",
                  fontSize: "0.8rem",
                  overflowX: "auto",
                  padding: "0.5rem",
                  backgroundColor: "#fef2f2",
                  borderRadius: "4px",
                }}
              >
                {error.stack.split("\n").slice(0, 3).join("\n")}
              </pre>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => navigate(-1)}
            style={{
              padding: "0.8rem 1.8rem",
              backgroundColor: "white",
              color: "#1e293b",
              border: "1px solid #cbd5e1",
              borderRadius: "40px",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f1f5f9";
              e.currentTarget.style.borderColor = "#94a3b8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.borderColor = "#cbd5e1";
            }}
          >
            ← Go Back
          </button>
          
          <Link
            to="/"
            style={{
              padding: "0.8rem 1.8rem",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "40px",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
              textDecoration: "none",
              transition: "background-color 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1d4ed8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#2563eb";
            }}
          >
            Go Home
          </Link>
          
          {statusCode === 401 && (
            <Link
              to="/login"
              style={{
                padding: "0.8rem 1.8rem",
                backgroundColor: "#059669",
                color: "white",
                border: "none",
                borderRadius: "40px",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer",
                textDecoration: "none",
                transition: "background-color 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#047857";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#059669";
              }}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ErrorElement;