import React, {Component} from 'react';
import {connect} from 'react-redux';

import './product-list.css';

import SortBy from './../sorting/index';

import {addItemToCart} from '../../actions/cart.actions' 
import { decrProductAvailability } from './../../actions/products.action';


export class ProductList extends Component {
  constructor(props) {
    super();

    this.addToCart = this.addToCart.bind(this);
  }

  renderProducts() {

    const products = this.props.productsPage.products;
    const sortingBy = this.props.productsPage.sorted;
    console.log(sortingBy);

    return products
      .sort((itemA, itemB) => {
        if (sortingBy === 'availability' ) {
          if(itemA.available === itemB.available)
          {
            return itemA.name.localeCompare(itemB.name);
          }
          else
          {
            return itemA.available - itemB.available;
          }  
        }

        if (sortingBy === 'price' ) {
          if(itemA.price === itemB.price)
          {
            return itemA.name.localeCompare(itemB.name);
          }
          else
          {
            return itemA.price - itemB.price;
          }         
        }

        return itemA.name.localeCompare(itemB.name);
      })  
      .map((i, index) => {
        const isDisabled = i.available > 0 ? false : true;
        return (
          <div className="product_list_item" key={index}>
            <p>{i.name}</p>
            <p>Price: {i.price}</p>
            <p>{i.available > 0 ? `In stock ${i.available}` : 'Sold out'}</p>
            <button disabled={isDisabled} className="add-to-cart-btn" onClick={() => this.addToCart(i)}>Add to cart</button>
          </div>
        ) 
      });
  }

  addToCart(item) {
    this.props.addItemToCart(item); 
    this.props.decrProductAvailability(item);  
  }


  render() {
    return ( <div>
      <SortBy />
      <div className="App-product_list">
        {this.renderProducts()}
      </div>
    </div>);
  }
}


const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addItemToCart(item)),
    decrProductAvailability: item => dispatch(decrProductAvailability(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);