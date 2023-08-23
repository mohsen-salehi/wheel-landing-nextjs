import React from 'react';
import OpenBtn from "@/components/public/buttons/OpenBtn";
import Image from "next/image";
import Logo from "@/public/icon.svg";
import CloseBtn from "@/components/public/buttons/CloseBtn";

function Header({menuBar, setMenuBar}) {
    return (
        <header className="bg-stone-600 flex-wrap items-center w-full justify-between rounded-b-xl flex md:hidden">
                <OpenBtn menuBar={menuBar} setMenuBar={setMenuBar}/>
            <div className="w-10/12 ps-[15%]">
                <Image src={Logo} alt="elanza"  width={150} height={50}/>
            </div>
        </header>
    );
}

export default Header;