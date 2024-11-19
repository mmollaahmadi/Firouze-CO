import React from "react";
import useProducts from "@/logic/client/useProducts";
import Loading from "@/components/atomic/Loading";
import ErrorMessage from "@/components/atomic/ErrorMessage";
import ContextSection from "./Context.section";
import CategoriesListSection from "@/components/screen/Home/CategoriesList.section";

export default function Home() {
  const { errorMessage, loading } = useProducts();

  return (
    <div
      className={"flex flex-col mb-auto p-6 sm:py-4 sm:px-14 bg-transparent"}
    >
      <ContextSection />
      {/*<ToolbarSection />*/}
      {loading ? (
        <Loading />
      ) : errorMessage !== "" ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <CategoriesListSection />
      )}
    </div>
  );
}
