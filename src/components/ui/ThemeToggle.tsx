"use client";

import { useTheme } from "@/context/theme-context";
import { Moon, Sun } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={styles.toggleButton}
            aria-label="Toggle theme"
        >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}
