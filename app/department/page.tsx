import styles from "./department.module.css";

export default function DepartmentPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Banner Section */}
            <header className={styles.banner}>
                <div className={styles.bannerOverlay}>
                    <div className={styles.bannerContent}>
                        <h1 className="ThaiFont">หน่วยงาน</h1>
                        <p className="ThaiFont">หน่วยงานในกำกับของสภาเภสัชกรรม</p>
                    </div>
                </div>
            </header>

            <div className={styles.container}>
                <h2 className={`${styles.title} ThaiFont`}>รายชื่อหน่วยงาน</h2>
                <div className="text-gray-600 ThaiFont">
                    ข้อมูลหน่วยงานต่างๆ ภายใต้การดูแลของสภาเภสัชกรรม...
                </div>
            </div>
        </div>
    );
}
