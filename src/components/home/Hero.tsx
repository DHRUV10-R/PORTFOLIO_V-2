import styles from "./Hero.module.css";
import Button from "../ui/Button";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.badge}>Designer & Developer</div>
                <h1 className={styles.title}>
                    Creating <span className={styles.highlight}>Digital Experiences</span> That Matter.
                </h1>
                <p className={styles.subtitle}>
                    I build responsive, high-performance web applications with a focus on UI/UX and modern engineering.
                </p>
                <div className={styles.actions}>
                    <Button href="/projects" variant="primary">
                        View Projects
                    </Button>
                    <Button href="/contact" variant="outline">
                        Contact Me
                    </Button>
                </div>
            </div>

            {/* Abstract Background Shapes */}
            <div className={styles.backgroundShapes}>
                <div className={styles.shape1}></div>
                <div className={styles.shape2}></div>
            </div>
        </section>
    );
}
