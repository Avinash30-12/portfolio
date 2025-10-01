"use client";
import { useEffect, useRef } from "react";
import styles from "./cursor.module.css";

export default function Cursor() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      // Linear interpolation for smooth movement
      pos.current.x += (mouse.current.x - pos.current.x) * 0.6;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.6;

      cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMouseMove);

    // Hover on project images
    const hoverElements = document.querySelectorAll(".project-img-wrapper");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add(styles.cursorHover);
        cursor.innerHTML = `<span class="${styles.cursorText}">View Project</span>`;
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove(styles.cursorHover);
        cursor.innerHTML = "";
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div ref={cursorRef} className={styles.cursor}></div>;
}
