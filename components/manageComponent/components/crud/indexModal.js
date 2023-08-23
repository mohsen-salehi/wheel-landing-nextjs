import React, {useContext} from 'react';
import CreateModal from "@/components/manageComponent/components/crud/createModal";
import EditModal from "@/components/manageComponent/components/crud/editModal";
import {StoreContext} from "@/context/store";

function IndexModal() {
    const {modalState , modalDispatch} = useContext(StoreContext)

    return (
       <>
           {modalState === "CREATE" && <CreateModal/>}
           {modalState === "EDIT" && <EditModal/>}
       </>
    );
}

export default IndexModal;