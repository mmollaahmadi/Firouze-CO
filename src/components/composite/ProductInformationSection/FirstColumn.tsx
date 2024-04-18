import React, { useContext } from "react";
import InformationRow from "./InformationRow";
import { GlobalContext } from "@/context";
import { CATEGORIES } from "@/constants";
import useLanguage from "@/logic/client/useLanguage";

export default function FirstColumn({
  withDetail,
  data,
}: {
  withDetail: boolean;
  data: any;
}) {
  const { language } = useContext(GlobalContext);
  const { getContext } = useLanguage();
  const context = getContext(language);
  return (
    <div className={`col-span-2 ${withDetail && "md:col-span-1"}`}>
      {withDetail && (
        <InformationRow
          label={context?.feature ? `${context?.feature} 1` : ""}
          value={data?.nativeName}
        />
      )}
      <InformationRow
        label={context?.category ?? ""}
        value={
          CATEGORIES?.filter((c) => c.value === data?.category)?.[0]?.[
            `${language}_label`
          ]
        }
      />
      {withDetail && (
        <InformationRow
          label={context?.feature ? `${context?.feature} 3` : ""}
          value={data?.subregion}
        />
      )}
    </div>
  );
}
