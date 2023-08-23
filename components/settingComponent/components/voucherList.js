import React, {useContext, useEffect} from 'react';
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import IndexModal from "@/components/settingComponent/components/curd/indexModal";
import {StoreContext} from "@/context/store";

function VoucherList() {
    const {todoState, todoDispatch} = useContext(StoreContext)
    return (
        <>
            <IndexModal/>
            {
                todoState && todoState.map((item , index) => (
                    <section key={index} className='w-full flex mt-2 '>
                        <div className="w-full flex p-2 flex-wrap items-center rounded-xl bg-stone-100">
                            <button
                                onClick={() => todoDispatch({type : "DELETE_TODO" ,payload :  item?.id})}
                                className="p-1 md:p-2 rounded-xl bg-red-300"><CloseIcon classname="w-5 h-5"/></button>
                            <div
                                className="flex items-center md:justify-start flex-wrap   justify-between p-2 w-full md:w-2/5">
                                <span>عنوان جایزه : </span>
                                <code
                                    className="bg-green-200 w-3/12 text-sm rounded-xl p-1 text-center md:p-2 overflow-ellipsis"> {item?.title} </code>
                            </div>
                            <div className="flex items-center md:justify-start justify-between p-2 w-full md:w-1/4">
                                <span>درصد برنده شدن : </span>
                                <code
                                    className="bg-green-200 w-3/12 text-sm rounded-xl p-1 text-center md:p-2"> %{item?.percent} </code>
                            </div>
                            <div className="flex items-center md:justify-start justify-between p-2 w-full md:w-1/4">
                                <span> دفعات تکرار جایزه : </span>
                                <code
                                    className="bg-green-200 w-3/12 text-sm rounded-xl p-1 text-center md:p-2"> {item?.repetitions} </code>
                            </div>
                        </div>
                    </section>
                ))
            }
        </>
    );
}

export default VoucherList;