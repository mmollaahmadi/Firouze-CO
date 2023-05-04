import React from "react";
export default function CountryName({ name }: { name: string }) {
  return (
    <div className="col-span-2 md:col-span-2">
      <h2 className="my-3 font-[800]">{name}</h2>
    </div>
  );
}
