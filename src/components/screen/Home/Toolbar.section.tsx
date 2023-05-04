import SearchInput from "@/components/atomic/SearchInput";
import Select from "@/components/atomic/Select";
import React from "react";
export default function ToolbarSection() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 md:grid-rows-1 md:grid-cols-6 gap-4 md:gap-0 justify-between my-8">
      <div className="col-span-3 md:col-start-1 md:col-end-3 flex justify-center items-center">
        <SearchInput />
      </div>
      <div className="col-span-2 md:col-span-1 md:col-end-7 flex justify-center items-center">
        <Select
          options={[
            { value: "Africa", label: "Africa" },
            { value: "America", label: "America" },
            { value: "Assia", label: "Assia" },
            { value: "Europe", label: "Europe" },
            { value: "Oceania", label: "Oceania" },
          ]}
        />
      </div>
    </div>
  );
}
