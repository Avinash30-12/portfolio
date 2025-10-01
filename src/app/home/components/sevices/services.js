import React from 'react'
import styles from "./service.module.css"

export default function services() {

  const skills = [
  { name: "node.js", icon: "fa-brands fa-node-js" },
  { name: "react.js", icon:"fa-brands fa-react"},
  { name: "express.js", img:"/express.webp" },
  { name: "mongodb", icon: "fa-solid fa-database" },
  { name: "next.js", img:"/nextjs.jpeg" },
  { name: "typescript", icon: "fa-solid fa-code" },
  { name: "redux", icon: "fa-solid fa-diagram-project" },
  { name: "docker", icon: "fa-brands fa-docker" },
  { name: "aws", icon:"fa-brands fa-aws"},
  { name: "git", icon: "fa-brands fa-git-alt" },
  { name: "html5", icon: "fa-brands fa-html5" },
  { name: "css3", icon: "fa-brands fa-css3-alt" },
  { name: "javascript", icon: "fa-brands fa-js" },
  { name: "figma", icon:"fa-brands fa-figma"},
  { name: "tailwindcss", img:"/tailwind.png" },
  { name: "bootstrap", icon:"fa-brands fa-bootstrap"},
  { name: "materialui", img:"/materialui.png" },
  {name: "python", icon: "fa-brands fa-python" },
  {name: "java", icon: "fa-brands fa-java" },
  {name:"react native", icon: "fa-brands fa-react" },
  {name:"firebase", img:"/firebase.png" },


];

  return (
   <>
    <div className={`${styles.container} mt-5 p-3`}>
        <div className={styles.describe}>
        <p className={styles.inlineCard}>
          <i style={{paddingRight:"1.4rem"}} className="fa-regular fa-circle-dot"></i>
          Services to be Provided
        </p>
        <h1 style={{ display: "flex", alignItems: "left", marginBottom: "1.8rem" ,marginTop:"1rem" , fontSize:"3rem"}}>
          <span style={{ color: "white", fontFamily: "Poppins, sans-serif" , fontSize:"3rem"}}>
            Full Stack
          </span>{" "}
          <span style={{ color: "gray", fontFamily: "'Courier New', monospace" ,marginLeft:"1rem"}}>
            designer & developer
          </span>
        </h1>
        <div className='d-flex justify-content-between flex-wrap w-100'>
          <p style={{fontSize:"1.3rem"}}>Simple, streamlined process is what gets you results</p>
          <div className={styles.button}>Contact Now</div>
        </div>
      </div>

      <div className={`row mt-5 ${styles.cards}`}>
        <div >
          <div className={styles.card}>
            <i className="fa-solid fa-code fa-3x"></i>
            <h3>Web Development</h3>
            <p>Creating responsive and dynamic websites using modern technologies like React, Node.js, and more.</p>
            <img style={{width:"95%",height:"95%",objectFit:"cover" , borderRadius:"2rem"}} src="/service1.avif" alt="" />
          </div>
          <div className={styles.card}>
            <i className="fa-solid fa-palette fa-3x"></i>
            <h3>UI/UX Design</h3>
            <p>Designing user-friendly interfaces and experiences that are both visually appealing and functional.</p>
          <img style={{width:"95%",height:"95%",objectFit:"cover" , borderRadius:"2rem"}} src="/service3.png" alt="" />
          </div>
        </div>
        <div >
          <div className={styles.card}>
            <i className="fa-solid fa-mobile-screen-button fa-3x"></i>
            <h3>Mobile App Development</h3>
            <p>Building cross-platform mobile applications using frameworks like React Native and Flutter.</p>
            <img style={{width:"95%",height:"95%",objectFit:"cover" , borderRadius:"2rem"}} src="/service4.jpg" alt="" />
          </div>
          <div className={styles.card}>
            <i className="fa-solid fa-cloud fa-3x"></i>
            <h3>Cloud Services</h3>
            <p>Deploying and managing applications on cloud platforms like AWS, Azure, and Google Cloud.</p>
            <img style={{width:"95%",height:"95%",objectFit:"cover" , borderRadius:"2rem"}} src="/service2.jpeg" alt="" />
          </div>
        </div>
      </div>


<div className="mt-5 p-3">
      {/* Row 1 - Left to Right */}
      <div className={styles.skillsWrapper}>
        <div className={styles.skillsInner}>
          {skills.concat(skills).map((skill, index) => (
            <p key={`row1-${index}`} className={styles.skillsCard}>
              {skill.img ? (
                <img src={skill.img} alt={skill.name} className={styles.iconImg} />
              ) : (
                <i className={`${skill.icon} ${styles.icon}`}></i>
              )}
              {skill.name}
            </p>
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className={styles.skillsWrapper}>
        <div className={styles.skillsInnerReverse}>
          {skills.concat(skills).map((skill, index) => (
            <p key={`row2-${index}`} className={styles.skillsCard}>
              {skill.img ? (
                <img src={skill.img} alt={skill.name} className={styles.iconImg} />
              ) : (
                 <i className={`${skill.icon} ${styles.icon}`}></i>
              )}
              {skill.name}
            </p>
          ))}
        </div>
      </div>
    </div>

    </div>
   </>
  )
}
