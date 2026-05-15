"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0f2f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Georgia', serif",
        padding: "24px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 440 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          {/* <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#1d9e75",
                letterSpacing: 2,
                fontFamily: "'Georgia', serif",
              }}
            >
              WANDERLUST
            </span>
          </Link> */}
          <h1
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "#111",
              margin: "12px 0 6px",
              fontFamily: "'Georgia', serif",
              letterSpacing: 0.3,
            }}
          >
            Create Account
          </h1>
          <p
            style={{
              fontSize: 14,
              color: "#888",
              margin: 0,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Start your adventure with Wanderlust
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            padding: "36px 40px",
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.06)",
          }}
        >
          <form onSubmit={submit}>
            {/* Full Name */}
            <div style={{ marginBottom: 20 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#333",
                  marginBottom: 7,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Full Name
              </label>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: 15,
                    color: "#bbb",
                  }}
                >
                  👤
                </span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handle}
                  placeholder="Enter your name"
                  required
                  style={{
                    width: "100%",
                    padding: "11px 12px 11px 36px",
                    border: "1.5px solid #e5e7eb",
                    borderRadius: 5,
                    fontSize: 14,
                    color: "#333",
                    background: "#fafafa",
                    outline: "none",
                    fontFamily: "system-ui, sans-serif",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1d9e75")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: 20 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#333",
                  marginBottom: 7,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Email Address
              </label>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: 15,
                    color: "#bbb",
                  }}
                >
                  ✉️
                </span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handle}
                  placeholder="Enter your email"
                  required
                  style={{
                    width: "100%",
                    padding: "11px 12px 11px 36px",
                    border: "1.5px solid #e5e7eb",
                    borderRadius: 5,
                    fontSize: 14,
                    color: "#333",
                    background: "#fafafa",
                    outline: "none",
                    fontFamily: "system-ui, sans-serif",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1d9e75")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: 20 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#333",
                  marginBottom: 7,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Password
              </label>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: 15,
                    color: "#bbb",
                  }}
                >
                  🔒
                </span>
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  value={form.password}
                  onChange={handle}
                  placeholder="Create a password"
                  required
                  style={{
                    width: "100%",
                    padding: "11px 40px 11px 36px",
                    border: "1.5px solid #e5e7eb",
                    borderRadius: 5,
                    fontSize: 14,
                    color: "#333",
                    background: "#fafafa",
                    outline: "none",
                    fontFamily: "system-ui, sans-serif",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1d9e75")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                    color: "#aaa",
                    padding: 4,
                  }}
                >
                  {show ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div style={{ marginBottom: 28 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#333",
                  marginBottom: 7,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Confirm Password
              </label>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: 15,
                    color: "#bbb",
                  }}
                >
                  🔒
                </span>
                <input
                  name="confirm"
                  type={show2 ? "text" : "password"}
                  value={form.confirm}
                  onChange={handle}
                  placeholder="Confirm your password"
                  required
                  style={{
                    width: "100%",
                    padding: "11px 40px 11px 36px",
                    border: "1.5px solid #e5e7eb",
                    borderRadius: 5,
                    fontSize: 14,
                    color: "#333",
                    background: "#fafafa",
                    outline: "none",
                    fontFamily: "system-ui, sans-serif",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1d9e75")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
                <button
                  type="button"
                  onClick={() => setShow2(!show2)}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                    color: "#aaa",
                    padding: 4,
                  }}
                >
                  {show2 ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "13px",
                background: loading ? "#5dca9a" : "#1d9e75",
                color: "#fff",
                border: "none",
                borderRadius: 5,
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: 0.5,
                cursor: loading ? "not-allowed" : "pointer",
                fontFamily: "system-ui, sans-serif",
                transition: "background 0.2s",
                marginBottom: 18,
              }}
            >
              {loading ? "Creating Account…" : "Create Account"}
            </button>

            {/* Divider */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
              <span
                style={{
                  fontSize: 12,
                  color: "#aaa",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Or sign up with
              </span>
              <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
            </div>

            {/* Google */}
            <button
              type="button"
              style={{
                width: "100%",
                padding: "11px",
                background: "#fff",
                color: "#333",
                border: "1.5px solid #e5e7eb",
                borderRadius: 5,
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "system-ui, sans-serif",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#1d9e75";
                e.currentTarget.style.background = "#f7fef9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e5e7eb";
                e.currentTarget.style.background = "#fff";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                />
              </svg>
              Sign Up With Google
            </button>
          </form>
        </div>

        {/* Footer */}
        <p
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 14,
            color: "#888",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Already have an account?{" "}
          <a
            href="/login"
            style={{
              color: "#1d9e75",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
