import { GlobalContext } from "@/context";
import Image from "next/image";
import React, { useContext } from "react";
import { useRouter } from "next/router";

export default function CategoryCard({ data }: { data: any }) {
  const { colorMode, language } = useContext(GlobalContext);
  const router = useRouter();
  return (
      <div
          className={`col-span-1 rounded-md shadow-md hover:cursor-pointer ${
              colorMode === "light"
                  ? "bg-White text-SuperDarkBlue"
                  : "bg-DarkBlue text-White"
          }`}
          onClick={() => router.push(`/category/${data.id}`)}
      >
        <Image
            src={data?.image}
            alt={""}
            width={200}
            height={200}
            className="w-full max-h-44 h-44 rounded-t-md"
            style={{objectFit: "cover"}}
            loading="lazy"
        />
        <div
            className={`grid grid-cols-1 md:grid-cols-2 px-6 py-2 ${
                colorMode === "light" ? "text-SuperDarkBlue" : "text-White"
            }`}
        >
          <div className={`col-span-1 md:col-span-2`}>
            <h1 className="my-1 font-[600]">{data?.[`${language}_name`]}</h1>
              <p className={'text-sm'}>{data?.[`${language}_description`]}</p>
          </div>
        </div>
      </div>
  );
}
