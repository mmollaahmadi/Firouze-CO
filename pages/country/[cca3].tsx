import Head from "next/head";
import Detail from "@/components/screen/Detail/Detail";
import Header from "@/components/composite/Header";
import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "@/context";

export default function Home() {
  const router = useRouter();
  const { cca3 } = router.query;
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
        <Detail cca3={cca3} />
      </main>
    </>
  );
}
