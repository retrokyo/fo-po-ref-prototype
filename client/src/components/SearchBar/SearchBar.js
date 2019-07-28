import React, { Component } from 'react';
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
            <div className='SearchBar'>
                <div className='SearchBar-Fields'>
                    <input placeholder='What product are you looking for?' onChange={this.handleProductChange} />
                    <select defaultValue='' onChange={this.handleLocationChange}>
                        <option value=''>Where?</option>
                        <option value='JP'>JP</option>
                        <option value='Test2'>Test2</option>
                    </select>
                </div>
                <div className="SearchBar-Submit" onClick={this.handleSearch}>
                    <a>Let's go</a>
                </div> 
            </div>
        )
    }
}

export default SearchBar;