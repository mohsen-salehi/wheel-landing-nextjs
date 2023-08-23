export const modalReducer = (state , action) => {
    switch (action.type){
        case "OPEN_EDIT_MODAL" : {
            return state = "EDIT";
        }
        case "OPEN_CREATE_MODAL" : {
            return state = "CREATE";
        }
        case "CREATE_VOUCHER": {
            return state = "CREATE_VOUCHER"
        }
        case "CLOSE_MODAL" : {
            return  state = false
        }
        default : state = false
    }
}
