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
        <title>Firouze Faam Products</title>
        <meta
          name="description"
          content="Firouze Faam"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"></script>
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
