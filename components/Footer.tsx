import Link from "next/link";
import Image from "next/image";
import { getWebSettings } from "@/lib/api";
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
                            src={settings.logoPath || "https://pharmacycouncil.org/pharmacycouncil/templates/pharmacycouncil_new/images/smaLogo.jpg"}
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
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                        )}
                        {settings.youtubeUrl && (
                            <a href={settings.youtubeUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink} title="YouTube">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                            </a>
                        )}
                        {settings.lineId && (
                            <div className={styles.iconLink} title="Line">
                                <span className={styles.lineBadge}>LINE</span>
                            </div>
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
