import Head from "next/head";
import Hero from "../components/Hero";
import Main from "../components/Main";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Main />
    </div>
  );
}
