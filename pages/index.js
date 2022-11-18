import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import SeeSaw from "../components/SeeSaw";
import LandingPage from "./LandingPage";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Eat Money</title>
        <meta name="description" content="Eat to Earn to Eat More" />
        <link rel="icon" href="/public/favicon-32x32.png" />
      </Head>
        <LandingPage>
        </LandingPage>
    </div>
  );
}
