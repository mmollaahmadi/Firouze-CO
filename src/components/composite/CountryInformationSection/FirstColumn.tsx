import React from "react";
import InformationRow from "./InformationRow";

export default function FirstColumn({
  withDetail,
  data,
}: {
  withDetail: boolean;
  data: any;
}) {
  return (
    <div className={`col-span-2 ${withDetail && "md:col-span-1"}`}>
      {withDetail && (
        <InformationRow label="Native Name" value={data?.nativeName} />
      )}
      <InformationRow label="Population" value={data?.population} />
      <InformationRow label="Region" value={data?.region} />
      {withDetail && (
        <InformationRow label="Sub Region" value={data?.subregion} />
      )}
      <InformationRow label="Capital" value={data?.capital} />
    </div>
  );
}
