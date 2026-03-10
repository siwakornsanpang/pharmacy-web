import styles from "./other-services.module.css";

export default function OtherServicesPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Banner Section */}
            <header className={styles.banner}>
                <div className={styles.bannerOverlay}>
                    <div className={styles.bannerContent}>
                        <h1 className="ThaiFont">ดาวน์โหลด</h1>
                        <p className="ThaiFont">งานการศึกษา งานทะเบียนและใบอนุญาต หนังสือรับรองและอื่นๆ</p>
                    </div>
                </div>
            </header>

            <div className={styles.container}>
                <h2 className={`${styles.title} ThaiFont`}>บริการอื่นๆ</h2>
                <div className="text-gray-600 ThaiFont">
                    ข้อมูลดาวน์โหลดและบริการอื่นๆ ของสภาเภสัชกรรม...
                </div>
            </div>
        </div>
    );
}
