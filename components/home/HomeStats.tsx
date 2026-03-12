import styles from "./HomeStats.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function HomeStats() {
  let pharmacistsCount = 53099; // Fallback default
  let qualityPharmacies = 3601;
  let faculties = 25;

  try {
    if (API_URL) {
      // Fetch pharmacists from API
      const res = await fetch(`${API_URL}/pharmacists`, {
        next: { revalidate: 60 } // Cache for 1 minute
      });
      
      if (res.ok) {
        const data = await res.json();
        // Just checking if it's an array to get the length
        if (Array.isArray(data)) {
          pharmacistsCount = data.length;
        }
      }
    }
  } catch (err) {
    console.error("Error fetching pharmacists count:", err);
  }

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>{pharmacistsCount.toLocaleString()}</h3>
            <p className={styles.statLabel}>เภสัชกร</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>{qualityPharmacies.toLocaleString()}</h3>
            <p className={styles.statLabel}>ร้านยาคุณภาพ</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>{faculties}</h3>
            <p className={styles.statLabel}>คณะเภสัชศาสตร์ประเทศไทย</p>
          </div>
        </div>
      </div>
    </section>
  );
}
