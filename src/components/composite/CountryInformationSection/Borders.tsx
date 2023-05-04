import Button from "@/components/atomic/Button";
import { getCountryNameByAlpha3Code } from "@/logic/client/validation";
import { useRouter } from "next/router";
import React from "react";
export default function Borders({ borders }: { borders: string[] }) {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row w-full col-span-2 h-fit items-start my-2">
      <p className="text-sm font-[600] break-normal min-w-fit">
        Border Countries:
      </p>
      <div className="grid grid-rows-1 grid-cols-4 gap-4 items-start justify-start my-2 md:my-[-4px]">
        {borders?.map((border, index) => (
          <Button
            key={index}
            className="w-full"
            onClick={() => router.push(`/country/${border}`)}
            label={getCountryNameByAlpha3Code(border) ?? ""}
          />
        ))}
      </div>
    </div>
  );
}
