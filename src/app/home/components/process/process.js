"use client";
import React from "react";
import styles from "./process.module.css";

export default function Process() {
  const steps = [
     { step: "Step 1", title: "Grab Your Designs", text: "Tell me your unique vision, and I'll create stunning, functional designs that perfectly align with your goals", number: 1 ,icon: "fa-solid fa-list-check"},
  { step: "Step 2", title: "Develop the Idea", text: "Together, we'll refine the concept and make it technically sound and user-friendly.", number: 2 ,icon: "fa-solid fa-pen"},
  { step: "Step 3", title: "Kickstart Development", text: "I expertly transform your designs into a powerful, scalable solution, fully ready to launch", number: 3 ,icon: "fa-solid fa-code"},
  { step: "Step 4", title: "Launch & Deliver And Hand Over", text: "Receive a fully tested, polished, and high-quality product tailored to your needs with ongoing support", number: 4 ,icon: "fa-solid fa-handshake"}
  ];
  return (
    <div className={`${styles.container} mt-5 p-3`}>
      <div className={styles.describe}>
        <p className={styles.inlineCard}>
          <i className="fa-regular fa-circle-dot"></i>
          How it Works
        </p>
        <h1 style={{ display: "flex", alignItems: "center", marginBottom: "1.8rem" ,marginTop:"1rem" , fontSize:"3rem"}}>
          <span style={{ color: "white", fontFamily: "Poppins, sans-serif" , fontSize:"3rem"}}>
            Process
          </span>{" "}
          <span style={{ color: "gray", fontFamily: "'Courier New', monospace" ,marginLeft:"2rem" , marginTop:"0.5rem"}}>
            is Everything
          </span>
        </h1>
        <p style={{fontSize:"1.3rem"}}>Simple, streamlined process is what gets you results</p>
      </div>

      {/* Scrolling cards */}
      <div className={styles.scrollWrapper}>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollContent}>
          {steps.concat(steps).map((item, index) => (
            <div key={index} className={styles.processCard}>
              <div className={styles.stepBadge}>{item.number}</div>
              <i className={`${item.icon}`} style={{ fontSize: "1.5rem", marginBottom: "1rem" }}></i>
              <h3>{item.title}</h3>
              <p style={{ color: "gray", fontSize: "0.95rem" }}>{item.text}</p>
              <hr style={{ borderColor: "rgba(255,255,255,0.2)" }}/>
              <div style={{ fontWeight: "bold" }}>{item.step}</div>
            </div>
          ))}
        </div>
      </div>
      </div>

      <div className={`mt-5 p-3 ${styles.stepCard}`}>
            <div className={styles.stepCardText}>
              <h2>I am with you in every step</h2>
              <p>Alongside you at each step for seamless experience</p>
            </div>
            <div className={styles.stepCardButtons}>
              <div className={`btn ${styles.btn}`}>See All Projects</div>
              <div className={styles.button}>Contact Now</div>
            </div>
      </div>

    </div>
  );
}
