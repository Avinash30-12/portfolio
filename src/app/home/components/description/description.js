import React from 'react'
import styles from './description.module.css'


export default function description() {
  return (
    <>
      <div className={`${styles.container} mt-5 p-3`}>
          <div className={styles.describe}>
            <p className={styles.inlineCard}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 
                         1.268-.63 2.39-1.593 3.068a3.745 
                         3.745 0 0 1-1.043 3.296 3.745 
                         3.745 0 0 1-3.296 1.043A3.745 
                         3.745 0 0 1 12 21c-1.268 0-2.39
                         -.63-3.068-1.593a3.746 3.746 0 0 
                         1-3.296-1.043 3.745 3.745 0 0 
                         1-1.043-3.296A3.745 3.745 0 0 1 
                         3 12c0-1.268.63-2.39 1.593-3.068a3.745 
                         3.745 0 0 1 1.043-3.296 3.746 
                         3.746 0 0 1 3.296-1.043A3.746 
                         3.746 0 0 1 12 3c1.268 0 2.39.63 
                         3.068 1.593a3.746 3.746 0 0 1 
                         3.296 1.043 3.746 3.746 0 0 1 
                         1.043 3.296A3.745 3.745 0 0 1 
                         21 12Z"
                    />
                  </svg>
                  Expert Full Stack Developer
            </p>
            <h2 style={{ display: "flex", alignItems: "center", marginBottom: "1.8rem" ,marginTop:"1rem"}}>
                <span style={{ color: "white", fontFamily: "Poppins, sans-serif"}}>
                    Avinash Jha
                  </span>{" "}
                  <span style={{ color: "gray", fontFamily: "'Courier New', monospace" ,marginLeft:"2rem" }}>
                    ,Your Developer
                  </span>
            </h2>
            <p>Brief initial presentation of myself and my previous experiences.</p>
          </div>
            <div className="row">
                  <div className="col-12 col-md-6">
                    <div className={`${styles.cardWrapper} m-3`}>
                      <div className='p-3 m-3'>
                          <img
                            src="/profile.avif"
                            alt="Profile"
                            className={styles.projectImg}
                            style={{ display: "flex", justifyContent: "center", width: "100%" , height: "400px" , borderRadius: "5%" , objectFit: "cover" }}
                          />
                      </div>
                      <div className='m-3'>
                            <h2 className='m-3'>
                          <span
                            style={{
                              background: "linear-gradient(90deg, #fffcfbff, #989898ff)", // gradient colors
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            Hello I am
                          </span>{"  "}
                          <span
                            style={{
                              background: "linear-gradient(90deg, #cdcbcfff, #5b5b5bc2)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              fontFamily: "'Courier New', monospace",
                              marginLeft: "0.5rem",
                            }}
                          >
                              Avinash Jha
                          </span>
                        </h2>

                          <p className=' m-3'>UI/UX Interaction Designer Based in Berlin.</p>
                          <div className='p-3' style={{ display: "flex", justifyContent:"center" , gap:"2rem" , marginBottom:"1rem" , marginTop:"1rem" , cursor:"pointer"}}>
                            <a style={{fontSize:"1.5rem"}}><i className="fa-brands fa-instagram"></i> </a>
                            <a style={{fontSize:"1.5rem" , marginLeft:"1.9rem"}}><i className="fa-brands fa-facebook"></i></a>
                            <a style={{fontSize:"1.5rem" , marginLeft:"1.9rem"}}><i className="fa-brands fa-github"></i></a>
                          </div>
                          <hr style={{ border: "1px solid gray", width: "50%", margin: "0 auto" }} />
                      </div>
                      <div className={`m-5 p-3 ${styles.connect}`}>Connect with me</div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className={`${styles.cardWrapper} m-3 p-4`}>
                      <p style={{color:"gray" , fontSize:"1.2rem"}}>
                        I'm Johan Beker, a dedicated Web Designer & Developer based in the vibrant city of Berlin, Germany. I specialize in creative design with seamless technical execution to craft exceptional digital experiences.
                      </p>
                      <hr style={{ border: "1px solid gray", width: "50%", margin: "0 auto" }} />
                      <div className={styles.card}>
                        <p className={styles.cardItem}>React.js</p>
                        <p className={styles.cardItem}>Next.js</p>
                        <p className={styles.cardItem}>Node.js</p>
                        <p className={styles.cardItem}>MongoDb</p>
                        <p className={styles.cardItem}>Express.js</p>
                        <p className={styles.cardItem}>React Native</p>
                        <p className={styles.cardItem}>Firebase</p>
                        <p className={styles.cardItem}>AWS Cloud</p>
                      </div>
                      <hr style={{ border: "1px solid gray", width: "50%"}} />
                      <div style={{ display: "flex", alignItems: "space-between"}}>
                        <div className={styles.card}>
                          <p className={styles.cardItem}>Freelancer</p>
                          <p className={styles.cardItem}>Backend Developer</p>
                          <p className={styles.cardItem}>Full Stack</p>
                        </div>
                        
                        <div className={styles.card} style={{ marginLeft: "3rem"}}>
                          <p className={styles.cardItem}>Fiber</p>
                          <a style={{textDecoration:"none"}} href="https://www.gurucool.life/" target="_blank" >
                            <p className={styles.cardItem}>GuruCool.life</p>
                          </a>
                          <p className={styles.cardItem}>MERN</p>
                        </div>
                        
                        <div className={styles.card} style={{ marginLeft: "3rem"}}>
                          <p className={styles.cardItem}>2024</p>
                          <p className={styles.cardItem}>Sep, 2025</p>
                          <p className={styles.cardItem}>2022</p>
                        </div>
                      </div>

                    </div>
                  </div>
             </div>
      </div>
    </>
  )
}
