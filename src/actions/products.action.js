export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const INCR_PRODUCT_AVAILABILITY = 'INCR_PRODUCT_AVAILABILITY';
export const DECR_PRODUCT_AVAILABILITY = 'DECR_PRODUCT_AVAILABILITY';
export const RETURN_INITIAL_AVAILABILITY = 'RETURN_INITIAL_AVAILABILITY';
export const SORT_PRODUCTS = 'SORT_PRODUCTS';

export const getProductList = () => ({type: GET_PRODUCT_LIST});
export const addNewProduct = payload => ({type: ADD_NEW_PRODUCT, product: payload});
export const incrProductAvailability = payload => ({type: INCR_PRODUCT_AVAILABILITY, product: payload});
export const decrProductAvailability = payload => ({type: DECR_PRODUCT_AVAILABILITY, product: payload});
export const returnInitialAvailability = payload => ({type: RETURN_INITIAL_AVAILABILITY, product: payload});
export const sortProducts = payload => ({type: SORT_PRODUCTS, sortKey: payload});