import React from "react";
export default function InformationRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-row my-1">
      <p className="font-[600] text-sm lg:text-md">{label}:</p>
      <p className="ml-1 text-sm lg:text-md">{value}</p>
    </div>
  );
}
