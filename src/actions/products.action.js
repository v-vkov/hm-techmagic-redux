import * as productService from '../services'

export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SORT_PRODUCTS = 'SORT_PRODUCTS';

export const setProductList = payload => ({type: SET_PRODUCT_LIST, products: payload});
export const sortProducts = payload => ({type: SORT_PRODUCTS, sortKey: payload});


export const setProductsThunk = () => dispatch => {
  productService.getProducts().then( res => dispatch(setProductList(res))  );
}

export const addNewProductThunk = item => dispatch => {
    productService.addNewProduct(item)
        .then( () => dispatch(setProductsThunk()) )
}

export const incrProductAvailability = item => dispatch => {
    productService.incrAvailable(item)
    .then(dispatch(setProductsThunk()))
}

export const decrProductAvailability = item => dispatch => {
    productService.decrAvailable(item)
    .then(dispatch(setProductsThunk()))
}

export const returnInitialAvailability = item => dispatch => {
    productService.returnInitAvailable(item)
    .then(dispatch(setProductsThunk()))
}