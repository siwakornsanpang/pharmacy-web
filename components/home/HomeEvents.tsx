import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Users, Building2 } from "lucide-react";
import styles from "./HomeEvents.module.css";

const MOCK_EVENTS = [
  {
    id: 1,
    day: "2",
    month: "พ.ค.",
    title: "สภาเภสัชกรรมเปิดอบรมหลักสูตรรอบรมระยะสั้นการบริบาลทางเภสัชกรรม (สาขาปฐมภูมิ) รุ่นที่ 5",
    location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
    dateRange: "02 พ.ค. 2569 - 13 ก.ย. 2569",
    audiences: ["บุคคลทั่วไป", "เภสัชกร"],
    capacity: "100 คน",
    agency: "ราชวิทยาลัย",
    image: "/images/home/image1.png", // Mock image path
  },
  {
    id: 2,
    day: "1",
    month: "มี.ค.",
    title: "Pharmacy Research and Innovation Summit 2025: (PRIS2025) Synergizing for the better future",
    location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
    dateRange: "02 พ.ค. 2569 - 13 ก.ย. 2569",
    audiences: ["เภสัชกร"],
    capacity: "100 คน",
    agency: "ราชวิทยาลัย",
    image: "/images/home/image2.png", // Mock image path
  },
  {
    id: 3,
    day: "13",
    month: "ก.พ.",
    title: "การฝึกอบรม ประกาศนียบัตรวิชาชีพเภสัชกรรม (สาขาบริหารจัดการผลิตภัณฑ์สมุนไพร) รุ่นที่ 3",
    location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
    dateRange: "02 พ.ค. 2569 - 13 ก.ย. 2569",
    audiences: ["บุคคลทั่วไป"],
    capacity: "เต็ม",
    agency: "ราชวิทยาลัย",
    image: "/images/home/image3.png", // Mock image path
  },
];

export default function HomeEvents() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>การประชุม</h2>
          <Link href="/event" className={styles.viewAll}>
            ดูทั้งหมด
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className={styles.eventList}>
          {MOCK_EVENTS.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              {/* Date Box */}
              <div className={styles.dateBox}>
                <span className={styles.dateDay}>{event.day}</span>
                <span className={styles.dateMonth}>{event.month}</span>
              </div>

              {/* Event Content */}
              <div className={styles.eventContent}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <div className={styles.eventDetails}>
                  <div className={styles.detailRow}>
                    <div className={styles.detailIcon}><MapPin size={16} /></div>
                    <span>สถานที่ : {event.location}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <div className={styles.detailIcon}><Calendar size={16} /></div>
                    <span>วันที่จัดประชุม : {event.dateRange}</span>
                  </div>
                  <div className={styles.detailRow} style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                      <div className={styles.detailIcon}><Users size={16} /></div>
                      <span style={{ marginRight: "0.5rem" }}>ผู้เข้าร่วม :</span>
                      <div className={styles.badges}>
                        {event.audiences.includes("บุคคลทั่วไป") && (
                          <span className={styles.badge}>บุคคลทั่วไป</span>
                        )}
                        {event.audiences.includes("เภสัชกร") && (
                          <span className={`${styles.badge} ${styles.badgeActive}`}>เภสัชกร</span>
                        )}
                      </div>
                    </div>
                    <span>จำนวน : {event.capacity}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <div className={styles.detailIcon}><Building2 size={16} /></div>
                    <span>หน่วยงาน : {event.agency}</span>
                  </div>
                </div>
              </div>

              {/* Event Image */}
              <div className={styles.eventImageWrapper}>
                <Image
                  src={event.image}
                  alt={event.title}
                  width={280}
                  height={180}
                  className={styles.eventImage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
