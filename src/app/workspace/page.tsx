"use client";

import Card from "@/components/ui/Card";
import styles from "./page.module.css";
import { Monitor, Code, PenTool, Layout, Terminal, Box, User } from "lucide-react";

const services = [
    {
        icon: <PenTool size={32} />,
        title: "UI/UX Design",
        description: "Wireframing, Prototyping, and creating intuitive user experiences. Proficient in Figma and Adobe Suite."
    },
    {
        icon: <Code size={32} />,
        title: "Full Stack Development",
        description: "Building robust applications with the MERN Stack (MongoDB, Express, React, Node.js)."
    },
    {
        icon: <Monitor size={32} />,
        title: "Mobile App Development",
        description: "Creating cross-platform mobile applications using Flutter and Dart with Firebase integration."
    }
];

const techStack = [
    { name: "React.js", icon: <Code /> },
    { name: "Node.js", icon: <Terminal /> },
    { name: "Flutter", icon: <Monitor /> },
    { name: "Firebase", icon: <Box /> },
    { name: "MongoDB", icon: <Box /> },
    { name: "Figma", icon: <PenTool /> },
    { name: "JavaScript", icon: <Code /> },
    { name: "Wireframing", icon: <Layout /> },
    { name: "Canva", icon: <PenTool /> },
    { name: "Leadership", icon: <User /> }
];

export default function WorkspacePage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h1 className={styles.title}>My <span className={styles.highlight}>Workspace</span></h1>
                <p className={styles.subtitle}>
                    The tools, technologies, and services I use to bring ideas to life.
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Services</h2>
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <Card key={index} className={styles.serviceCard}>
                            <div className={styles.iconWrapper}>{service.icon}</div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                        </Card>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Tech Stack & Tools</h2>
                <div className={styles.techGrid}>
                    {techStack.map((tech, index) => (
                        <Card key={index} className={styles.techCard} hoverEffect={true}>
                            <div className={styles.techIcon}>{tech.icon}</div>
                            <span className={styles.techName}>{tech.name}</span>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
