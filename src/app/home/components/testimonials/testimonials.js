import React from 'react'
import styles from "./index.module.css";

export default function testimonials() {
  return (
    <>
      <div className={`${styles.container} mt-5 `}>
        <div className='row'>
            <div className='col-md-7 d-flex flex-column'>
                <div className={styles.describe}>
                <p className={styles.inlineCard}>
                  <i className="fa-regular fa-circle-dot"></i>
                  Happy Clients
                </p>
                <h1 style={{ marginBottom: "1.8rem", marginTop: "0.7rem" }}>
                  <span style={{ color: "white", fontFamily: "Poppins, sans-serif", fontSize: "2.8rem" }}>
                    Clients
                  </span>{" "}
                  <span style={{ color: "gray", fontFamily: "'Courier New', monospace", marginLeft: "1rem", fontSize: "2.8rem" }}>
                    love me
                  </span>
                </h1>
                <p style={{ fontSize: "1.3rem", color: "grey" }}>
                  Trusted by 100+ happy clients, adding $250M+ in revenue.
                </p>
                </div>

                <div className={styles.cardsRow}>
                  <div className={styles.card} >
                    <h2>100+</h2>
                    <p>Happy clients</p>
                  </div>
                  <div className={styles.card}>
                    <h2>250+</h2>
                    <p>Projects Done</p>
                  </div>
                  <div className={styles.card}>
                    <h2>50+</h2>
                    <p>Countries Served</p>
                  </div>
                </div>

                <hr style={{ borderColor: "gray", marginTop: "2rem", marginBottom: "1rem" }} />
                 <div className="d-flex flex-row gap-2 mt-2 justify-content-center mb-5">
                <div
                  style={{
                    color: "white",
                    borderRadius: "2rem",
                    padding: "1rem",
                    marginRight: "3rem",
                  }}
                  className={`btn ${styles.btn}`}
                >
                  See All Projects
                </div>
                <div className={styles.button}>Contact Now</div>
              </div>
            </div>
            <div className='col-md-5 d-flex flex-column'>
                <div className={styles.testimonialCard}>
                      <div className={styles.clientCard}>
                        <img
                          src="/client.avif"
                          alt="Jane Cooper"
                          className={styles.clientImage}
                        />
                        <div className={styles.clientInfo}>
                          <h3>Jane Cooper</h3>
                          <p>Harper Education</p>
                        </div>
                      </div>
                    
                      <hr style={{ borderColor: "gray", marginTop: "1rem", marginBottom: "1rem" }} />
                    
                      <div className={styles.testimonialText}>
                        <p>
                          The designs exceeded our expectations! Every element felt purposeful,
                          creating a seamless and visually stunning brand identity.
                        </p>
                      </div>
                </div>
                                <div className={styles.testimonialCard}>
                      <div className={styles.clientCard}>
                        <img
                          src="/client.avif"
                          alt="Jane Cooper"
                          className={styles.clientImage}
                        />
                        <div className={styles.clientInfo}>
                          <h3>Jane Cooper</h3>
                          <p>Harper Education</p>
                        </div>
                      </div>
                    
                      <hr style={{ borderColor: "gray", marginTop: "1rem", marginBottom: "1rem" }} />
                    
                      <div className={styles.testimonialText}>
                        <p>
                          The designs exceeded our expectations! Every element felt purposeful,
                          creating a seamless and visually stunning brand identity.
                        </p>
                      </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
