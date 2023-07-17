import {  createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit'
import {IProduct} from '../../../types/globalTypes';
interface ICart {
    products : IProduct[],
    total : number
}
const initialState : ICart = {
    products : [],
    total : 0
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
            state.total += action.payload.price
        },
        decrementQuantity : (state , action : PayloadAction<IProduct>) =>{
            const existingProduct = state.products.find(product => product._id === action.payload._id);
            if(existingProduct && existingProduct.quantity! > 1){
                existingProduct.quantity! -= 1
            }
            state.total -= action.payload.price
        },
        removeCart : (state , action : PayloadAction<IProduct>) =>{
            state.products = state.products.filter(product => product._id !== action.payload._id)
            state.total -= action.payload.price * action.payload.quantity!
        }
    }
});

export const {addToCart , decrementQuantity , removeCart} = cartSlice.actions ;
export default cartSlice.reducer ;