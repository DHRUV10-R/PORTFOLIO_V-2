"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import styles from "./Navbar.module.css";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Workspace", href: "/workspace" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Dhruv<span className={styles.highlight}></span>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
                            >
                                {link.name}
                                {isActive && <span className={styles.activeDot} />}
                            </Link>
                        );
                    })}
                    <ThemeToggle />
                </div>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className={styles.mobileMenu}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={styles.mobileLink}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className={styles.mobileThemeWrapper}>
                            <ThemeToggle />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
