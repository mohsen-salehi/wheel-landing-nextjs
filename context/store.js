'use client'

import {createContext, useReducer} from "react";
import {modalReducer} from "@/context/reducers/ModalReducer";
import {todoReducer} from "@/context/reducers/TodoReducer";

export const StoreContext = createContext([])
const initialState = {
    todo :  [],
    modal : false
}

export function StoreContextProvider({children}) {

    const [modalState, modalDispatch] = useReducer(modalReducer, initialState.modal);
    const [todoState, todoDispatch] = useReducer(todoReducer, initialState.todo);

    const value = {
        modalState , modalDispatch,
        todoState , todoDispatch
    }

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}