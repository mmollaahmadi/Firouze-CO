import { GlobalContext } from "@/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
export default function Button({
  label,
  icon,
  className,
  onClick,
}: {
  label: string;
  icon?: any;
  className?: string;
  onClick: (event: any) => void;
}) {
  const { colorMode } = useContext(GlobalContext);
  return (
    <button
      className={`${className} w-fit max-w-56 text-sm px-4 py-1 mx-2 h-fit shadow-md rounded-sm flex flex-row justify-around items-center \
    ${
      colorMode === "light"
        ? "bg-White text-SuperDarkBlue"
        : "bg-DarkBlue text-White"
    }`}
      onClick={onClick}
    >
      {icon ? <FontAwesomeIcon icon={icon} className="my-auto mx-2" /> : null}
      <p>{label}</p>
    </button>
  );
}
