import styles from "./about.module.css";

export default function AboutPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Banner Section */}
            <header className={styles.banner}>
                <div className={styles.bannerOverlay}>
                    <div className={styles.bannerContent}>
                        <h1 className="ThaiFont">เกี่ยวกับองค์กร</h1>
                        <p className="ThaiFont">สภาเภสัชกรรม ก่อตั้งขึ้นตามพระราชบัญญัติวิชาชีพเภสัชกรรม พ.ศ. 2537</p>
                    </div>
                </div>
            </header>

            <div className={styles.container}>
                <h2 className={`${styles.title} ThaiFont`}>ประวัติและความเป็นมา</h2>
                <div className={`${styles.content} ThaiFont`}>
                    สภาเภสัชกรรม (The Pharmacy Council) เป็นองค์กรวิชาชีพของเภสัชกร ก่อตั้งขึ้นตามพระราชบัญญัติวิชาชีพเภสัชกรรม พ.ศ. 2537 โดยมีวัตถุประสงค์เพื่อควบคุมความประพฤติของผู้ประกอบวิชาชีพเภสัชกรรมให้ถูกต้องตามจรรยาบรรณวิชาชีพ...
                </div>
            </div>
        </div>
    );
}
