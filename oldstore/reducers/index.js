import {combineReducers} from 'redux';
import cartReducer from './cartReducer'; // Create this file to define your cart reducer
import productReducer from './productReducer'; // Create this file to define your product reducer

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

export default rootReducer;
