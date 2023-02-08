import Head from "next/head";
import styles from "@/styles/Home.module.css";
import List from "@/components/List";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coding Challenge - Fetch And Display Remote Data (15)</title>
        <meta
          name="description"
          content="Coding Challenge - Fetch And Display Remote Data (15) - Junior+ / Intermediate Frontend Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <List url="https://jsonplaceholder.typicode.com/posts/1/comments" />
        </div>
      </main>
    </>
  );
}
