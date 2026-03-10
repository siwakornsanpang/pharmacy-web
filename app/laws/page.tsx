import styles from "./laws.module.css";

export default function LawsPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Banner Section */}
            <header className={styles.banner}>
                <div className={styles.bannerOverlay}>
                    <div className={styles.bannerContent}>
                        <h1 className="ThaiFont">กฎหมายที่เกี่ยวข้อง</h1>
                        <p className="ThaiFont">พระราชบัญญัติ กฎกระทรวง ข้อบังคับ ระเบียบ ประกาศ คำสั่ง</p>
                    </div>
                </div>
            </header>

            <div className={styles.container}>
                <h2 className={`${styles.title} ThaiFont`}>กฎหมาย</h2>
                <p className="text-gray-600 ThaiFont">ข้อบังคับและกฎหมายที่เกี่ยวข้องกับวิชาชีพเภสัชกรรม...</p>
            </div>
        </div>
    );
}
