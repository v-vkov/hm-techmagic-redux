import React, {Component} from 'react';
import {connect} from 'react-redux';

import './product-list.css';

import {addItemToCart} from '../../actions/cart.actions' 
import { decrProductAvailability, sortProducts } from './../../actions/products.action';

export class ProductList extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  renderProducts() {

    const products = this.props.productsPage.products;

    return products.map((i, index) => {
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
    console.log(item);
    this.props.addItemToCart(item); 
    this.props.decrProductAvailability(item);  
  }

  onSorting(e) {
    console.log(e.target.value);
    this.props.sortProducts(e.target.value);
  }

  render() {
    return (<div className="App-product_list">
      <div> Sort by:
      <select onChange={ e => this.onSorting(e) }>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="availability">Availability</option>
      </select>
      </div>
      {this.renderProducts()}
    </div>);
  }
}

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addItemToCart(item)),
    decrProductAvailability: item => dispatch(decrProductAvailability(item)),
    sortProducts: sortKey => dispatch(sortProducts(sortKey))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);