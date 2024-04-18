import Button from "@/components/atomic/Button";
import { GlobalContext } from "@/context";
import useLanguage from "@/logic/client/useLanguage";
import { useContext, useState } from "react";

export default function GuideModalContent({
  onClose,
  innerButtonRef,
}: {
  onClose: any;
  innerButtonRef: any;
}) {
  const { language } = useContext(GlobalContext);
  const { getContext } = useLanguage();
  const context = getContext(language);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  const displayModel = () => {
    try {
      if (isChecked === true) {
        sessionStorage?.setItem("displayModal", "false");
      }
      innerButtonRef?.current?.click();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-1 p-6 justify-evenly items-center shadow-md bg-opacity-95 bg-SuperDarkBlue rounded-lg absolute w-5/6 sm:w-2/5 top-0 mt-[30vh] left-1/2 -translate-x-1/2 bottom-70">
      <div className="text-center">
        <h1 className="text-lg font-bold">{context?.guide_lines_title}</h1>
      </div>
      <div className="px-2 py-8">
        {context?.guide_lines?.map((a) => (
          <li>{a}</li>
        ))}
      </div>
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mx-2"
        />
        {context?.never_show_me_again}
      </label>
      <div className="flex justify-center mt-2">        
        <Button onClick={() => displayModel()} label={context?.ok} />
      </div>
    </div>
  );
}
