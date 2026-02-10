import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Layers } from "lucide-react";
import Card from "@/components/ui/Card";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default async function ProjectDetailsPage({ params }: PageProps) {
    // Await the params object before accessing its properties
    const { id } = await params;
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        notFound();
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Link href="/projects" className={styles.backLink}>
                    <ArrowLeft size={20} /> Back to Projects
                </Link>

                <header className={styles.header}>
                    <div className={styles.category}>{project.category}</div>
                    <h1 className={styles.title}>{project.title}</h1>
                    <div className={styles.tags}>
                        {project.tags.map(tag => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </header>

                <div className={styles.grid}>
                    <div className={styles.mainContent}>
                        <Card className={styles.contentCard}>
                            <h2 className={styles.sectionTitle}>Overview</h2>
                            <p className={styles.description}>{project.fullDescription}</p>

                            <h3 className={styles.subTitle}>Key Features</h3>
                            <ul className={styles.featureList}>
                                {project.features?.map((feature, idx) => (
                                    <li key={idx} className={styles.featureItem}>
                                        <CheckCircle2 size={18} className={styles.icon} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>

                    <div className={styles.sidebar}>
                        <Card className={styles.sidebarCard}>
                            <h3 className={styles.sidebarTitle}>
                                <Layers size={20} /> Tech Stack
                            </h3>
                            <div className={styles.toolList}>
                                {project.tools?.map(tool => (
                                    <span key={tool} className={styles.toolTag}>{tool}</span>
                                ))}
                            </div>
                            {/* Add links here if you have them in the data */}
                            <div className={styles.actions}>
                                <Button fullWidth>View Live Demo</Button>
                                <Button variant="outline" fullWidth>Source Code</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
