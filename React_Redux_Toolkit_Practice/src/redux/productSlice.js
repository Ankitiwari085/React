import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct=createAsyncThunk('products',async()=>{
    const responseProduct=await fetch('https://dummyjson.com/products');
    const jsonResponseProduct= await responseProduct.json();
    return jsonResponseProduct.products
})

const initialState={
    items:[],
    status:undefined,
    error:null
}

const productSlice=createSlice({
    name:'productSlice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.items=action.payload
        })
    }
})

export default productSlice.reducer;