import Link from "next/link";
import Image from "next/image";
import { getWebSettings } from "@/lib/api";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import styles from "./Footer.module.css";

export default async function Footer() {
    const settings = await getWebSettings();
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Brand & Contact Section */}
                <div className={styles.brandSection}>
                    <div className={styles.logoArea}>
                        <Image
                            src={settings.logoPath || "https://telehealththailand.vercel.app/assets/icon/partner/1.png"}
                            alt="Pharmacy Council Logo"
                            width={54}
                            height={54}
                            className="object-contain"
                        />
                        <div className={styles.titleArea}>
                            <h1 className={styles.siteNameTh}>{settings.siteNameTh}</h1>
                            <p className={styles.siteNameEn}>{settings.siteNameEn}</p>
                        </div>
                    </div>

                    {settings.address && (
                        <p className={styles.address}>{settings.address}</p>
                    )}

                    <div className={styles.contactGrid}>
                        {settings.phone && (
                            <div className={styles.contactItem}>
                                <span className="font-semibold text-[#737300]">โทรศัพท์:</span>
                                <span>{settings.phone}</span>
                            </div>
                        )}
                        {settings.fax && (
                            <div className={styles.contactItem}>
                                <span className="font-semibold text-[#737300]">โทรสาร:</span>
                                <span>{settings.fax}</span>
                            </div>
                        )}
                        {settings.email && (
                            <div className={styles.contactItem}>
                                <span className="font-semibold text-[#737300]">อีเมล:</span>
                                <a href={`mailto:${settings.email}`} className="hover:text-[#737300]">
                                    {settings.email}
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Links Section */}
                <div className={styles.linksSection}>
                    <h3 className={styles.sectionTitle}>ลิงก์ที่เกี่ยวข้อง</h3>
                    <div className={styles.linkList}>
                        <Link href="/about" className={styles.linkItem}>เกี่ยวกับองค์กร</Link>
                        <Link href="/services" className={styles.linkItem}>งานบริการ</Link>
                        <Link href="/news" className={styles.linkItem}>ข่าวสาร</Link>
                        <Link href="/laws" className={styles.linkItem}>กฎหมาย</Link>
                        <Link href="/contact" className={styles.linkItem}>ติดต่อเรา</Link>
                    </div>
                </div>

                {/* Socials Section */}
                <div className={styles.socialSection}>
                    <h3 className={styles.sectionTitle}>ติดตามเรา</h3>
                    <div className={styles.socialIcons}>
                        {settings.facebookUrl && (
                            <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink} title="Facebook">
                                <FaFacebook className="w-5 h-5" />
                            </a>
                        )}
                        {settings.youtubeUrl && (
                            <a href={settings.youtubeUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink} title="YouTube">
                                <FaYoutube className="w-5 h-5" />
                            </a>
                        )}
                        {settings.lineId && (
                            <a href={settings.lineId.startsWith('http') ? settings.lineId : `https://line.me/ti/p/~${settings.lineId}`} target="_blank" rel="noopener noreferrer" className={styles.iconLink} title="LINE">
                                <SiLine className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                © {currentYear} {settings.siteNameEn || "The Pharmacy Council of Thailand"}. All Rights Reserved.
            </div>
        </footer>
    );
}
