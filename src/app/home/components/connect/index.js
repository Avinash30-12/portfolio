import React from 'react'
import styles from "./index.module.css"

export default function index() {
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
                <h1 style={{ marginBottom: "1.8rem", marginTop: "0.7rem"  }}>
                  <span style={{ color: "white", fontFamily: "Poppins, sans-serif", fontSize: "3rem" }}>
                    Let's Grow 
                  </span>{" "}
                  <span style={{ color: "gray", fontFamily:"Poppins, sans-serif", marginLeft: "1rem", fontSize: "3rem" }}>
                    Together
                  </span>
                </h1>
                <hr style={{ borderColor: "gray", marginTop: "2rem", marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.3rem", color: "grey" }}>
                  Web Developer 
                </h3>
                <p>Showcasing sleek, high-performance designs tailored for impact</p>
                <hr style={{ borderColor: "gray", marginTop: "2rem", marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.3rem", color: "grey" }}>
                  App Developer
                </h3>
                <p>Building visually stunning, user-focused that elevate brands.</p>
                </div>
                 <div className="d-flex flex-row gap-1 mt-2 justify-content-left mb-5" style={{marginLeft:"2rem"}}>
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
                <div className={styles.button}>Get Started Now</div>
              </div>
            </div>
            <div className='col-md-5 d-flex flex-column justify-content-center align-items-center'>
               <img src="/connect.avif" alt="connect" style={{width:"100%" , marginRight:"5rem"}}/> 
            </div>
        </div>
    </div>
    </>
  )
}
