import { GlobalContext } from "@/context";
import React, { useContext } from "react";
export default function InformationRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const { language } = useContext(GlobalContext);
  return (
    <div className="flex flex-row my-1">
      <p className="font-[600] text-sm lg:text-md">{`${label}: `}</p>
      <p
        className={`${language === "fa" ? "mr-1" : "ml-1"} text-sm lg:text-md`}
      >
        {Array?.isArray(value) ? value.map(v => (<p>{v}</p>)) : value}
      </p>
    </div>
  );
}
