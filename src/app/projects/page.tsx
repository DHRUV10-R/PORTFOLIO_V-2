"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";

import { projects as allProjects } from "@/data/projects";

const categories = ["All", "Development", "UI/UX"];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? allProjects
        : allProjects.filter(p => p.category === activeCategory);

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h1 className={styles.title}>My <span className={styles.highlight}>Work</span></h1>
                <p className={styles.subtitle}>
                    A collection of my projects spanning software development and UI/UX design.
                </p>
            </header>

            <div className={styles.filterContainer}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ""}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className={styles.grid}>
                {filteredProjects.map((project) => (
                    <Card key={project.id} className={styles.projectCard}>
                        <div className={styles.imagePlaceholder}>
                            <div className={styles.placeholderOverlay}>
                                <span>{project.title}</span>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.meta}>
                                <span className={styles.categoryBadge}>{project.category}</span>
                            </div>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.tags}>
                                {project.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            <div className={styles.cardAction}>
                                <Button href={`/projects/${project.id}`} variant="outline" className={styles.smBtn}>View Case Study</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
