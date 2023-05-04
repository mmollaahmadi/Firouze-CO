import Head from "next/head";
import HomePage from "@/components/screen/Home";
import Header from "@/components/composite/Header";
import { useContext } from "react";
import { GlobalContext } from "@/context";

export default function Home() {
  const { colorMode } = useContext(GlobalContext);
  return (
    <>
      <Head>
        <title>Alibab Countries Challenge</title>
        <meta
          name="description"
          content="Alibaba's Challenge for Senior Front-End Position"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`min-h-[100vh] flex flex-col justify-between ${
          colorMode === "light" ? "bg-VeryLightGray" : "bg-VeryDarkBlue"
        }`}
      >
        <Header />
        <HomePage />
      </main>
    </>
  );
}
