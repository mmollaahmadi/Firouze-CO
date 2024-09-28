import React, {useContext} from "react";
import InformationRow from "./InformationRow";
import {GlobalContext} from "@/context";
import useLanguage from "@/logic/client/useLanguage";

export default function SecondColumn({data}: { data: any }) {
    const {language} = useContext(GlobalContext);
    const {getContext} = useLanguage();
    const context = getContext(language);

    return (
        <div className="col-span-2 md:col-span-1">


            <InformationRow
                label={context?.feature ? `${context?.features}` : ""}
                value={data?.features}
            />

            {/*<InformationRow*/}
            {/*  label={context?.feature ? `${context?.feature} 5` : ""}*/}
            {/*  value={data?.currencies*/}
            {/*    ?.map((element: any) => {*/}
            {/*      return element.name;*/}
            {/*    })*/}
            {/*    .join(" ")}*/}
            {/*/>*/}
            {/*<InformationRow*/}
            {/*  label={context?.feature ? `${context?.feature} 6` : ""}*/}
            {/*  value={data?.languages*/}
            {/*    ?.map((element: any) => {*/}
            {/*      return element.name;*/}
            {/*    })*/}
            {/*    .join(" ")}*/}
            {/*/>*/}
        </div>
    );
}
