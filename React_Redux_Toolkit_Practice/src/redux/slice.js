import { createSlice } from "@reduxjs/toolkit"

const initialState={
    // value:0
    items:[]
}

const addToCart=createSlice(
    {
        name:'cart',
        initialState,
        reducers:{
            addItem:(state)=>{
            // state.value+=1;
            state.items.push(action.payload)
        },
          removeItem:(state)=>{
            state.value > 0 ?state.value-=1:null;
        }
        }
    }
)
export const {addItem,removeItem}=addToCart.actions;
export default addToCart.reducer;