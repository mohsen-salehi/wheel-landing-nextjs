import React from 'react';
import {ChevronLeftIcon} from "@heroicons/react/24/outline";

function OpenBtn({menuBar , setMenuBar}) {
    return (
        <button
            onClick={() => menuBar ?  setMenuBar(false) : setMenuBar(true)}
            className="h-[50px] flex items-center justify-center w-[10%] shadow-lg rounded-e-2xl shadow-sm-white   ">
            <ChevronLeftIcon className="w-6 text-white"/>
        </button>
    );
}

export default OpenBtn;