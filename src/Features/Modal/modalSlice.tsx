import { createSlice } from "@reduxjs/toolkit";
import { ModalInitialState } from "../../Types/type";


const initialState:ModalInitialState = {
    isOpen:false,
    addedToCart:false,
    openFilteredContainer:false
}

const modalSlice =createSlice({
    name :"modal",
    initialState,
    reducers:{
        openModal:(state)=>{
            state.isOpen = true
        },
        closeModal:(state)=>{
            state.isOpen = false
        },
        showCartMessage:(state)=>{
            state.addedToCart = true
        },
        closeCartMessage:(state)=>{
            state.addedToCart = false
        },
        openFilterContainer :(state)=>{
            state.openFilteredContainer=true
        },
        closeFilterContainer:(state)=>{
            state.openFilteredContainer =false
        }

    }
})

export const {openModal,closeModal,showCartMessage,closeCartMessage,openFilterContainer,closeFilterContainer} = modalSlice.actions

export default modalSlice.reducer