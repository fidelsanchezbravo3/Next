import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Fidel</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>About Page</h1>
        <h1 className={styles.title}>
          {/* Ir a <a href="/">Home</a> */}
          Ir a <Link href="/">Home</Link>
        </h1>
        
      </main>
    </>
  );
}
