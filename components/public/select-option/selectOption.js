import React from 'react';
import {Field, useField} from "formik";

function SelectOption({label , data , ...props}) {
    const [field, meta, helpers] = useField(props.name)
    const {setValue} = helpers;

    return (
        <>
            <label>{label} : </label>
            <Field
                as="select"
                {...field}
                {...props}
                onChange={(e) => setValue(e?.target?.value)}
                className={`${meta.touched && meta.error ? "border-red-500" : 'border'} p-2 rounded-xl bg-stone-100 active:outline-none  border outline-none`}
            >
                <option selected  value="انتخاب کنید">انتخاب کنید</option>
                {
                   data.map((item , index) => (
                        <option key={index} value={item?.value}>{item?.title}</option>
                    ))
                }

            </Field>

            {meta.touched && meta.error ? (
                <div className="w-full  flex text-sm border-red p-2 bg-red-50 rounded-xl mt-2 text-red-500">
                    <div className="error anime-show">{meta.error}</div>
                </div>
            ) : null}

        </>
    );
}

export default SelectOption;