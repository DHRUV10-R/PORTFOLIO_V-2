import Link from "next/link";
import Button from "../ui/Button";
import Card from "../ui/Card";
import styles from "./FeaturedProjects.module.css";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
    const featuredProjects = projects.slice(0, 3); // Show top 3

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Featured <span className={styles.highlight}>Projects</span></h2>
                    <p className={styles.subtitle}>A glimpse into my recent work.</p>
                </div>

                <div className={styles.grid}>
                    {featuredProjects.map((project) => (
                        <Card key={project.id} className={styles.projectCard} hoverEffect={true}>
                            <div className={styles.imagePlaceholder}>
                                {/* Replace with Next/Image when you have assets */}
                                <div className={styles.placeholderOverlay}>
                                    <span>{project.title}</span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <div className={styles.cardAction}>
                                    <Button href={`/projects/${project.id}`} variant="outline" className={styles.smBtn}>View Details</Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className={styles.viewMore}>
                    <Button href="/projects" variant="primary">View All Projects</Button>
                </div>
            </div>
        </section>
    );
}
