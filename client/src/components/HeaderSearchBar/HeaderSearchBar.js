import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderSearchBar.css';
import SearchBar from '../SearchBar/SearchBar'
import logo_header from '../../logo_header.png';

class HeaderSearchBar extends SearchBar {
    constructor(props) {
        super(props);
        this.state = {
            term: this.props.term,
            loc: this.props.loc
        }
    }

    render () {
        return (
            <div className='search-bar-header'>
                <div className='logo-header'>
                        <Link to='/'><img src={logo_header} alt='' /></Link>
                </div>
                <div className='search-fields-header'>
                    <input value={this.state.term} onChange={this.handleProductChange} onKeyPress={this.handleEnter} />
                    <div className='switch-header'>
                        <label className='loc-tag-header'>JP</label>
                        <label className='lang-switch-header'>
                            <input type='checkbox' checked={this.state.loc === 'us' ? 'checked' : ''}
                                onChange={this.handleLocationChange}/>
                            <span className='slider-round-header'></span>
                        </label>
                        <label className='loc-tag-header'>US</label>
                    </div>
                </div>
                <div className='search-submit-header' onClick={this.handleSearch}>
                    <Link to={{
                        pathname: '/results',
                        search: `?term=${this.state.term}&loc=${this.state.loc}`,
                        hash: '',
                        state: { term: this.state.term, loc: this.state.loc }
                    }}>
                        Let's go
                    </Link>
                </div> 
                <span className='about'>About</span> {/* Placeholder */}
            </div>
        );
    }
}

export default HeaderSearchBar;