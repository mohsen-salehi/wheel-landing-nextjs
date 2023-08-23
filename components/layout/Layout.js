import React, {useState} from 'react';
import SideBar from "@/components/public/sidebar/SideBar";
import Header from "@/components/public/header/Header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Layout({children}) {
    const [menuBar, setMenuBar] = useState(true)
    return (
        <section dir="rtl" className="w-full flex flex-wrap h-screen overflow-hidden relative">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Header menuBar={menuBar} setMenuBar={setMenuBar}/>
            <div className="flex w-[20%]">
                <SideBar menuBar={menuBar} setMenuBar={setMenuBar}/>
            </div>
            <main className="w-full md:w-[80%]  overflow-x-hidden overflow-y-auto  h-full  bg-stone-200">
                {children}
            </main>

        </section>

    );
}

export default Layout;