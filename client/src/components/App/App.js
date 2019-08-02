import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SearchResultPage from '../SearchResultPage/SearchResultPage';
import ProductPage from '../ProductPage/ProductPage';
import ProductList from '../ProductList/ProductList';
import dbCall from '../../util/dbCall';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dbResponse: []
    }

    this.dbCall = this.dbCall.bind(this);
  }

  dbCall(term, location) {
    dbCall.search(term, location)
    .then((products) => {
      this.setState({ dbResponse: products });
    });
  }

  render() {
    return (
        <div className='app'>
          <SearchResultPage search={this.dbCall} />

          <Route path={`/product/*`} component={ProductPage} />
          <Route path='/results' render={(props) => (
            <ProductList {...props} products={this.state.dbResponse} />)
          }/>
        </div>
    );
  };
}

export default App;
