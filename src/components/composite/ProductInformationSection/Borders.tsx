import Button from "@/components/atomic/Button";
import { GlobalContext } from "@/context";
import { getProductNameById } from "@/logic/client/utils";
import { useRouter } from "next/router";
import React, { useContext } from "react";
export default function Borders({ borders }: { borders: number[] }) {
  const router = useRouter();
  const { language } = useContext(GlobalContext);
  return (
    <div className="flex flex-col md:flex-row w-full col-span-2 h-fit items-center my-2 gap-2">
      <p className="text-sm font-[600] break-normal min-w-fit">
        {language === "en" ? "Related Products:" : "محصولات مرتبط"}
      </p>
      <div className="flex flex-row w-full flex-wrap items-center justify-start my-2 md:my-[-4px]">
        {borders?.map((border, index) => (
          <Button
            key={index}
            className="w-fit my-1 !mx-1"
            onClick={() => router.push(`/product/${border}`)}
            label={getProductNameById(border, language) ?? ""}
          />
        ))}
      </div>
    </div>
  );
}
