// React and React Router
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
// PureCSS Styles
import '../../../node_modules/purecss/build/pure-min.css';
import '../../../node_modules/purecss/build/grids-responsive-min.css';
// Components
import SearchResultPage from '../SearchResultPage/SearchResultPage';
import ProductPage from '../ProductPage/ProductPage';
import ProductList from '../ProductList/ProductList';
import HeaderSearchBar from '../HeaderSearchBar/HeaderSearchBar';
import Footer from '../Footer/Footer';
// Utilities
import dbCall from '../../util/dbCall';
// Redux
import { connect } from 'react-redux';
import { searchStateMap } from '../../redux/util/searchStateMap';

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
      <React.Fragment>
        <div className='pure-g' style={appDivStyle}>
          <Switch>
            <Route exact path='/' render={(props) => (
              <SearchResultPage {...props} search={this.dbCall} />)} />
            <Route exact path='/(.+\/?|\??.*)' render={(props) => (
              <HeaderSearchBar {...props} 
                search={this.dbCall} />)} 
              />
          </Switch>

          <Switch>
            <Route path={`/product/*`} render={(props) => (
              <ProductPage {...props} />)} />

            <Route path='/results' render={(props) => (
              <ProductList {...props} products={this.state.dbResponse} />)} />
            </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  };
}

// Styles
const appDivStyle = {
  backgroundColor: 'whitesmoke',
}

// Wrapping Up
const appWithRouter = withRouter(App);
export default connect(
  searchStateMap,
  null,
  )(appWithRouter);
