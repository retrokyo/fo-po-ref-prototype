import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            loc: 'jp'
        }

        this.handleProductChange = this.handleProductChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleProductChange(e) {
        this.setState({ term: e.target.value });
    }

    handleLocationChange(e) {
        if (e.target.checked === true) {
            this.setState({ loc: 'us'})
        }

        else {
            this.setState({ loc: 'jp' })
        }
    }

    handleSearch(e) {
        this.props.search(this.state.term, this.state.loc);

        e.preventDefault();
    }

    handleEnter(e) {
        if (e.key === 'Enter') {
            this.props.search(this.state.term, this.state.loc);
            this.props.history.push(`/results?term=${this.state.term}&loc=${this.state.loc}`,
                { term: this.state.term, loc: this.state.loc });
            e.preventDefault();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.loc !== this.state.loc && this.props.history.location.pathname === '/results') {
            this.props.search(this.state.term, this.state.loc);
            this.props.history.push(`/results?term=${this.state.term}&loc=${this.state.loc}`,
                { term: this.state.term, loc: this.state.loc });
        }
    }

    render () {
        return (
            <div className='search-bar'>
                <div className='search-fields'>
                    <input placeholder='What product are you looking for?' onChange={this.handleProductChange} onKeyPress={this.handleEnter} />
                    <div className='switch'>
                        <label className='loc-tag'>JP</label>
                        <label className='lang-switch'>
                            <input type='checkbox' onChange={this.handleLocationChange}/>
                            <span className='slider-round'></span>
                        </label>
                        <label className='loc-tag'>US</label>
                    </div>
                </div>
                <div className='search-submit' onClick={this.handleSearch}>
                    <Link to={{
                        pathname: '/results',
                        search: `?term=${this.state.term}&loc=${this.state.loc}`,
                        hash: '',
                        state: { term: this.state.term, loc: this.state.loc }
                    }}>
                        Let's go
                    </Link>
                </div> 
            </div>
        )
    }
}

export default SearchBar;