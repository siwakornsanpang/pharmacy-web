import styles from "./event.module.css";

export default function MeetingsPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Banner Section */}
            <header className={styles.banner}>
                <div className={styles.bannerOverlay}>
                    <div className={styles.bannerContent}>
                        <h1 className="ThaiFont">งานประชุม</h1>
                        <p className="ThaiFont">ติดตามข่าวสารสำคัญของสภาเภสัชกรรม</p>
                    </div>
                </div>
            </header>

            <div className={styles.container}>
                <h2 className={`${styles.title} ThaiFont`}>งานประชุม</h2>
                <p className="text-gray-600 ThaiFont">ข้อมูลการประชุมวิชาการและกิจกรรมต่างๆ...</p>
            </div>
        </div>
    );
}
