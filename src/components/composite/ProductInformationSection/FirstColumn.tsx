import React, {useContext} from "react";
import InformationRow from "./InformationRow";
import {GlobalContext} from "@/context";
import useLanguage from "@/logic/client/useLanguage";

export default function FirstColumn({
                                        withDetail,
                                        data,
                                    }: {
    withDetail: boolean;
    data: any;
}) {
    const {language, categories} = useContext(GlobalContext);
    const {getContext} = useLanguage();
    const context = getContext(language);

    return (
        <div className={`col-span-2 ${withDetail && "md:col-span-1"}`}>
            {withDetail && <InformationRow
                label={`${language === "en" ? "Product Name" : "نام محصول"}`}
                value={data?.[`${language}_name`]}
            />}
            {withDetail && <InformationRow
                label={context?.category ?? ""}
                value={
                    categories?.find(category => category?.id === data?.category_id)?.[
                        `${language}_name`
                        ] ?? ''
                }
            />}
            {/*{withDetail && (*/}
            {/*    <InformationRow*/}
            {/*        label={context?.feature ? `${context?.feature} 3` : ""}*/}
            {/*        value={data?.subregion}*/}
            {/*    />*/}
            {/*)}*/}
        </div>
    );
}
