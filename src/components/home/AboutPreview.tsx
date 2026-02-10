import Link from "next/link";
import Button from "../ui/Button";
import styles from "./AboutPreview.module.css";

export default function AboutPreview() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>About <span className={styles.highlight}>Me</span></h2>
                    <p className={styles.description}>
                        I am a Master's student in Computer Science with a passion for building exceptional digital experiences.
                        My journey combines technical expertise in algorithms and systems with a deep appreciation for User Interface and User Experience design.
                    </p>
                    <p className={styles.description}>
                        When I'm not coding, I'm exploring the latest design trends, optimizing performance, or learning about new technologies in the web ecosystem.
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>2+</span>
                            <span className={styles.statLabel}>Years Coding</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>10+</span>
                            <span className={styles.statLabel}>Projects</span>
                        </div>
                    </div>
                    <Button href="/about" variant="primary">More About Me</Button>
                </div>
                <div className={styles.visual}>
                    <div className={styles.profileCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardAvatar}>
                                <img src="/profilo.jpg" alt="Dhruv Rathod" className={styles.avatarImage} />
                            </div>
                            <div>
                                <h3 className={styles.cardName}>Dhruv Rathod</h3>
                                <p className={styles.cardRole}>MSc CS Student</p>
                            </div>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.cardTag}>UI/UX Designer</div>
                            <div className={styles.cardTag}>Full Stack Dev</div>
                            <div className={styles.cardTag}>Flutter Expert</div>
                            <div className={styles.cardTag}>Researcher</div>
                        </div>
                        <div className={styles.cardFooter}>
                            <div className={styles.statusDot}></div>
                            <span>Building beautiful software</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
