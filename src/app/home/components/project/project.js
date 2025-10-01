"use client";
import React from "react";
import styles from "./project.module.css"; // Your CSS for masonry/item

export default function Projects() {
  return (
    <section className="container py-0">
      <div className={styles.masonry}>
        <div className={styles.item}>
          <div className={`${styles.cardWrapper} project-img-wrapper`}>
            <img src="/img1.avif" alt="Project 1" className={styles.projectImg} />
          </div>
        </div>
        <div className={styles.item}>
          <div className={`${styles.cardWrapper} project-img-wrapper`}>
            <img src="/img2.avif" alt="Project 2" className={styles.projectImg} />
          </div>
        </div>
        <div className={styles.item}>
          <div className={`${styles.cardWrapper} project-img-wrapper`}>
            <img src="/img3.avif" alt="Project 3" className={styles.projectImg} />
          </div>
        </div>
        <div className={styles.item}>
          <div className={`${styles.cardWrapper} project-img-wrapper`}>
            <img src="/img4.avif" alt="Project 4" className={styles.projectImg} />
          </div>
        </div>
      </div>
    </section>
  );
}
