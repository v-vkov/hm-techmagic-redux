import { SET_PRODUCT_LIST, SORT_PRODUCTS } from '../actions/products.action';

const initState = {
  products: [],
  sortingOptions: [
    {
      name:'name',
      label:'Name',
    },
    {
      name:'price',
      label:'Price',
    },
    {
      name:'availability',
      label:'Availability',
    }
  ],
  sorted: "name"
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
    const newProducts = action.products;
      return {
        ...state, 
        products: newProducts
      }    
    case SORT_PRODUCTS:
      const value = action.sortKey;
      
      return {
        ...state, 
        sorted: value
      }
      
    default:
      return state;
  }
}
