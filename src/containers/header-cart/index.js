import React from 'react';
import './header-cart.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NewProductModal from '../newProductModal';


function HeaderCart (props) {

    const cartItems = props.cartPage.inCart;
    const count = cartItems.length > 0 ? cartItems.map((item) => item.amount).reduce((a, b) => a + b, 0) : 0;

    return ( <div className='Header-cart-wrapper'>
        <NewProductModal/>
        <Link to='/cart' className='Header-cart-link'>Cart {count}</Link>
    </div>
 )
}

const mapStateToProps = (state) => ({...state})


export default connect(mapStateToProps)(HeaderCart);