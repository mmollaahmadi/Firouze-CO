import Button from "@/components/atomic/Button";
import { GlobalContext } from "@/context";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function ToolbarSection({
  innerButtonRef,
}: {
  innerButtonRef: any;
}) {
  const router = useRouter();
  const { language } = useContext(GlobalContext);

  return (
    <div className="flex flex-row w-full justify-start items-center my-6">
      <Button
        onClick={() => router.back()}
        label={language === "en" ? "Back" : "برگشت"}
        icon={language === "en" ? faArrowLeft : faArrowRight}
        className="mx-0"
      />
      <Button
        onClick={() => router.push("/")}
        label={language === "en" ? "Home" : "خانه"}
        className="mx-2"
      />
      <Button
        label={language === "en" ? "Display on the wall" : "مشاهده روی دیوار"}
        onClick={() => {
          innerButtonRef.current.click();
        }}
      />
    </div>
  );
}
