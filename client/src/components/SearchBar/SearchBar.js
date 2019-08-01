import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: ''
        }

        this.handleProductChange = this.handleProductChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleProductChange(e) {
        this.setState({ term: e.target.value });
    }

    handleLocationChange(e) {
        this.setState({ location: e.target.value });
    }

    handleSearch(e) {
        this.props.search(this.state.term, this.state.location);

        e.preventDefault();
    }

    render () {
        return (
            <div className='search-bar'>
                <div className='search-fields'>
                    <input placeholder='What product are you looking for?' onChange={this.handleProductChange} />
                    <select defaultValue='' onChange={this.handleLocationChange}>
                        <option value=''>Where?</option>
                        <option value='jp'>JP</option>
                        <option value='us'>US</option>
                    </select>
                </div>
                <div className='search-submit' onClick={this.handleSearch}>
                    <Link to={{
                        pathname: '/results',
                        search: `?term=${this.state.term}&loc=${this.state.location}`,
                        hash: '#helpful',
                        state: { App: true}
                    }}>
                        Let's go
                    </Link>
                </div> 
            </div>
        )
    }
}

export default SearchBar;