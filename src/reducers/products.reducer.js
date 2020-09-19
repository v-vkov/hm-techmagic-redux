import {
    GET_PRODUCT_LIST, 
    INCR_PRODUCT_AVAILABILITY, 
    DECR_PRODUCT_AVAILABILITY, 
    RETURN_INITIAL_AVAILABILITY, 
    ADD_NEW_PRODUCT,
    SORT_PRODUCTS
  } 
from '../actions/products.action';

const initState = {
  products: [
    {
      name: 'iPhone 4s',
      price: 200,
      available: 2
    },
    {
      name: 'Nokia 2110',
      price: 600,
      available: 0
    },
    {
      name: 'Samsung s3',
      price: 345,
      available: 2
    },
    {
      name: 'LG G2',
      price: 90,
      available: 1
    },
    {
      name: 'Nokia 9930',
      price: 250,
      available: 3
    },
    {
      name: 'iPhone X',
      price: 123,
      available: 4
    },
    {
      name: 'Meizu m9',
      price: 656,
      available: 23
    },
    {
      name: 'Sonny 9',
      price: 564,
      available: 234
    },
    {
      name: 'iPhone 6 plus',
      price: 434,
      available: 7
    },
    {
      name: 'Alcatel noname',
      price: 123,
      available: 7
    }
  ],
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
    },
  ],
  sorted: "name"
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return state.products;
    case INCR_PRODUCT_AVAILABILITY:
      const itemIncr = state.products.find((item) => item.name === action.product.name);
      return {
        ...state, 
        products:  [
          ...state.products.filter((item) => item.name !== itemIncr.name), 
          { ...itemIncr, available: ++itemIncr.available }
        ]
      }
    case DECR_PRODUCT_AVAILABILITY:
        const itemDecr = {...state.products.find((item) => item.name === action.product.name) };
      return {
        ...state, 
        products:  [
          ...state.products.filter((item) => item.name !== itemDecr.name), 
          { ...itemDecr, available: --itemDecr.available }
        ]
      }
    case RETURN_INITIAL_AVAILABILITY:
        const productItem = state.products.find((item) => item.name === action.product.name);
        console.log("product:", productItem);
        console.log("action product:", action.product);
      return {
        ...state, 
        products:  [
          ...state.products.filter((item) => item.name !== productItem.name), 
          { ...productItem, available: action.product.available }
        ]
      }
    case ADD_NEW_PRODUCT: 
      const newProduct = action.product;
      return {
        ...state, 
        products: [
          ...state.products, { 
            name: newProduct.name,
            price: newProduct.price,
            available: newProduct.available
          }
        ]
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
