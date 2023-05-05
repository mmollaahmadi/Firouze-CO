import React, { useContext, useState } from "react";
import * as SelectRadix from "@radix-ui/react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "@/context";

export default function Select({
  options,
  onValueChange,
  value,
}: {
  options: { value: string; label: string }[];
  onValueChange: (value: any) => void;
  value: string;
}) {
  const { colorMode } = useContext(GlobalContext);
  const [key, setKey] = useState<number>(+new Date());

  function handleOnValueChange(value: string) {
    if (value === "") {
      onValueChange(undefined);
      setKey(+new Date());
    } else {
      onValueChange(value);
    }
  }
  return (
    <SelectRadix.Root
      key={key}
      value={value}
      onValueChange={handleOnValueChange}
    >
      <SelectRadix.Trigger
        className={`shadow-md rounded-md my-2 outline-none flex flex-row justify-between items-center min-w-[35%] \
        w-full px-6 py-2 text-center focus:outline-none ring-0 text-sm \
        ${
          colorMode === "light"
            ? "bg-White text-SuperDarkBlue"
            : "bg-DarkBlue text-White"
        }
        ${value === undefined ? "text-opacity-50" : "text-opacity-1"}
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
          className={`w-[200px] shadow-md rounded-md mt-1 text-small \
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
          <SelectRadix.Viewport className="py-2">
            {options?.map((option, index) => (
              <SelectRadix.Item
                key={index}
                value={option.value}
                className={`py-1 hover:cursor-pointer text-sm outline-none w-full px-6 ${
                  colorMode === "light"
                    ? "hover:bg-DarkGray/10"
                    : "hover:bg-White/10"
                }`}
              >
                <SelectRadix.ItemText>{option.label}</SelectRadix.ItemText>
                <SelectRadix.ItemIndicator></SelectRadix.ItemIndicator>
              </SelectRadix.Item>
            ))}
            {options.length > 0 && value !== undefined && (
              <>
                <SelectRadix.Separator
                  className={`h-[1px] my-1 mx-4 ${
                    colorMode === "light" ? "bg-DarkBlue/50" : "bg-White/50"
                  }`}
                />
                <SelectRadix.Item
                  value={""}
                  className={`py-1 hover:cursor-pointer text-sm outline-none w-full px-6 ${
                    colorMode === "light"
                      ? "hover:bg-DarkGray/10"
                      : "hover:bg-White/10"
                  }`}
                >
                  <SelectRadix.ItemText>{"Clear Filter"}</SelectRadix.ItemText>
                  <SelectRadix.ItemIndicator></SelectRadix.ItemIndicator>
                </SelectRadix.Item>
              </>
            )}
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  );
}
