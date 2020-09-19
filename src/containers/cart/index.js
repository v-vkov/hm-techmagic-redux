import React, {Component} from 'react';
import {connect} from 'react-redux';

import './cart.css';

import {getCartItems, removeFromCart, addItemToCart, removeOne} from '../../actions/cart.actions';
import { incrProductAvailability, 
        decrProductAvailability, 
        returnInitialAvailability } 
from './../../actions/products.action';

export class Cart extends Component {
  constructor(props) {
    super(props);
  }

  decreaseCount(item) {
    console.log('we are trying to decrease count of: ');
    console.log(item);
    this.props.incrProductAvailability(item);
    this.props.removeOne(item);
  }

  increaseCount(item) {
    console.log('we are trying to increase count of: ');
    console.log(item);
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
    console.log(e);
    console.log('are we runing it on each change?');
    let newAmount = e.target.value;
    console.log(newAmount, item.amount);
    newAmount > item.amount ? this.increaseCount(item) : this.decreaseCount(item);
  
  }


  renderProducts() {

    const allProductsinCart = this.props.cartPage.inCart.sort(({name:aName}, {name:bName}) => {
      return aName.localeCompare(bName);
    });;
    console.log(allProductsinCart);
  
    return allProductsinCart.map((i, index) => {
      const item = i;
      const maxValue = i.available + i.amount - 1;
      console.log(i.available);
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
    return (<div className="App-cart">
      {this.props.cartPage.inCart.length ? this.renderProducts() : 'Your cart is empty :('}
    </div>);
  }
}

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => {
  return {
    getCartItems: () => dispatch(getCartItems()),
    removeFromCart: item => dispatch(removeFromCart(item)),
    addItemToCart: item => dispatch(addItemToCart(item)),
    decrProductAvailability: item => dispatch(decrProductAvailability(item)),
    incrProductAvailability: item => dispatch(incrProductAvailability(item)),
    removeOne: item => dispatch(removeOne(item)),
    returnInitialAvailability: item => dispatch(returnInitialAvailability(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
