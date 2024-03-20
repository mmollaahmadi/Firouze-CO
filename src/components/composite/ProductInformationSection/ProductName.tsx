import React from "react";
export default function ProductName({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <div className={`col-span-1 md:col-span-1 ${className}`}>
      <h1 className="my-1 font-[800]">{name}</h1>
    </div>
  );
}
