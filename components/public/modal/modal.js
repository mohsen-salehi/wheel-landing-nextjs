import React, {useContext, useState} from 'react';
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {StoreContext} from "@/context/store";
function Modal({children , subject}) {
    const {modalState , modalDispatch} = useContext(StoreContext)

    return (
        <section className={`${modalState ? "flex" : "hidden"} w-screen anime-show  h-screen  items-center justify-center fixed top-0 `}>
               <div className="bg-white rounded-xl shadow flex flex-wrap w-full content-center md:w-6/12 h-screen md:h-5/6 p-2">
                   <div className="w-full bg-stone-200 min-h-[6%] h-fit flex justify-between items-center px-2 md:p-2 rounded-xl">
                       <h3 className="px-2 ">{subject}</h3>
                       <button onClick={()=> modalDispatch({type : "CLOSE_MODAL"})} className="p-2 rounded-xl bg-red-400">
                           <CloseIcon className="w-5 h-5"/>
                       </button>
                   </div>
                   {children}
               </div>
        </section>
    );
}

export default Modal;