"use client";
import React from "react";
import styles from "./page.module.css";

export default function HeroSection() {
  const starPositions = [
    { left: 150, top: 20 },
    { left: 200, top: 60 },
    { left: 150, top: 200 },
  ];
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Falling stars */}
     <div className={styles["hero-stars"]}>
      {starPositions.map((pos, i) => (
        <div
          key={i}
          className={styles["hero-star"]}
          style={{
            left: `${pos.left}px`,
            top: `${pos.top}px`,
            animationDuration: `${3 + i}s`, // different speed
            animationDelay: `${i * 0.5}s`, // staggered start
          }}
        ></div>
        ))}
      </div>

      {/* Hero content + Testimonials */}
      <div style={{ position: "relative", zIndex: 1 }} className="container">
        <div className="row g-4">
          {/* Left Column - Hero Info */}
          <div className="col-12 col-md-6">
            <div className="p-4 rounded-4 mt-5">
              <p
                style={{
                  width: "50%",
                  backgroundColor: "rgba(35, 35, 35, 0.8)",
                  color: "white",
                  textAlign: "center",
                }}
                className="card p-3 shadow rounded-4"
              >
                MERN Full Stack Developer
              </p>
              <h4 className="mt-4" style={{ fontSize: "5rem" , display: "flex", alignItems: "center" }}>
                <span style={{ color: "white", fontFamily: "'Courier New', monospace"}}>
                    Avinash
                  </span>{" "}
                  <span style={{ color: "gray", fontFamily: "'Courier New', monospace" ,marginLeft:"2rem" }}>
                    Jha
                  </span>
              </h4>
              <p className="mt-4">
                MERN Full Stack Developer turning ideas into powerful web apps.
                 Expert in React.js , NEXT.js , Node.js, Express & MongoDB.
                Building digital experiences that inspire and perform.
              </p>
              <div className="d-flex flex-row gap-2 mt-5">
                <div
                  style={{
                    color: "white",
                    borderRadius: "2rem",
                    padding: "1rem",
                  }}
                  className={`btn ${styles.btn}`}
                >
                  See All Projects
                </div>
                <div className={styles.button}>Contact Now</div>
              </div>
            </div>
          </div>

          {/* Middle Column - First Testimonial */}
          <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
            <div
              className={`card p-4 shadow rounded-4 ${styles["float-down"]}`}
              style={{
                width: "220px",
                height: "150px",
                textAlign: "center",
                backgroundColor: "rgba(35, 35, 35, 0.8)",
                color: "#fff",
              }}
            >
              <p className="mb-1">"Working with him was a game changer!"</p>
              <p className="mt-1" style={{ color: "white" }}>- John Doe</p>
            </div>
          </div>

          {/* Right Column - Second Testimonial */}
          <div className="col-12 col-md-3 d-flex align-items-center justify-content-end">
            <div
              className={`card p-4 shadow rounded-4 ${styles["float-up"]}`}
              style={{
                width: "220px",
                height: "150px",
                textAlign: "center",
                backgroundColor: "rgba(35, 35, 35, 0.8)",
                color: "#fff",
              }}
            >
              <p className="mb-1">"We Increased our conversions by 200%"</p>
              <p className="mt-1" style={{ color: "white" }}>- Pranav</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
