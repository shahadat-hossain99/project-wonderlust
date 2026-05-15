"use client";
import { useState, useEffect } from "react";

export default function LoadingPage() {
  const [progress, setProgress] = useState(0);
  const [phrase, setPhrase] = useState(0);

  const phrases = [
    "Charting your course…",
    "Discovering hidden gems…",
    "Curating experiences…",
    "Almost there…",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 4 + 1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setPhrase((p) => (p + 1) % phrases.length);
    }, 1800);
    return () => clearInterval(phraseInterval);
  }, []);

  const prog = Math.min(100, Math.round(progress));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid */}
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

      {/* Glow center */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(29,158,117,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
          animation: "pulse 3s ease-in-out infinite",
        }}
      />

      {/* Glow corner */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 350,
          height: 350,
          background:
            "radial-gradient(circle, rgba(29,158,117,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          top: 32,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 20,
          fontWeight: 700,
          color: "#1d9e75",
          letterSpacing: 2,
          fontFamily: "'Georgia', serif",
        }}
      >
        Wanderlust
      </div>

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 10,
          padding: "0 24px",
        }}
      >
        {/* Animated compass ring */}
        <div
          style={{
            position: "relative",
            width: 120,
            height: 120,
            marginBottom: 48,
          }}
        >
          {/* Outer ring */}
          <svg
            width="120"
            height="120"
            style={{ position: "absolute", inset: 0 }}
          >
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="rgba(29,158,117,0.12)"
              strokeWidth="1"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#1d9e75"
              strokeWidth="1.5"
              strokeDasharray={`${prog * 3.39} 339`}
              strokeDashoffset="0"
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
              style={{ transition: "stroke-dasharray 0.15s ease" }}
            />
          </svg>

          {/* Inner spinning dashes */}
          <svg
            width="120"
            height="120"
            style={{
              position: "absolute",
              inset: 0,
              animation: "spin 8s linear infinite",
            }}
          >
            <circle
              cx="60"
              cy="60"
              r="44"
              fill="none"
              stroke="rgba(29,158,117,0.2)"
              strokeWidth="1"
              strokeDasharray="4 12"
            />
          </svg>

          {/* Center percent */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#fff",
                lineHeight: 1,
                fontFamily: "'Georgia', serif",
              }}
            >
              {prog}%
            </span>
            <span
              style={{
                fontSize: 9,
                color: "rgba(255,255,255,0.3)",
                letterSpacing: 2,
                marginTop: 3,
              }}
            >
              LOADING
            </span>
          </div>
        </div>

        {/* Animated phrase */}
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 15,
            letterSpacing: 0.5,
            margin: "0 0 40px",
            height: 24,
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
            transition: "opacity 0.4s ease",
            textAlign: "center",
          }}
        >
          {phrases[phrase]}
        </p>

        {/* Progress bar */}
        <div
          style={{
            width: "min(320px, 80vw)",
            height: 1,
            background: "rgba(255,255,255,0.07)",
            borderRadius: 99,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: `${prog}%`,
              background: "linear-gradient(90deg, #0f6e56, #1d9e75)",
              borderRadius: 99,
              transition: "width 0.15s ease",
              boxShadow: "0 0 8px rgba(29,158,117,0.5)",
            }}
          />
        </div>

        {/* Dots row */}
        <div style={{ display: "flex", gap: 8, marginTop: 32 }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#1d9e75",
                opacity: 0.3,
                animation: `dot 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Footer hint */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          color: "rgba(255,255,255,0.15)",
          fontSize: 11,
          letterSpacing: 2,
          textTransform: "uppercase",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        Your gateway to extraordinary travel
      </div>

      <style>{`
        * { box-sizing: border-box; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes dot {
          0%, 80%, 100% { opacity: 0.3; transform: scale(1); }
          40% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}
