import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './SearchResultPage.css';
import '../SearchBar/SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import logo_header from '../../logo_header.png';

class SearchResultPageWithRouter extends Component {

    render() {
        const { match, location, history } = this.props

        return (
            <div className= 'search-result'>
                <div className='static-element'>
                    <div className='logo-header'>
                        <Link to='/'><img src={logo_header} alt='' /></Link>
                    </div>
                </div>
                    <SearchBar search={this.props.search} history={this.props.history} />
                </div>
        );
    };
}

const SearchResultPage = withRouter(SearchResultPageWithRouter);

export default SearchResultPage;