import Image from "next/image";
import styles from "../styles/Hero.module.css";
import { useSpring, animated } from "react-spring";
export default function Hero() {
  const imageProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 700 },
  });
  const contentProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
    delay: 500,
  });
  return (
    <div className={styles.hero}>
      <div className={styles.image}>
        <animated.div style={imageProps}>
          {" "}
          <Image src="/Hero-Image.png" width={1920} height={970} />
        </animated.div>
      </div>
      <animated.div style={contentProps}>
        <div className={styles.cta}>
          <h1>Miere Naturală</h1>
          <h3>Nou!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            lacinia finibus dapibus. Maecenas non efficitur orci, eget lobortis
            sapien. Curabitur elit quam, gravida quis leo ut, tempor aliquam
            elit.
          </p>
          <button type="button">Cumpără</button>
        </div>
      </animated.div>
    </div>
  );
}
