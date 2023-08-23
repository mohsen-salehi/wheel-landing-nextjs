import React, {useContext} from 'react';
import {Form, Formik} from "formik";
import {validationSchema} from "@/schema/schemaValidation";
import InputTitle from "@/components/public/inputs/inputTitle";
import Modal from "@/components/public/modal/modal";
import {StoreContext} from "@/context/store";

function CreateModal() {
    const {modalState , modalDispatch} = useContext(StoreContext)
    const initialValue = {
        title : '' ,
        showOrder : ''
    }
    const onSubmit = (values , action) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            action.resetForm()
            action.setSubmitting(false);
        }, 400);
    }
    return (
       <Modal subject={' هدیه جدید'}>
           <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit} >
               {
                   (props) => (
                       <>
                           <Form className="flex w-full content-start   h-[94%] flex-wrap">
                               <div className="flex w-full p-2 content-start   h-[80%] flex-wrap">
                                   <div className="w-full flex flex-wrap justify-between items-center p-2 border-b">
                                       <InputTitle
                                           label="عنوان"
                                           name="title"
                                           type="text"
                                       />
                                   </div>
                                   <div className="w-full flex flex-wrap justify-between items-center p-2 border-b">
                                       <InputTitle
                                           label="ترتیب نمایش"
                                           name="showOrder"
                                           type="number"
                                       />
                                   </div>
                               </div>
                               <div className="w-full mt-16 h-fit bg-stone-200 flex justify-center items-center px-2 md:p-2 rounded-xl">
                                   <button disabled={props?.isSubmitting} type="submit" className="p-2 w-3/12 rounded-xl mx-2 bg-green-400">
                                       تایید
                                   </button>
                                   <button type="button" onClick={()=> modalDispatch({type : "CLOSE_MODAL"})} className="p-2 w-3/12 rounded-xl bg-red-400">
                                       بستن
                                   </button>
                               </div>
                           </Form>
                       </>
                   )
               }
           </Formik>
       </Modal>
    );
}

export default CreateModal;