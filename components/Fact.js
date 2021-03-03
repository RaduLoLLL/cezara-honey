import Image from "next/image";
import styles from "../styles/Fact.module.css";
export default function Fact({ number, title, description }) {
  return (
    <div>
      <div className={styles.fact}>
        <Image src={`/Number${number}.svg`} width={150} height={150} />
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}
