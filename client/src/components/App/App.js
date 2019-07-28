import React, { Component } from 'react';
import './App.css';
import '../SearchBar/SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import ProductList from '../ProductList/ProductList';
import dbCall from '../../util/dbCall';
import logo_header from '../../logo_header.png';


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
        <div className='App'>      
          <div className='Static-El'>
            <div className='Logo-Header'>
              <img src={logo_header} alt='' />
            </div>
            <div className="Search-Inputs">
              <SearchBar search={this.dbCall} />
            </div>
          </div>
          <div>
            <ProductList products={this.state.dbResponse}/>
          </div>
        </div>
    );
  };
}

export default App;
