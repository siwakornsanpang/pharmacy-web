import Image from "next/image";
import { Agency } from "@/lib/api";
import styles from "./DepartmentNetwork.module.css";

interface DepartmentNetworkProps {
  title: string;
  agencies: Agency[];
}

export default function DepartmentNetwork({ title, agencies }: DepartmentNetworkProps) {
  if (agencies.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Image */}
          <div className={styles.imageWrapper}>
            <Image
              src="/images/department/thumnail.png"
              alt={title}
              fill
              className={styles.image}
            />
          </div>

          {/* Content */}
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.list}>
              {agencies.map((agency) => (
                <li key={agency.id} className={styles.listItem}>
                  <span className={styles.bullet} />
                  {agency.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
