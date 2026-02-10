import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <span className={styles.logo}>Port<span className={styles.highlight}>folio</span></span>
                        <p className={styles.tagline}>Crafting better digital experiences.</p>
                    </div>
                    <div className={styles.links}>
                        <Link href="/projects">Projects</Link>
                        <Link href="/workspace">Workspace</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Dhruv Rathod. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
