import styles from "./Button.module.css";
import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    href?: string;
    className?: string;
    onClick?: () => void;
    target?: string;
    fullWidth?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    href,
    className = "",
    onClick,
    target,
    fullWidth = false,
}: ButtonProps) {
    const combinedClassName = `${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ""} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName} onClick={onClick} target={target}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} onClick={onClick}>
            {children}
        </button>
    );
}
