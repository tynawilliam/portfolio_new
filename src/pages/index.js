import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import TypingText from "@/components/TypingText";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Cube from "@/components/Cube";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tyna William</title>
        <meta name="description" content="Tyna William portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Navbar />
        <div className="px-6 py-12 md:py-20 lg:py-32">
          <TypingText />
          <div className={`flex`}>
            <Intro />
            <div
              className={`${styles.cubeContainer} hidden md:block cubeContainer`}
            >
              <Cube />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
