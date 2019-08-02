import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchResultPage.css';
import '../SearchBar/SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import logo_header from '../../logo_header.png';

class SearchResultPage extends Component {

    
      render() {
        return (
            <div className= 'search-result'>
                <div className='static-element'>
                    <div className='logo-header'>
                        <Link to='/'><img src={logo_header} alt='' /></Link>
                    </div>
                </div>
                    <SearchBar search={this.props.search} />
                </div>
        );
    };
}

export default SearchResultPage;