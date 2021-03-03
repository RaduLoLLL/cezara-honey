import Image from "next/image";
import styles from "../styles/Facts.module.css";
import Fact from "./Fact";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
export default function Facts() {
  const h2Props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });
  const h1Props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
    delay: 300,
  });
  return (
    <div className={styles.container}>
      <Image src="/Facts.svg" width={2065} height={787} />
      <div className={styles.title}>
        <animated.div style={h2Props}>
          <h2>Bun venit</h2>
        </animated.div>
        <animated.div style={h1Props}>
          <h1>În Cămara Noastră</h1>
        </animated.div>
      </div>
      <div className={styles.facts}>
        <Fact
          number={1}
          title="Gustul Dulce Natural"
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`}
        />
        <Fact
          number={2}
          title={`Tratament Adjuvant`}
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`}
        />
        <Fact
          number={3}
          title={`Fără Conservanți`}
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`}
        />
      </div>
      <div className={styles.factsImage}>
        <Image src="/Facts_Image.png" height={510} width={953} />
      </div>
    </div>
  );
}
