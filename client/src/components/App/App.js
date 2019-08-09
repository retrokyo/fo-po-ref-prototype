import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import 'purecss/build/pure-min.css';
import 'purecss/build/grids-responsive-min.css';
import SearchResultPage from '../SearchResultPage/SearchResultPage';
import ProductPage from '../ProductPage/ProductPage';
import ProductList from '../ProductList/ProductList';
import HeaderSearchBar from '../HeaderSearchBar/HeaderSearchBar';
import dbCall from '../../util/dbCall';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dbResponse: []
    }

    this.dbCall = this.dbCall.bind(this);
  }

  dbCall(term, loc) {
    dbCall.search(term, loc)
    .then((products) => {
      this.setState({ dbResponse: products });
    });
  }

  componentDidMount() {
    this.props.history.push('/')
  }

  render() {
    return (
        <div className='pure-g' style={appDivStyle}>
          <Switch>
            <Route exact path='/' render={(props) => (
              <SearchResultPage {...props} search={this.dbCall} />)} />

            <Route exact path='/(.+\/?|\??.*)' render={(props) => (
              <HeaderSearchBar {...props} 
                search={this.dbCall}
                term={this.props.location.state.term}
                loc={this.props.location.state.loc}
                />)} />
          </Switch>

          <Switch>
            <Route path={`/product/*`} render={(props) => (
              <ProductPage {...props} />)} />

            <Route path='/results' render={(props) => (
              <ProductList {...props} products={this.state.dbResponse} />)} />
            </Switch>
        </div>
    );
  };
}

// Styles
const appDivStyle = {
  backgroundColor: 'whitesmoke',
}

// Wrapping Up
const appWithRouter = withRouter(App);
export default appWithRouter;
