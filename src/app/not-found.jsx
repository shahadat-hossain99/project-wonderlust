/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(29,158,117,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(29,158,117,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Teal glow top-left */}
      <div
        style={{
          position: "absolute",
          top: -120,
          left: -120,
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(29,158,117,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Teal glow bottom-right */}
      <div
        style={{
          position: "absolute",
          bottom: -80,
          right: -80,
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(29,158,117,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Navbar */}
      <nav
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 48px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: 22,
            fontWeight: 700,
            color: "#1d9e75",
            letterSpacing: 1,
          }}
        >
          Wanderlust
        </span>
        <Link
          href="/"
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 14,
            textDecoration: "none",
            letterSpacing: 1,
            fontFamily: "system-ui, sans-serif",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#1d9e75")}
          onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Main content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
          position: "relative",
          zIndex: 10,
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* 404 Large number */}
        <div
          style={{
            fontSize: "clamp(100px, 20vw, 180px)",
            fontWeight: 700,
            letterSpacing: -8,
            lineHeight: 1,
            background:
              "linear-gradient(135deg, #1d9e75 0%, rgba(29,158,117,0.25) 60%, transparent 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: 8,
            fontFamily: "'Georgia', serif",
            userSelect: "none",
          }}
        >
          404
        </div>

        {/* Divider line */}
        <div
          style={{
            width: 64,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, #1d9e75, transparent)",
            marginBottom: 32,
          }}
        />

        <h1
          style={{
            color: "#fff",
            fontSize: "clamp(22px, 4vw, 36px)",
            fontWeight: 400,
            margin: "0 0 16px",
            textAlign: "center",
            letterSpacing: 0.5,
            fontFamily: "'Georgia', serif",
          }}
        >
          This destination doesn&apos;t exist
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: 16,
            lineHeight: 1.7,
            maxWidth: 400,
            textAlign: "center",
            margin: "0 0 48px",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 300,
          }}
        >
          The page you&apos;re looking for has drifted off the map. Let&apos;s
          get you back on the right route.
        </p>

        {/* Action buttons */}
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            href="/"
            style={{
              background: "#1d9e75",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: 4,
              textDecoration: "none",
              fontSize: 14,
              fontFamily: "system-ui, sans-serif",
              letterSpacing: 1.5,
              textTransform: "uppercase",
              fontWeight: 500,
              transition: "background 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#0f6e56";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#1d9e75";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Go Home
          </Link>
          <Link
            href="/destinations"
            style={{
              background: "transparent",
              color: "rgba(255,255,255,0.7)",
              padding: "14px 32px",
              borderRadius: 4,
              textDecoration: "none",
              fontSize: 14,
              fontFamily: "system-ui, sans-serif",
              letterSpacing: 1.5,
              textTransform: "uppercase",
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.15)",
              transition: "border-color 0.2s, color 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#1d9e75";
              e.target.style.color = "#fff";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.15)";
              e.target.style.color = "rgba(255,255,255,0.7)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Explore Destinations
          </Link>
        </div>

        {/* Decorative compass */}
        <div
          style={{
            marginTop: 72,
            opacity: 0.12,
            fontSize: 80,
            userSelect: "none",
            lineHeight: 1,
          }}
        >
          ✦
        </div>
      </main>

      {/* Footer */}
      {/* <footer
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "24px",
          color: "rgba(255,255,255,0.2)",
          fontSize: 12,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: 1,
        }}
      >
        © 2026 Wanderlust. All rights reserved.
      </footer> */}

      <style>{`
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
