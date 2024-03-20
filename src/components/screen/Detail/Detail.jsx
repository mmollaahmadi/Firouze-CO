import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import ProductInformationSection from "@/components/composite/ProductInformationSection";
import { useRouter } from "next/router";
import { GlobalContext } from "@/context";
import ToolbarSection from "./Toolbar.section";
import useProducts from "@/logic/client/useProducts";
// import dynamic from 'next/dynamic';

// const ModelViewer = require('@google/model-viewer/dist/model-viewer.min.js') as any;
// import "@google/model-viewer";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  // const { products } = useContext(GlobalContext);
  const { errorMessage, loading, products } = useProducts();
  console.log("id ", id, products, loading);

  const findCountryData = (id) => {
    try {
      if (id) {
        return products?.filter((product) => product?.id == parseInt(id))[0];
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [product, setProduct] = useState(null);
  useEffect(() => {
    function updateCountryData() {
      let foundedCountry = findCountryData(id);
      console.log("foundedCountry", foundedCountry);
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
          {product && (
            <model-viewer
              alt="AR Model"
              src={product?.ar_model ?? ""}
              ar
              environment-image="/model/moon_1k.hdr"
              poster={product?.image ?? ""}
              // poster="/model/NeilArmstrong.webp"
              shadow-intensity="1"
              camera-controls
              touch-action="pan-y"
              style={{
                width: "100%",
                height: "500px",
                border: "1px dashed gray",

                borderRadius: "15px",
              }}
            >
            <button
            slot="ar-button"
            id="ar-button"
            className="bg-takeda-red font-normal tracking-wide text-black"
          >
            View in your space
          </button>
            </model-viewer>
          )}
        </div>
        <ProductInformationSection data={product} withDetail={true} />
      </div>
    </div>
  );
}
