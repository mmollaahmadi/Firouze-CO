import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import CountryInformationSection from "@/components/composite/CountryInformationSection";
import { useRouter } from "next/router";
import { GlobalContext } from "@/context";
import ToolbarSection from "./Toolbar.section";
// import dynamic from 'next/dynamic';

// const ModelViewer = require('@google/model-viewer/dist/model-viewer.min.js') as any;
// import "@google/model-viewer";

export default function Detail({ id }) {
  const router = useRouter();
  const { products } = useContext(GlobalContext);
  const findCountryData = (id) => {
    return products?.filter(
      (product) => product?.id == parseInt(id)
    )[0];
  };
  const [product, setProduct] = useState(null);
  useEffect(() => {
    function updateCountryData() {
      let foundedCountry = findCountryData(id);
      setProduct(foundedCountry);
    }
    updateCountryData();
  }, [id]);

  return (
    <div
      className={"flex flex-col mb-auto p-6 sm:py-4 sm:px-14 bg-transparent"}
    >
      <ToolbarSection />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:grid-rows-1">
        {/* <div className="col-span-1 col-row-1 my-auto">
          <Image
            alt={"flag"}
            src={product?.image ?? ""}
            width={300}
            height={100}
            // className="w-full"
            loading="lazy"
          />
        </div> */}
        <div className="col-span-1 col-row-1 my-auto">
          
          {/* <model-viewer
            // id={`modelViewer${product?.id}`}
            alt="AR Model"
            ar
            ar-modes="webxr scene-viewer quick-look"
            src={product?.ar_model ?? ""}
            camera-controls
            ar-scale="fixed"
            ar-placement="wall"
            camera-orbit="auto auto auto"
            min-camera-orbit="auto 75deg auto"
            max-camera-orbit="auto 75deg auto"
            // environment-image="/model/moon_1k.hdr"
            style={{ width: "100%", height: "500px" }}
          >
            <button
              slot="ar-button"
              id="ar-button"
              className="bg-takeda-red font-normal tracking-wide text-white"
            >
              View in your space
            </button>
          </model-viewer> */}
          <model-viewer
            alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
            src={product?.ar_model ?? ""}
            ar
            environment-image="/model/moon_1k.hdr"
            poster="/model/NeilArmstrong.webp"
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            style={{ width: "100%", height: "500px" }}

          ></model-viewer>
        </div>
        <CountryInformationSection data={product} withDetail={true} />
      </div>
    </div>
  );
}
