import React from 'react';
import {ChevronRightIcon} from "@heroicons/react/20/solid";

function CloseBtn({menuBar , setMenuBar}) {
    return (
        <button onClick={() => menuBar ?  setMenuBar(false) : setMenuBar(true)} className="h-full text-black w-[10%] flex justify-center items-center md:hidden shadow-lg py-2 rounded-s-2xl  "> <ChevronRightIcon className="w-5 h-5" /> </button>
    );
}

export default CloseBtn;