import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { News } from '@/lib/api';
import styles from './NewsCard.module.css';

interface NewsCardProps {
    news: News;
}

const categoryLabels: Record<string, string> = {
    news: 'ข่าวประชาสัมพันธ์',
    recruitment: 'ข่าวรับสมัครงานสภา',
    procurement: 'ข่าวประกาศจัดซื้อจัดจ้าง',
};

const categoryColors: Record<string, string> = {
    news: '#737300',      // Olive
    recruitment: '#8D7B68', // Brownish
    procurement: '#628E90', // Teal/Grey
};

export default function NewsCard({ news }: NewsCardProps) {
    const formattedDate = new Date(news.publishedAt || news.createdAt).toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <Link href={`/news/${news.id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                {news.thumbnailUrl ? (
                    <Image
                        src={news.thumbnailUrl}
                        alt={news.title}
                        fill
                        className={styles.image}
                    />
                ) : (
                    <div className={styles.placeholder}>
                        {/* Empty gray placeholder */}
                    </div>
                )}
                <span
                    className={styles.badge}
                    style={{ '--badge-bg': categoryColors[news.category] || '#737300' } as React.CSSProperties}
                >
                    {categoryLabels[news.category] || news.category}
                </span>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{news.title}</h3>
                <div
                    className={styles.excerpt}
                    dangerouslySetInnerHTML={{ __html: news.content }}
                />
                <div className={styles.footer}>
                    <span className={styles.date}>
                        <Calendar size={14} className={styles.dateIcon} />
                        {formattedDate}
                    </span>
                </div>
            </div>
        </Link>
    );
}
