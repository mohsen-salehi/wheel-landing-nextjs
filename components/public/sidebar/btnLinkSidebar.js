import React from 'react';
import Link from "next/link";

function BtnLinkSidebar({title, href, icon}) {
    return (
        <Link href={href}
              className="bg-white flex justify-between  mb-2 hover:bg-manual hover:text-white duration-300  w-full rounded-xl p-3 md:p-2 border-transparent">
            {title}
            {icon}
        </Link>
    );
}

export default BtnLinkSidebar;