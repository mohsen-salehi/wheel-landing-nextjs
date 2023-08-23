import React, {useContext} from 'react';
import {PlusIcon} from "@heroicons/react/24/outline";
import {StoreContext} from "@/context/store";

function MenuMobile() {
    const {modalState , modalDispatch } = useContext(StoreContext)
    return (
        <div className="p-2 w-full flex justify-end md:hidden">
            <div className="w-1/12 flex justify-end ">
                <button onClick={() => modalDispatch({type : "OPEN_CREATE_MODAL"})} className="bg-blue-300 p-2 rounded" title="اضافه کردن کد جدید">
                    <PlusIcon className="w-5 h-5"/>
                </button>
            </div>
        </div>
    );
}

export default MenuMobile;