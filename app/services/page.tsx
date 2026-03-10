import styles from "./services.module.css";

export default function ServicesPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Banner Section */}
            <header className={styles.banner}>
                <div className={styles.bannerOverlay}>
                    <div className={styles.bannerContent}>
                        <h1 className="ThaiFont">งานบริการ</h1>
                        <p className="ThaiFont">สภาเภสัชกรรมให้บริการเพื่อประชาชนและเภสัชกร</p>
                    </div>
                </div>
            </header>

            <div className={styles.container}>
                <h2 className={`${styles.title} ThaiFont`}>งานบริการ</h2>
                <div className="text-gray-600 ThaiFont">
                    ข้อมูลงานบริการต่างๆ ของสภาเภสัชกรรม...
                </div>
            </div>
        </div>
    );
}
