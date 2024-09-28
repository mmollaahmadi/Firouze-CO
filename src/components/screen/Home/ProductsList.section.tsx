import ProductCard from "@/components/composite/ProductCard";
import {GlobalContext} from "@/context";
import React, {useContext} from "react";
import ToolbarSection from "@/components/screen/Home/Toolbar.section";;
import {useRouter} from "next/router";

export default function ProductsListSection() {
    const {products, filteredProducts, searchedProducts} =
        useContext(GlobalContext);
    const router = useRouter();
    const { category_id } = router.query; // Access category_id safely

    // Optional: Handle case where category_id is not yet defined
    if (!category_id) {
        return <div>Loading...</div>; // or some placeholder/loading state
    }
    return (
        <div className={'px-10 md:px-20 py-10'}>
            <ToolbarSection/>

            <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-4 md:grid-rows-2 gap-14">
                {((searchedProducts && searchedProducts.length > 0)
                        ? searchedProducts
                        : products
                )?.filter(product => product.category_id === parseInt(category_id as string))?.map((product, index) => (
                    <ProductCard key={index} data={product}/>
                ))}
            </div>
        </div>
    );
}
