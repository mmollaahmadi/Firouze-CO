import Button from "@/components/atomic/Button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function ToolbarSection() {
  const router = useRouter();
  return (
    <div className="flex flex-row w-full justify-start items-center my-6">
      <Button
        onClick={() => router.back()}
        label={"Back"}
        icon={faArrowLeft}
        className="mx-0"
      />
      <Button
        onClick={() => router.push("/")}
        label={"Home"}
        className="mx-2"
      />
    </div>
  );
}
