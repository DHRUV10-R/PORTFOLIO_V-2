"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import styles from "./page.module.css";
import { Mail, Github, Linkedin, Twitter, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h1 className={styles.title}>Get in <span className={styles.highlight}>Touch</span></h1>
                <p className={styles.subtitle}>
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>
            </header>

            <div className={styles.centerContainer}>
                <div className={styles.contactInfo}>
                    <Card className={styles.infoCard}>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}><Phone /></div>
                            <div>
                                <h3 className={styles.infoTitle}>Call Me</h3>
                                <a href="tel:+919594609565" className={styles.emailLink}>+91-9594609565</a>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}><Mail /></div>
                            <div>
                                <h3 className={styles.infoTitle}>Email Me</h3>
                                <a href="mailto:dhruv.prakash.rathod@gmail.com" className={styles.emailLink}>dhruv.prakash.rathod@gmail.com</a>
                            </div>
                        </div>

                        <div className={styles.socialGrid}>
                            <a href="https://github.com/DHRUV10-R" className={styles.socialCard} aria-label="GitHub">
                                <Github size={24} />
                                <span>GitHub</span>
                            </a>
                            <a href="www.linkedin.com/in/dhruv-r-55b888262" className={styles.socialCard} aria-label="LinkedIn">
                                <Linkedin size={24} />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://x.com/DhruvRa17283043" className={styles.socialCard} aria-label="X">
                                <Twitter size={24} />
                                <span>Twitter</span>
                            </a>
                        </div>
                    </Card>
                </div>

                {/* Form removed as per request */}
            </div>
        </div>
    );
}
