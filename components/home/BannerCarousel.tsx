'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './BannerCarousel.module.css';

interface BannerItem {
  id: string;
  url: string;
  title: string;
  clickable: boolean;
  linkUrl: string;
}

interface BannerCarouselProps {
  banners: BannerItem[];
  slogan?: string | null;
}

export default function BannerCarousel({ banners, slogan }: BannerCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % banners.length);
  }, [banners.length]);

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + banners.length) % banners.length);
  }, [banners.length]);

  // Auto-slide every 5s
  useEffect(() => {
    if (banners.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, banners.length]);

  if (banners.length === 0) {
    return (
      <section className={styles.banner}>
        <div className={styles.placeholder} />
        {slogan && (
          <div className={styles.overlay}>
            <p className={styles.slogan}>"{slogan}"</p>
          </div>
        )}
      </section>
    );
  }

  return (
    <section className={styles.banner}>
      {/* Slides */}
      <div className={styles.slides}>
        {banners.map((b, i) => {
          const isActive = i === current;
          const Wrapper = b.clickable && b.linkUrl ? 'a' : 'div';
          const wrapperProps = b.clickable && b.linkUrl
            ? { href: b.linkUrl, target: '_blank', rel: 'noopener noreferrer' }
            : {};

          return (
            <Wrapper
              key={b.id}
              className={`${styles.slide} ${isActive ? styles.slideActive : ''}`}
              {...wrapperProps}
            >
              <Image
                src={b.url}
                alt={b.title || 'Banner'}
                fill
                priority={i === 0}
                className={styles.slideImage}
              />
            </Wrapper>
          );
        })}
      </div>

      {/* Overlay (slogan) */}
      {slogan && (
        <div className={styles.overlay}>
          <p className={styles.slogan}>"{slogan}"</p>
        </div>
      )}

      {/* Arrows */}
      {banners.length > 1 && (
        <>
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </>
      )}

      {/* Dots */}
      {banners.length > 1 && (
        <div className={styles.dots}>
          {banners.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
