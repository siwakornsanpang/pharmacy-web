"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
    { name: "หน้าแรก", href: "/" },
    { name: "เกี่ยวกับองค์กร", href: "/about" },
    { name: "หน่วยงาน", href: "/organizations", hasDropdown: true },
    { name: "งานบริการ", href: "/services" },
    { name: "งานประชุม", href: "/meetings" },
    { name: "ข่าวสาร", href: "/news" },
    { name: "กฎหมาย", href: "/laws" },
    { name: "บริการอื่นๆ", href: "/other-services" },
    { name: "ติดต่อ", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [lang, setLang] = useState("TH");

    return (
        <nav className={`${styles.navbar} ThaiFont`}>
            {/* Top Banner (Green) */}
            <div className={styles.topBanner}>
                <div className={styles.brandArea}>
                    <Image
                        src="/images/icon.jpg"
                        alt="Pharmacy Council Logo"
                        width={40}
                        height={40}
                        className={styles.logo}
                    />
                    <div>
                        <h1 className={`${styles.brandTitle} ThaiFont`}>
                            สภาเภสัชกรรม
                        </h1>
                        <p className={`${styles.brandSubtitle} ThaiFont`}>
                            THE PHARMACY COUNCIL OF THAILAND
                        </p>
                    </div>
                </div>

                <div className={styles.actionsArea}>
                    {/* Language Switcher */}
                    <div className={styles.langSwitch} onClick={() => setLang(lang === "TH" ? "EN" : "TH")}>
                        <svg
                            className={styles.langSwitchIcon}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                        </svg>
                        <span className={styles.langSwitchText}>{lang}</span>
                        <svg
                            className={styles.langSwitchArrow}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    {/* Login Button */}
                    <button className={`${styles.loginBtn} ThaiFont`}>
                        เข้าสู่ระบบเภสัชกร
                    </button>
                </div>
            </div>

            {/* Lower Nav (White) */}
            <div className={styles.lowerNav}>
                <div className={styles.navContainer}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${isActive ? styles.navItemActive : styles.navItem} ThaiFont`}
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <svg
                                        className={styles.navIcon}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                                {/* Underline for Active */}
                                {isActive && (
                                    <div className={styles.activeIndicator} />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
