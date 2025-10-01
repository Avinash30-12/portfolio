import React, { useEffect, useState } from 'react'
import styles from "./index.module.css";

export default function index() {

   const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className={`${styles.container} mt-5 p-3`}>
      <div className={styles.describe}>
        <p className={styles.inlineCard}>
          <i className="fa-regular fa-circle-dot"></i>
          Why Choose Me
        </p>
        <h1 style={{ display: "flex", alignItems: "center", marginBottom: "1.8rem" ,marginTop:"0.7rem"}}>
          <span style={{ color: "white", fontFamily: "Poppins, sans-serif" , fontSize:"2.8rem"}}>
            Why me as a 
          </span>{" "}
          <span style={{ color: "gray", fontFamily: "'Courier New', monospace" ,marginLeft:"1rem" , marginTop:"0.5rem" , fontSize:"2.8rem"}}>
            FullStack Developer
          </span>
        </h1>
        <p style={{fontSize:"1.3rem" , color:"grey"}}>Why Partner with Me for the Design Excellence</p>
      </div>


        <div className={styles.cardsContainer}>
    
          <div className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.leftCard}>
                  <h3>Skilled Professional</h3>
                  <p>Gain access to top-tier talent with years of experience, ensuring flawless execution.</p>
                </div>
                <div className={styles.rightCard}>
                  <h3>Skilled Professional</h3>
                  <p>Gain access to top-tier talent with years of experience, ensuring flawless execution.</p>
                </div>
              </div>
          </div>
          <div className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.leftCard}>
                  <h3>Skilled Professional</h3>
                  <p>Gain access to top-tier talent with years of experience, ensuring flawless execution.</p>
                </div>
                <div className={styles.rightCard}>
                  <h3>Skilled Professional</h3>
                  <p>Gain access to top-tier talent with years of experience, ensuring flawless execution.</p>
                </div>
              </div>
          </div>
          <div className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.leftCard}>
                  <h3>Skilled Professional</h3>
                  <p>Gain access to top-tier talent with years of experience, ensuring flawless execution.</p>
                </div>
                <div className={styles.rightCard}>
                  <h3>Skilled Professional</h3>
                  <p>Gain access to top-tier talent with years of experience, ensuring flawless execution.</p>
                </div>
              </div>
          </div>
          <div className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.leftCard}>
                  <h3>Skilled Professional</h3>
                  <p>Gain access to top-tier talent with years of experience, ensuring flawless execution.</p>
                </div>
                <div className={styles.rightCard}>
                  <h3>Skilled Professional</h3>
                  <p>Gain access to top-tier talent with years of experience, ensuring flawless execution.</p>
                </div>
              </div>
          </div>
    
        </div>

    </div>
    </>
  )
}
