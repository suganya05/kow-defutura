import Head from "next/head";
import type { NextPage } from "next";

import styles from "../styles/Home.module.scss";
import Hero from "components/Hero";
import Tagline from "components/Tagline";
// import Partners from "components/Partners";
import ServiceOurWork from "components/ServiceOurWork";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Defutura</title>
        <meta
          name="description"
          content="We are building next gen techno service through decentralized communities."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Tagline />
        <ServiceOurWork />
        {/* <Partners /> */}
      </main>
    </div>
  );
};

export default Home;
