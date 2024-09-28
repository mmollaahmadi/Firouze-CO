import {GlobalContext} from "@/context";
import React, {useContext} from "react";
import CategoryCard from "@/components/composite/CategoryCard";

export default function CategoriesListSection() {
    const {categories, products} = useContext(GlobalContext);

    return (
        <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-4 md:grid-rows-2 gap-14 mt-4">
            {categories
                ?.filter(category => products?.some(p => p.category_id === category?.id))
                ?.map((category, index) => (
                    <CategoryCard key={index} data={category}/>
                ))}
        </div>
    );
}
