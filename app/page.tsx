import { getHomeContent, getWebSettings } from "@/lib/api";
import Link from "next/link";
import BannerCarousel from "@/components/home/BannerCarousel";
import LicenseSearch from "@/components/home/LicenseSearch";
import styles from "./page.module.css";
import Image from "next/image";

export const dynamic = 'force-dynamic';

const publicServices = [
  {
    title: "ขอคำปรึกษาเรื่องยา",
    desc: "แนะนำการใช้ยาอย่าง\nถูกต้องโดยเภสัชกร",
    href: "/services",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/>
      </svg>
    ),
  },
  {
    title: "ร้านยาใกล้ฉัน",
    desc: "ค้นหาร้านยาและเวลาเปิด\nปิดใกล้ตำแหน่งของคุณ",
    href: "/services",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    title: "ร้องเรียนเภสัชกร",
    desc: "แจ้งปัญหาการให้บริการ\nหรือพฤติกรรมไม่เหมาะสม",
    href: "/services",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
        <line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>
      </svg>
    ),
  },
  {
    title: "แจ้งเบาะแสร้านยา",
    desc: "รายงานร้านยาที่อาจไม่ปฏิบัติ\nตามมาตรฐาน",
    href: "/services",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
];

const pharmacistServices = [
  {
    title: "ประกาศ\nนียบัตร",
    desc: "คำขอประกาศนียบัตร\nวิชาชีพเภสัชกรรม",
    href: "/services",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/>
        <path d="M7 12h10"/><path d="M7 16h6"/>
      </svg>
    ),
  },
  {
    title: "ต่อใบ\nอนุญาต",
    desc: "คำขอต่ออายุใบอนุญาตเป็น\nผู้ประกอบวิชาชีพเภสัชกรรม",
    href: "/services",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>
      </svg>
    ),
  },
  {
    title: "คำขอ\nสมาชิก",
    desc: "คำขอสมัครสมาชิก\nสภาเภสัชกรรม",
    href: "/services",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <circle cx="20" cy="11" r="3"/><path d="M20 8v6"/><path d="M17 11h6"/>
      </svg>
    ),
  },
  {
    title: "คำขอ\nขึ้นทะเบียน",
    desc: "คำขอขึ้นทะเบียนและรับใบ\nอนุญาตเป็นผู้ประกอบวิชาชีพ",
    href: "/services",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="12" x2="12" y1="18" y2="12"/>
        <line x1="9" x2="15" y1="15" y2="15"/>
      </svg>
    ),
  },
];

const pharmacistRoles = [
  {
    title: "วิจัยพัฒนา และผลิตยา",
    desc: "วิจัยและพัฒนายาใหม่\nควบคุมการผลิตตาม\nมาตรฐานสากล เพื่อ\nให้ได้ยาที่มีคุณภาพ\nแก่ประชาชน",
    image: "/images/home/image1.png",
  },
  {
    title: "ให้ข้อมูลยา",
    desc: "เป็นผู้เชี่ยวชาญด้านยา\nให้ข้อมูล ที่ถูกต้องแก่\nบุคลากรทาง\nการแพทย์",
    image: "/images/home/image2.png",
  },
  {
    title: "คัดกรองและให้คำปรึกษา",
    desc: "คัดกรองความเสี่ยง ให้คำปรึกษาด้านยา\nและสุขภาพแก่ประชาชน",
    image: "/images/home/image3.png",
  },
  {
    title: "ดูแลจัดการด้านยา",
    desc: "ตรวจสอบใบสั่งยา ประเมินความเหมาะสม\nป้องกัน แก้ไขปัญหาด้านยา\nและจ่ายยาอย่างปลอดภัย",
    image: "/images/home/image4.png",
  },
  {
    title: "คุ้มครองความปลอดภัย",
    desc: "เฝ้าระวังคุณภาพ ความปลอดภัย\nของยา และผลิตภัณฑ์สุขภาพเพื่อ\nคุ้มครองผู้บริโภค",
    image: "/images/home/image5.png",
  },
];

export default async function Home() {
  const [homeContent, settings] = await Promise.all([
    getHomeContent(),
    getWebSettings(),
  ]);

  const activeBanners = (homeContent.banners || [])
    .filter(b => b.active)
    .sort((a, b) => a.order - b.order);

  return (
    <div className={styles.page}>
      {/* === Banner Carousel 16:9 === */}
      <BannerCarousel banners={activeBanners} slogan={settings.slogan} />

      {/* === ค้นหารายชื่อ === */}
      <section className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <LicenseSearch />
        </div>
      </section>

      {/* === บริการประชาชน === */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>บริการประชาชน</h2>
            <Link href="/services" className={styles.viewAll}>ดูทั้งหมด →</Link>
          </div>
          <div className={styles.publicGrid}>
            {publicServices.map((svc, i) => (
              <Link key={i} href={svc.href} className={styles.publicCard}>
                <div className={styles.publicCardIcon}>{svc.icon}</div>
                <h3 className={styles.publicCardTitle}>{svc.title}</h3>
                <p className={styles.publicCardDesc}>{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === บริการเภสัชกร === */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>บริการเภสัชกร</h2>
            <Link href="/services" className={styles.viewAll}>ดูทั้งหมด →</Link>
          </div>
          <div className={styles.pharmaGrid}>
            {pharmacistServices.map((svc, i) => (
              <Link key={i} href={svc.href} className={styles.pharmaCard}>
                <div className={styles.pharmaCardIcon}>{svc.icon}</div>
                <h3 className={styles.pharmaCardTitle}>{svc.title}</h3>
                <p className={styles.pharmaCardDesc}>{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>


            {/* === บทบาทหน้าที่หลักของเภสัช === */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.roleGrid}>
            
            {/* การ์ดแรก (สีเขียว Title) */}
            <div className={styles.roleTitleCard}>
              <div className={styles.roleTitleIcon}>
                <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className={styles.roleTitleText}>
                บทบาท<br />หน้าที่หลัก<br />ของเภสัชกร
              </h2>
            </div>

            {/* การ์ดเนื้อหาพร้อมรูปภาพ */}
            {pharmacistRoles.map((role, i) => (
              <div key={i} className={styles.roleCard}>
                <div className={styles.roleCardContent}>
                  <h3 className={styles.roleCardTitle}>{role.title}</h3>
                  <p className={styles.roleCardDesc}>{role.desc}</p>
                </div>
                <div className={styles.roleCardImage}>
                  {/* เรียกใช้งานรูปจากโฟลเดอร์ public */}
                  <Image 
                    src={role.image} 
                    alt={role.title} 
                    width={400} 
                    height={250} 
                    style={{ objectFit: 'contain', width: '100%', height: 'auto' }} 
                  />
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
