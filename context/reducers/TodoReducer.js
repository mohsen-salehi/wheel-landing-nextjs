
import {toast} from "react-toastify";

export const todoReducer = (state , {type,payload}) => {
    switch (type) {
        case "ADD_TODO" : {
            let listCount = state?.length
            if(listCount < 7 ) return payload
        } break
        case "DELETE_TODO" : {
            return state.filter(item => item.id !== payload) ;
        }
        default :
            return state;
    }
}