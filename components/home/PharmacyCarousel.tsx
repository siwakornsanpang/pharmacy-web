"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import styles from "./PharmacyCarousel.module.css";

interface SlideData {
  title: string;
  desc: string;
  image: string;
}

const slides: SlideData[] = [
  {
    title: "เภสัชกรชุมชน",
    desc: "ดูแลสุขภาพประชาชนในร้านยา\nให้คำปรึกษาด้านยาและสุขภาพเบื้องต้น",
    image: "/images/home/image1.png",
  },
  {
    title: "เภสัชกรโรงพยาบาล",
    desc: "จัดการระบบยาในโรงพยาบาล ตรวจสอบใบสั่งยา\nและให้คำปรึกษาแก่ทีมสหสาขาวิชาชีพ",
    image: "/images/home/image2.png",
  },
  {
    title: "เภสัชกรอุตสาหกรรม",
    desc: "ผู้เชี่ยวชาญด้านกระบวนการผลิต การควบคุมคุณภาพ\nและการพัฒนาสูตรยาในโรงงานอุตสาหกรรม",
    image: "/images/home/image3.png",
  },
  {
    title: "เภสัชกรคุ้มครองผู้บริโภค",
    desc: "เฝ้าระวังความปลอดภัยด้านยา คุ้มครองผู้บริโภค\nจากผลิตภัณฑ์สุขภาพที่ไม่ได้มาตรฐาน",
    image: "/images/home/image4.png",
  },
  {
    title: "เภสัชกรการตลาด",
    desc: "ให้ข้อมูลผลิตภัณฑ์ยาแก่บุคลากรทางการแพทย์\nวางแผนกลยุทธ์การตลาดยาอย่างมีจริยธรรม",
    image: "/images/home/image5.png",
  },
  {
    title: "เภสัชกรวิจัยและพัฒนา",
    desc: "วิจัยและพัฒนายาใหม่ ทดสอบทางคลินิก\nเพื่อสร้างนวัตกรรมทางเภสัชกรรม",
    image: "/images/home/image1.png", /* เปลี่ยนรูปให้ตรงตามต้องการได้เลยครับ */
  },
];

function getPositionClass(offset: number): string {
  switch (offset) {
    case 0:
      return styles.cardActive;
    case -1:
      return styles.cardLeft1;
    case -2:
      return styles.cardLeft2;
    case 1:
      return styles.cardRight1;
    case 2:
      return styles.cardRight2;
    default:
      return styles.cardHidden;
  }
}

export default function PharmacyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        {/* Header */}
        <h2 className={styles.sectionTitle}>6 สาขาวิชาชีพเภสัชกร</h2>
        <p className={styles.sectionSubtitle}>
          วิชาชีพเภสัชกรมีความหลากหลายในการปฏิบัติงานเพื่อดูแลประชาชนในมิติต่าง ๆ
        </p>

        {/* Carousel */}
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack}>
            {slides.map((slide, i) => {
              let offset = i - activeIndex;
              // Wrap around
              if (offset > slides.length / 2) offset -= slides.length;
              if (offset < -slides.length / 2) offset += slides.length;

              const positionClass = getPositionClass(offset);

              return (
                <div
                  key={i}
                  className={`${styles.card} ${positionClass}`}
                  onClick={() => goTo(i)}
                >
                  <div className={styles.cardInner}>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={340}
                      height={420}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 🔴 ส่วนที่ปรับปรุงใหม่: นำปุ่มลูกศรมาขนาบข้างข้อความ */}
        <div className={styles.bottomSection}>
          <button
            className={styles.navBtn}
            onClick={goPrev}
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={styles.slideContent} key={activeIndex}>
            <h3 className={styles.slideTitle}>{slides[activeIndex].title}</h3>
            <p className={styles.slideDesc}>{slides[activeIndex].desc}</p>
          </div>

          <button
            className={styles.navBtn}
            onClick={goNext}
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}