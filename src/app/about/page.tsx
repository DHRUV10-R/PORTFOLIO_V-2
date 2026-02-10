"use client";

import Card from "@/components/ui/Card";
import styles from "./page.module.css";
import { GraduationCap, Briefcase, Award, Languages, User, Calendar, MapPin, Trophy } from "lucide-react";

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.imageContainer}>
                    <img src="/profilo.jpg" alt="Dhruv Rathod" className={styles.profileImage} />
                </div>
                <h1 className={styles.title}>About <span className={styles.highlight}>Dhruv</span></h1>
                <p className={styles.subtitle}>
                    MSc Computer Science Student & UI/UX Designer based in Thane.
                </p>
            </header>

            <div className={styles.grid}>
                {/* Personal Details */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}><User className={styles.icon} /> Personal Details</h2>
                    <Card className={styles.card}>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <span className={styles.label}>Name:</span> Dhruv Rathod
                            </li>
                            <li className={styles.listItem}>
                                <span className={styles.label}><MapPin size={16} /> Location:</span> Thane
                            </li>
                            <li className={styles.listItem}>
                                <span className={styles.label}><Languages size={16} /> Languages:</span> English (Fluent), Hindi (Spoken), Gujarati (Spoken)
                            </li>
                        </ul>
                    </Card>
                </section>

                {/* Education */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}><GraduationCap className={styles.icon} /> Education</h2>
                    <div className={styles.timeline}>
                        <Card className={styles.timelineItem}>
                            <h3 className={styles.itemTitle}>M.Sc Computer Science</h3>
                            <p className={styles.institution}>Mithibai College of Arts, Chauhan Institute of Science</p>
                            <span className={styles.date}>Present</span>
                        </Card>
                        <Card className={styles.timelineItem}>
                            <h3 className={styles.itemTitle}>B.Sc Computer Science</h3>
                            <p className={styles.institution}>Mumbai University</p>
                            <div className={styles.meta}>
                                <span className={styles.score}>Score: 7.49 CGPA</span>
                            </div>
                        </Card>
                        <Card className={styles.timelineItem}>
                            <h3 className={styles.itemTitle}>Higher Secondary (Class XII)</h3>
                            <p className={styles.institution}>Maharashtra Board</p>
                            <div className={styles.meta}>
                                <span className={styles.date}>2022</span>
                                <span className={styles.score}>54%</span>
                            </div>
                        </Card>
                        <Card className={styles.timelineItem}>
                            <h3 className={styles.itemTitle}>Secondary (Class X)</h3>
                            <p className={styles.institution}>Maharashtra Board</p>
                            <div className={styles.meta}>
                                <span className={styles.date}>2020</span>
                                <span className={styles.score}>73.6%</span>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* Internships */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}><Briefcase className={styles.icon} /> Internships</h2>
                    <div className={styles.timeline}>
                        <Card className={styles.timelineItem}>
                            <h3 className={styles.itemTitle}>CODSOFT</h3>
                            <span className={styles.date}>August 2024</span>
                            <ul className={styles.detailsList}>
                                <li>Learnt User Flow, Wireframing, and Prototyping.</li>
                                <li>Built designs for mobile phones and websites.</li>
                            </ul>
                        </Card>
                        <Card className={styles.timelineItem}>
                            <h3 className={styles.itemTitle}>BHARAT INTERN</h3>
                            <span className={styles.date}>June 2024 - July 2024</span>
                            <ul className={styles.detailsList}>
                                <li>Gained experience in creating portfolios and weather websites.</li>
                            </ul>
                        </Card>
                    </div>
                </section>

                {/* Achievements & Certifications */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}><Trophy className={styles.icon} /> Achievements & Certifications</h2>
                    <Card className={styles.card}>
                        <ul className={styles.achievementList}>
                            <li>
                                <Award size={18} className={styles.bulletIcon} />
                                <span><strong>Nakuri Campus Young Turks:</strong> Data Structure and Algorithm Certification</span>
                            </li>
                            <li>
                                <Award size={18} className={styles.bulletIcon} />
                                <span>Participated in <strong>Avishkar Competition</strong> during B.Sc</span>
                            </li>
                            <li>
                                <Award size={18} className={styles.bulletIcon} />
                                <span>Participated in <strong>Figma Makethon</strong></span>
                            </li>
                            <li>
                                <Award size={18} className={styles.bulletIcon} />
                                <span>Top 10 in class during schooling</span>
                            </li>
                        </ul>
                    </Card>
                </section>
            </div>
        </div>
    );
}
