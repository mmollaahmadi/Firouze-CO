import Head from "next/head";
import HomePage from "@/components/screen/Home";
import Header from "@/components/composite/Header";
import { useContext } from "react";
import { GlobalContext } from "@/context";
import Footer from "@/components/composite/Footer";
import Script from "next/script";

export default function Home() {
  const { colorMode } = useContext(GlobalContext);

  return (
    <>
      <Head>
        <title>Firouze Faam Products</title>
        <meta name="description" content="Firouze Faam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <Script
          async
          strategy="afterInteractive"
          type="module"
          src="https://unpkg.com/@google/model-viewer@^2.1.1/dist/models-viewer.min.js"
        /> */}
        <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"></script>
      </Head>
      <main
        className={`min-h-[100vh] flex flex-col justify-between ${
          colorMode === "light" ? "bg-VeryLightGray" : "bg-VeryDarkBlue"
        }`}
      >
        <Header />
        <HomePage />
        <Footer />
      </main>
    </>
  );
}
