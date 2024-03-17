import { GlobalContext } from "@/context";
import React, { useContext } from "react";
export default function ContextSection() {
  const { colorMode } = useContext(GlobalContext);
  return (
    <div style={{ color: colorMode === "light" ? "black" : "white" }} className="text-center">
      <strong>Try Our Products</strong>
      <div className="grid grid-cols-1 grid-rows-1 px-16 py-4 text-justify">
        Welcome to our product page! Here, you can explore our wide range of
        products in a unique way. By clicking on a product, you can view a 3D
        model of the product in augmented reality (AR). This allows you to see
        the product from all angles and get a better understanding of its
        dimensions and appearance. Simply click on a product and then click on
        the cube button to view the AR model. Enjoy exploring our products!
      </div>
    </div>
  );
}
