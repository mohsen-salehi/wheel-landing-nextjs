import React, {useContext} from 'react';
import {PlusIcon} from "@heroicons/react/24/outline";
import {StoreContext} from "@/context/store";

function CreatorBtn() {
    const {modalState , modalDispatch} = useContext(StoreContext)
    return (
        <section className="w-full flex flex-wrap p-2 justify-between items-center border rounded-xl">
            <div>
                ساخت تکه های گردونه :
            </div>
            <div>
                <button onClick={() => modalDispatch({type : "CREATE_VOUCHER"})} className="p-2 rounded-xl  bg-blue-400 text-white"> <PlusIcon className="w-5 h-5"/></button>
            </div>
        </section>
    );
}

export default CreatorBtn;