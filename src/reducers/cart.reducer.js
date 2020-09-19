import {GET_CART_ITEMS, ADD_ITEM_TO_CART, REMOVE_FROM_CART, REMOVE_ONE_FROM_CART} from '../actions/cart.actions';

const initState = {
    inCart: [],
    
}

export default (state = initState, action) => {
    switch (action.type) {
      case GET_CART_ITEMS:
        return {...state.inCart};
      case ADD_ITEM_TO_CART:
        const newItem = {...action.item};       
        const cartItem = state.inCart
          .find((item) => item.name === newItem.name);
        const updatedCartItem = cartItem ? { ...cartItem, amount: ++cartItem.amount, available: --cartItem.available } : undefined;
  
          return {
            ...state,
            inCart: !cartItem 
              ? [...state.inCart, { name: newItem.name, price: newItem.price, available: newItem.available, amount: 1 }] 
              : [
                  ...state.inCart.filter((item) => item.name !== updatedCartItem.name), 
                  updatedCartItem
                ]
          }
        ;
        case REMOVE_ONE_FROM_CART:
          const oneToRemove = state.inCart.find((item) => item.name === action.item.name);  
    
          return {
            ...state,
            inCart: [
              ...state.inCart.filter((item) => item.name !== action.item.name), 
              { ...oneToRemove, amount: --oneToRemove.amount, available: ++oneToRemove.available }
            ]

          }

        case REMOVE_FROM_CART:
          let itemToRemove = state.inCart.find((item) => item.name === action.item.name);  
          itemToRemove.available += itemToRemove.amount-1;
          
          return {
            ...state,
            inCart: [
              ...state.inCart.filter((item) => item.name !== action.item.name)
            ]
          }
      default:
        return state;
    }
  }