import React, {useContext, useEffect, useState} from 'react';
import Modal from "@/components/public/modal/modal";
import {StoreContext} from "@/context/store";
import {Form, Formik} from "formik";
import {validationModalCreateVoucher} from "@/schema/schemaValidation";
import InputTitle from "@/components/public/inputs/inputTitle";
import SelectOption from "@/components/public/select-option/selectOption";
import {toast} from "react-toastify";

function CreateModal() {
    const {modalState, modalDispatch} = useContext(StoreContext)
    const {todoState , todoDispatch} = useContext(StoreContext)

    const data = [
        {value: "test", title: "test"},
        {value: "test2", title: "test2"}
    ]
    const initialValue = {
        title: "",
        percent: '',
        repetitions: '',
        id : new Date().getMilliseconds()
    }
    const onSubmit = (values, action) => {
        if (todoState.length > 0 ) toast.warn("مقادیر ساخته شده باید بین ۲ و ۸ باشند ! ")
        setTimeout(() => {
            action.resetForm()
            action.setSubmitting(false);
            todoDispatch({type : 'ADD_TODO' , payload : [...todoState , values]})
            modalDispatch({type : "CLOSE_MODAL"})
        }, 400);
    }
    return (
        <Modal subject={'ساخت گردونه'}>
            <Formik initialValues={initialValue} validationSchema={validationModalCreateVoucher} onSubmit={onSubmit}>
                {
                    (props) => (
                        <>
                            <Form className="flex w-full content-start   h-[90%] flex-wrap">
                                <div className="flex w-full p-2 content-start   md:h-[70%] 2xl:h-[85%] flex-wrap">
                                    <div className="w-full flex flex-wrap justify-between items-center p-2 border-b">
                                        <SelectOption
                                            label="عنوان جایزه"
                                            name="title"
                                            placeholder="عنوان جایزه"
                                            data={data}
                                        />
                                    </div>
                                    <div className="w-full flex flex-wrap justify-between items-center p-2 border-b">
                                        <InputTitle
                                            label="درصد برنده شدن"
                                            name="percent"
                                            type="tel"
                                            maxLength={3}
                                        />
                                    </div>
                                    <div className="w-full flex flex-wrap justify-between items-center p-2 border-b">
                                        <InputTitle
                                            label="دفعات تکرار "
                                            name="repetitions"
                                            maxLength={1}
                                            type="tel"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="w-full mt-16 h-fit bg-stone-200 flex justify-center items-center px-2 md:p-2 rounded-xl">
                                    <button disabled={props?.isSubmitting} type="submit"
                                            className="p-2 w-3/12 disabled:opacity-75 rounded-xl mx-2 bg-green-400">
                                        تایید
                                    </button>
                                    <button type="button" onClick={() => modalDispatch({type: "CLOSE_MODAL"})}
                                            className="p-2 w-3/12 rounded-xl bg-red-400">
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