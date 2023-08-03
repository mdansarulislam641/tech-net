import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/product/productSlice';
const store = configureStore({
    reducer : {
        carts : cartReducer,
        products : productReducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch ;

export default store ;