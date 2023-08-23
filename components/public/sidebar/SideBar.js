import Image from "next/image";
import Logo from "@/public/icon.svg"
import {CogIcon, DocumentChartBarIcon, GiftIcon, TagIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import CloseBtn from "@/components/public/buttons/CloseBtn";
import BtnLinkSidebar from "@/components/public/sidebar/btnLinkSidebar";

function SideBar({menuBar, setMenuBar}) {
    return (<aside
            className={`${menuBar ? "-right-full md:right-0 " : "right-0"} flex absolute top-0 z-50 duration-500 flex-wrap content-start w-full md:w-[20%]  md:rounded-xl h-full bg-stone-800`}>
            <figure className="w-full flex p-3 pe-0 shadow bg-white  mb-2">
                <Image src={Logo} alt="elanza" layout="responsive" width={100} height={50}/>
                <CloseBtn menuBar={menuBar} setMenuBar={setMenuBar}/>
            </figure>
            <div className="w-full flex flex-wrap p-1">
                <BtnLinkSidebar title="تنظیمات" href="/setting" icon={<CogIcon className="h-7"/>}/>
                <BtnLinkSidebar title="گزارشات" href="/report" icon={<DocumentChartBarIcon className="h-7"/>}/>
                <BtnLinkSidebar title="مدیریت هدیه ها" href="/manage" icon={<GiftIcon className="h-7"/>}/>
            </div>
        </aside>);
}

export default SideBar;