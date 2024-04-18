import Button from "@/components/atomic/Button";
import GuideModalContent from "@/components/composite/Modals/GuideModalContent";
import { GlobalContext } from "@/context";
import useLanguage from "@/logic/client/useLanguage";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";

export default function ToolbarSection({
  innerButtonRef,
}: {
  innerButtonRef: any;
}) {
  const router = useRouter();
  const { language } = useContext(GlobalContext);
  const { getContext } = useLanguage();
  const context = getContext(language);
  const [showModal, setShowModal] = useState(false);

  const onDisplayModalClick = () => {
    try {
      let displayModal = sessionStorage.getItem("displayModal");
      if (displayModal && displayModal === "false") {
        innerButtonRef?.current?.click();
      } else {
        setShowModal(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row w-full justify-start items-center my-6">
      <Button
        onClick={() => router.back()}
        label={context?.back_btn}
        icon={language === "en" ? faArrowLeft : faArrowRight}
        className="mx-0"
      />
      <Button
        onClick={() => router.push("/")}
        label={context?.home_btn}
        className="mx-2"
      />
      <Button
        label={language === "en" ? "Display on the wall" : "مشاهده روی دیوار"}
        onClick={() => onDisplayModalClick()}
      />
      {showModal &&
        createPortal(
          <GuideModalContent
            onClose={() => setShowModal(false)}
            innerButtonRef
          />,
          document.body
        )}
    </div>
  );
}
