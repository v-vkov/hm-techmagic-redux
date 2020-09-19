import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Components
import Header from './components/header';
import SideBar from './components/sidebar';
import Cart from './containers/cart';
import ProductList from './containers/product-list';


// CSS
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {activeComponent: 'product-list'};
    // this.changeNavigation = this.changeNavigation.bind(this);
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-wrapper">
          <SideBar/>
          <Switch>
          <Route exact path="/">
            <Redirect to='/home'/>
          </Route>
          <Route path="/home">
            <ProductList />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        </div>
      </div>
    );
  }
}