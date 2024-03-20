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
        <InformationRow label="Feature 1" value={data?.nativeName} />
      )}
      <InformationRow label="Category" value={data?.category} />
      {withDetail && (
        <InformationRow label="Feature 3" value={data?.subregion} />
      )}
    </div>
  );
}
