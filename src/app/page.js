import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./navbar"; // Capitalized
import HomeSection from "./home/page.js"; // Capitalized
import ContactSection from "./contact/page.js"; // Capitalized

export default function Home() {
  return (
    <>
        <HomeSection />
    </>
  );
}
