import React, { useContext } from "react";
import { GlobalContext } from "@/context";
import Borders from "./Borders";
import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";
import CountryName from "./CountryName";
export default function CountryInformationSection({
  data,
  withDetail = false,
}: {
  data: any;
  withDetail?: boolean;
}) {
  const { colorMode } = useContext(GlobalContext);
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 md:px-6 md:py-4 ${
        colorMode === "light" ? "text-SuperDarkBlue" : "text-White"
      }`}
    >
      <CountryName
        name={data?.name}
        className={withDetail ? "md:text-xl" : ""}
      />
      <FirstColumn data={data} withDetail={withDetail} />
      {withDetail && (
        <>
          <SecondColumn data={data} />
          <Borders borders={data?.borders} />
        </>
      )}
    </div>
  );
}
