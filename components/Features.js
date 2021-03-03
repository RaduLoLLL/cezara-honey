import Image from "next/image";
import styles from "../styles/Features.module.css";
export default function Features() {
  return (
    <div>
      <div className={styles.facts}>
        <Image src="/Honey.svg" width={2206} height={485} />
      </div>
    </div>
  );
}
