"use client"; // needed for useRouter

import { useRouter } from "next/navigation";
import styles from "./navbar.module.css";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} style={{marginLeft:"3rem"}} onClick={() => router.push("/")}>
        Home
      </div>
      <ul className={styles.navLinks}>
        <li onClick={() => router.push("/work")}>Work</li>
        <li onClick={() => router.push("/project")}>Projects</li>
        <li onClick={() => router.push("/testimonials")}>Testimonials</li>
        <li style={{marginRight:"5rem"}} onClick={() => router.push("/contact")}>Contact</li>
      </ul>
    </nav>
  );
}
