import React, {useEffect, useRef, useState} from "react";
import ProductInformationSection from "@/components/composite/ProductInformationSection";
import {useRouter} from "next/router";
import ToolbarSection from "./Toolbar.section";
import useProducts from "@/logic/client/useProducts";

export default function Detail() {
    const router = useRouter();
    const {id} = router.query;
    const {loading, products} = useProducts();
    const innerButtonRef = useRef(null); // Ref for inner button

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
            setProduct(foundedCountry);
        }

        updateCountryData();
    }, [id]);

    return (
        <div
            className={"flex flex-col mb-auto p-6 sm:py-4 sm:px-14 bg-transparent"}
        >
            <ToolbarSection innerButtonRef={innerButtonRef}/>
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
                    {!loading && (
                        <model-viewer
                            src={product?.ar_model ?? ""}
                            ar
                            ar-placement="wall"
                            poster={product?.image ?? ""}
                            shadow-intensity="1"
                            camera-controls
                            gesture-controls="auto"
                            touch-action="pan-y"
                            alt="AR Model"
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
                                ref={innerButtonRef}
                                style={{display: "none"}}
                            >
                                Display on the wall
                            </button>
                        </model-viewer>
                    )}
                </div>
                <ProductInformationSection data={product} withDetail={true}/>
            </div>
        </div>
    );
}
