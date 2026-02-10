import styles from "./Card.module.css";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function Card({ children, className = "", hoverEffect = true }: CardProps) {
    return (
        <div
            className={`${styles.card} ${hoverEffect ? styles.hoverEffect : ""} ${className}`}
        >
            {children}
        </div>
    );
}
