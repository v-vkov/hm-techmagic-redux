import React, {Component} from 'react';
import {connect} from 'react-redux';

import './cart.css';

import NextBtnModal from './../next-modal/index';

import {removeFromCart, addItemToCart, removeOne} from '../../actions/cart.actions';
import { incrProductAvailability,
        decrProductAvailability, 
        returnInitialAvailability } 
from './../../actions/products.action';



export class Cart extends Component {
  constructor(props) {
    super();
  }

  decreaseCount(item) {
    this.props.incrProductAvailability(item);
    this.props.removeOne(item);
  }

  increaseCount(item) {
    this.props.addItemToCart(item);
    this.props.decrProductAvailability(item);
  }

  removeFromCart(i) {
    this.props.removeFromCart(i);
    this.props.returnInitialAvailability(i)
  }

  onInputChange(e, item) {
    if (!e) {
      return;
    }
    let newAmount = e.target.value;
    newAmount > item.amount ? this.increaseCount(item) : this.decreaseCount(item);
  }


  renderProducts() {

    const allProductsinCart = this.props.cartPage.inCart.sort(({name:aName}, {name:bName}) => {
      return aName.localeCompare(bName);
    });;
  
    return allProductsinCart.map((i, index) => {
      const maxValue = i.available + i.amount - 1;

      return (
        <div className="cart-item" key={index}>
          <p>{i.name} </p>
            <input 
              type="number" 
              value={i.amount} 
              min="1" 
              max={maxValue} 
              onChange={(e)=> this.onInputChange(e, i)} 
            />
          <button onClick={() => this.removeFromCart(i)}>delete</button>
        </div>
      );
    });
  }

  render() {
    return ( <div className="App-cart">
      <div className="App-cart-list">
        {this.props.cartPage.inCart.length ? this.renderProducts() : 'Your cart is empty :('}
      </div>
      <NextBtnModal />
    </div>);
  }
}

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: item => dispatch(removeFromCart(item)),
    addItemToCart: item => dispatch(addItemToCart(item)),
    decrProductAvailability: item => dispatch(decrProductAvailability(item)),
    incrProductAvailability: item => dispatch(incrProductAvailability(item)),
    removeOne: item => dispatch(removeOne(item)),
    returnInitialAvailability: item => dispatch(returnInitialAvailability(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
