import React from 'react';
import MenuMobile from "@/components/manageComponent/components/menuMobile";
import ListItem from "@/components/manageComponent/components/listItem";

function ManageComponent() {
    return (
        <section className="w-full flex-wrap p-1 h-fit mb-10 md:md-0 flex content-start relative ">
            <h3 className="w-full text-2xl text-center shadow rounded p-2.5 bg-white">مدیریت هدیه ها</h3>
            <section className="w-full bg-white p-3 mt-2 rounded flex justify-around items-center flex-wrap">
                <MenuMobile/>
                <ListItem/>
            </section>
        </section>);
}

export default ManageComponent;