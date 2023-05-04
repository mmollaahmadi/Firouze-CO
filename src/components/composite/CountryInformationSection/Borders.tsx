import Button from "@/components/atomic/Button";
import React from "react";
export default function Borders({ borders }: { borders: string[] }) {
  return (
    <div className="flex flex-col md:flex-row w-full col-span-2 h-fit items-center my-2">
      <p className="text-sm font-[600] w-full">Border Countries:</p>
      <div className="flex flex-row justify-start my-2 md:my-0">
        {borders?.map((border, index) => (
          <Button label={border} />
        ))}
      </div>
    </div>
  );
}
