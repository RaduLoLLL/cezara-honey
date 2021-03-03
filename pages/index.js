import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Miere Naturala Cezara | Tratamente Adjuvante</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <animated.div style={props}>
        {" "}
        <Hero />
      </animated.div>
      <MainContent />
    </div>
  );
}
