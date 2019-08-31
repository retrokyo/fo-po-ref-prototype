import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../../../node_modules/purecss/build/pure-min.css';
import '../../../node_modules/purecss/build/grids-responsive-min.css';
import SearchResultPage from '../SearchResultPage/SearchResultPage';
import ProductPage from '../ProductPage/ProductPage';
import ProductList from '../ProductList/ProductList';
import HeaderSearchBar from '../HeaderSearchBar/HeaderSearchBar';
import Footer from '../Footer/Footer';
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
      <React.Fragment>
        <div className='pure-g' style={appDivStyle}>
          <Switch>
            <Route exact path='/' render={(props) => (
              <React.Fragment>
                <Helmet>
                  <title>FoPoRef</title>
                  <meta 
                    name="description" 
                    content="Foreign Product Reference Web Application" 
                  />
                </Helmet>
                <SearchResultPage {...props} search={this.dbCall} />
              </React.Fragment>
            )}/>
            <Route exact path='/(.+\/?|\??.*)' render={(props) => (
              <React.Fragment>
                <Helmet>
                  <title>FoPoRef Results: {this.props.location.state.term}</title>
                  <meta 
                    name="description" 
                    content={ `Foreign Prodcut Reference Web Application Results for query'` + this.props.location.state.term + `'.` } 
                  />
                </Helmet>
                <HeaderSearchBar {...props} 
                  search={this.dbCall}
                  term={this.props.location.state.term}
                  loc={this.props.location.state.loc}
                />
              </React.Fragment>
            )}/>
          </Switch>

          <Switch>
            <Route path={`/product/*`} render={(props) => (
              <React.Fragment>
                <Helmet>
                  <title>FoPoRef found: { this.props.location.state.product.product_name }</title>
                  <meta 
                    name="description" 
                    content={`Foreign Product Reference Web Application providing information about'` + this.props.location.state.product.product_name + `'.` } 
                  />
                </Helmet>
                <ProductPage {...props} />
              </React.Fragment>
            )}/>

            <Route path='/results' render={(props) => (
              <React.Fragment>
                <Helmet>
                  <title>FoPoRef results: { this.props.location.state.term }</title>
                  <meta 
                    name="description" 
                    content={`Placeholder` /* Not really in use yet so I don't know what to put for the description. */ } 
                  />
                </Helmet>
                <ProductList {...props} products={this.state.dbResponse} />
              </React.Fragment>
            )}/>
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
export default appWithRouter;
