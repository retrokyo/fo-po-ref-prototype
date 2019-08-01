import React, { Component } from 'react';
import './SearchResultPage.css';
import '../SearchBar/SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import logo_header from '../../logo_header.png';

class SearchResultPage extends Component {

    
      render() {
        return (
            <div>
            <div className='static-element'>
                <div className='logo-header'>
                    <img src={logo_header} alt='' />
                </div>
            </div>
                <SearchBar search={this.props.search} />
            </div>
        );
    };
}

export default SearchResultPage;