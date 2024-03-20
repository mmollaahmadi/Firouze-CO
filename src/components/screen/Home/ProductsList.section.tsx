import ProductCard from "@/components/composite/ProductCard";
import { GlobalContext } from "@/context";
import React, { useContext, useEffect, useRef, useState } from "react";
export default function ProductsListSection() {
  const { products, filteredProducts, searchedProducts } =
    useContext(GlobalContext);

  return (
    <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-4 md:grid-rows-2 gap-14">
      {(filteredProducts.length > 0 && searchedProducts.length > 0
        ? filteredProducts.length < searchedProducts.length
          ? filteredProducts
          : searchedProducts
        : filteredProducts.length > 0
        ? filteredProducts
        : searchedProducts.length > 0
        ? searchedProducts
        : products
      )?.map((product, index) => (
        <ProductCard key={index} data={product} />
      ))}
    </div>
  );
}
