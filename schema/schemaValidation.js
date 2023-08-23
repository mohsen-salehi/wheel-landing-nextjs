import * as yup from "yup"

const emailRules = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const validationSchema = yup.object().shape({
    title : yup.string().required("این فیلد الزامی است!"),
    showOrder : yup.number().required("این فیلد الزامی است!"),
})
export const validationModalCreateVoucher = yup.object().shape({
    title : yup.string().required("این فیلد الزامی است!"),
    percent : yup.number().typeError("مقدار باید انگلیسی و شماره وارد شود !").required("این فیلد الزامی است!"),
    repetitions : yup.number().typeError("مقدار باید انگلیسی و شماره وارد شود !").required("این فیلد الزامی است!"),
})