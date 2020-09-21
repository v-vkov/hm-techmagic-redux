export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART'

export const removeFromCart = item => ({type: REMOVE_FROM_CART, item });
export const addItemToCart = item => ({type: ADD_ITEM_TO_CART, item });
export const removeOne = item => ({type: REMOVE_ONE_FROM_CART, item})