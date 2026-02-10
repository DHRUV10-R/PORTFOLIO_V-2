import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import AboutPreview from "@/components/home/AboutPreview";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <AboutPreview />
        <FeaturedProjects />
      </main>
    </div>
  );
}
