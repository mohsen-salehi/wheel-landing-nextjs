import React from 'react';
import {useField} from "formik";

function InputTitle({label, ...props}) {
    const [field, meta] = useField(props)
    return (
        <>
            <label>{label} : </label>
            <input
                {...field}
                {...props}
                className={`${meta.touched && meta.error ? "border-red-500" : 'border'} p-2 rounded-xl bg-stone-100 active:outline-none  border outline-none`}
            />

            {meta.touched && meta.error ? (
                <div className="w-full  flex text-sm border-red p-2 bg-red-50 rounded-xl mt-2 text-red-500">
                    <div className="error anime-show">{meta.error}</div>
                </div>
            ) : null}

        </>
    );
}

export default InputTitle;