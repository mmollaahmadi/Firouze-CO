import React, { useContext } from "react";
import InformationRow from "./InformationRow";
import { GlobalContext } from "@/context";
import { CATEGORIES } from "@/constants";

export default function FirstColumn({
  withDetail,
  data,
}: {
  withDetail: boolean;
  data: any;
}) {
  const { language } = useContext(GlobalContext);
  return (
    <div className={`col-span-2 ${withDetail && "md:col-span-1"}`}>
      {withDetail && (
        <InformationRow label="Feature 1" value={data?.nativeName} />
      )}
      <InformationRow
        label={language === "en" ? "Category" : "دسته‌بندی"}
        value={CATEGORIES?.filter(c => c.value === data?.category)?.[0]?.[`${language}_label`]}
      />
      {withDetail && (
        <InformationRow label="Feature 3" value={data?.subregion} />
      )}
    </div>
  );
}
