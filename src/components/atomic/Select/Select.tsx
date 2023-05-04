import React, { useContext } from "react";
import * as SelectRadix from "@radix-ui/react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "@/context";

export default function Select({
  options,
}: {
  options: { value: string; label: string }[];
}) {
  const { colorMode } = useContext(GlobalContext);
  return (
    <SelectRadix.Root>
      <SelectRadix.Trigger
        className={`shadow-md rounded-md my-2 outline-none flex flex-row justify-between items-center min-w-[35%] w-full px-6 py-2 text-center focus:outline-none ring-0 text-sm \
        ${
          colorMode === "light"
            ? "bg-White text-SuperDarkBlue placeholder:text-SuperDarkBlue"
            : "bg-DarkBlue text-White placeholder:text-White"
        }
        `}
        aria-label="Food"
      >
        <SelectRadix.Value placeholder="Filter by Region" />
        <SelectRadix.Icon>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="bg-opacity-10 bg-gray rounded-md mx-1 items-center"
          />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>
      <SelectRadix.Portal>
        <SelectRadix.Content
          className={`w-[200px] px-6 shadow-md rounded-md mt-1 text-small \
        ${
          colorMode === "light"
            ? "bg-White text-SuperDarkBlue placeholder:text-SuperDarkBlue"
            : "bg-DarkBlue text-White placeholder:text-White"
        }
        `}
          position="popper"
          align="start"
          alignOffset={0}
        >
          <SelectRadix.Viewport>
            {options?.map((option, index) => (
              <SelectRadix.Item
                key={index}
                value={option.value}
                className="py-1 hover:cursor-pointer text-sm"
              >
                <SelectRadix.ItemText>{option.label}</SelectRadix.ItemText>
                <SelectRadix.ItemIndicator></SelectRadix.ItemIndicator>
              </SelectRadix.Item>
            ))}
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  );
}
