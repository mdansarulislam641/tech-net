import {  createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit'
import {IProduct} from '../../../types/globalTypes';
interface ICart {
    products : IProduct[]
}
const initialState : ICart = {
    products : []
};


const cartSlice = createSlice({
    name : "cart",
    initialState ,
    reducers : {
        addToCart : (state , action : PayloadAction<IProduct> )=>{
            const existingProduct = state.products.find(product => product._id === action.payload._id);
            if(existingProduct){
                existingProduct.quantity! += 1
            }
            else{
                state.products.push({...action.payload, quantity : 1})
            }
        },
        decrementQuantity : (state , action : PayloadAction<IProduct>) =>{
            const existingProduct = state.products.find(product => product._id === action.payload._id);
            if(existingProduct && existingProduct.quantity! > 1){
                existingProduct.quantity! -= 1
            }
        },
        removeCart : (state , action : PayloadAction<IProduct>) =>{
            state.products = state.products.filter(product => product._id !== product._id)
        }
    }
});

export const {addToCart , decrementQuantity , removeCart} = cartSlice.actions ;
export default cartSlice.reducer ;