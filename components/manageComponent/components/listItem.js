import React, {useContext} from 'react';
import {PencilSquareIcon, PlusIcon, TrashIcon} from "@heroicons/react/24/outline";
import {StoreContext} from "@/context/store";
import IndexModal from "@/components/manageComponent/components/crud/indexModal";
function ListItem() {
    const {modalState , modalDispatch } = useContext(StoreContext)
    return (
      <>
          <IndexModal/>
          <div className="p-3 hidden md:flex flex-wrap bg-stone-100 mb-3 w-full rounded-xl ">
              <div className="w-5/12">عنوان</div>
              <div className="w-2/12">ترتیب نمایش</div>
              <div className="w-3/12 text-center">عملیات</div>
              <div className="w-1/12 flex justify-end ">
                  <button onClick={() => modalDispatch({type : "OPEN_CREATE_MODAL"})} className="bg-blue-300 p-2 rounded" title="اضافه کردن کد جدید">
                      <PlusIcon className="w-5 h-5"/>
                  </button>
              </div>
          </div>
          <div className="p-3 flex flex-wrap border  items-center mb-3 w-full rounded-xl ">
              <div className="w-full md:w-5/12 my-2 md:my-0 flex justify-between md:justify-start items-center">
                  <div className="md:hidden">عنوان:</div>
                  کد تخفیف ۵۰ درصدی
              </div>
              <div className="w-full md:w-2/12 my-2 md:my-0 flex justify-between md:justify-start items-center">
                  <div className="md:hidden">ترتیب نمایش:</div>
                  <code className="bg-green-200 p-1.5 rounded-xl w-2/12 md:w-3/12 flex justify-center">2</code>
              </div>
              <div className="w-full md:w-3/12 my-2 md:my-0 flex justify-end md:justify-center items-center">
                  <button onClick={() => modalDispatch({type : "OPEN_EDIT_MODAL"})} className="py-2 w-2/12 justify-center  bg-yellow-400 flex mx-2 rounded-xl"><PencilSquareIcon className="w-5 text h-5"/></button>
                  <button className="py-2 w-2/12 justify-center  bg-red-400 flex  md:mx-2 rounded-xl"><TrashIcon className="w-5 text h-5"/></button>
              </div>
          </div>
      </>
    );
}

export default ListItem;