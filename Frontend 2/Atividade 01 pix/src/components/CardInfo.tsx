import styles from "./CardInfo.module.css";

interface CardInfoProps {
  title: string;
  data: string;
}

export function CardInfo({ title, data }: CardInfoProps) {
  return (
    <div className={styles.cardInfo}>
      <span className={styles.title}>{title}</span>
      <span className={styles.data}>{data}</span>
    </div>
  );
}
