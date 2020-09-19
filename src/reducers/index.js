// TODO: implement combine reducer functionality
import cartReducer from './cart.reducer';
import productReducer from './products.reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({

    cartPage: cartReducer,
    productsPage: productReducer

})

export default rootReducer;