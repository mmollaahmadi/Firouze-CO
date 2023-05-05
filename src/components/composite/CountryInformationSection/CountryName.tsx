import React from "react";
export default function CountryName({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <div className={`col-span-2 md:col-span-2 ${className}`}>
      <h1 className="my-3 font-[800]">{name}</h1>
    </div>
  );
}
