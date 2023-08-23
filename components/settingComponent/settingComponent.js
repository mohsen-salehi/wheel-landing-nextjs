import React from 'react';
import VoucherList from "@/components/settingComponent/components/voucherList";
import Tips from "@/components/settingComponent/components/tips";
import CreatorBtn from "@/components/settingComponent/components/creatorBtn";

function SettingComponent() {
    return (
        <div className="w-full flex-wrap p-1 h-fit mb-10 md:md-0 flex content-start relative ">
            <h3 className="w-full text-2xl text-center shadow rounded p-2.5 bg-white">تنظیمات گردونه</h3>
            <div className="w-full bg-white p-3 mt-2 rounded flex justify-around items-center flex-wrap">
                <Tips/>
                <CreatorBtn/>
                <VoucherList/>
            </div>
        </div>
    );
}

export default SettingComponent;