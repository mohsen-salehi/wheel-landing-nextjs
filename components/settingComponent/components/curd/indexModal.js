import React, {useContext} from 'react';
import {StoreContext} from "@/context/store";
import CreateModal from "@/components/settingComponent/components/curd/createModal";

function IndexModal() {
    const {modalState , modalDispatch} = useContext(StoreContext)

    return (
        <>
            {modalState === "CREATE_VOUCHER" && <CreateModal/>}
        </>
    );
}

export default IndexModal;