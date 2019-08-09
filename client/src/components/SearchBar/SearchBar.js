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
            <React.Fragment>
                <div className='pure-u-1' style={{height: '1em'}} />
                <div className='pure-u-1' >
                    <input 
                        placeholder='What product are you looking for?' 
                        onChange={this.handleProductChange} 
                        onKeyPress={this.handleEnter} 
                        style={searchInputStyle}
                    />
                </div>
                <div className='pure-u-1' style={{height: '1em'}} />
                <div className='pure-u-11-24 switch' style={switchDivStyle}>
                    <label style={langLabelStyle}>JP</label>
                    <label className='lang-switch'>
                        <input type='checkbox' onChange={this.handleLocationChange}/>
                        <span className='slider-round'></span>
                    </label>
                    <label style={langLabelStyle}>US</label>
                </div>
                <div className='pure-u-1-24' style={{backgroundColor: 'lightgrey'}} />
                <div className='pure-u-12-24' onClick={this.handleSearch}>
                    <Link className='pure-button' style={{width: '100%',}}
                        to={{
                            pathname: '/results',
                            search: `?term=${this.state.term}&loc=${this.state.loc}`,
                            hash: '',
                            state: { term: this.state.term, loc: this.state.loc }
                        }}
                        >
                        Let's go
                    </Link>
                </div>
                <div className='pure-u-1' style={{height: '1em'}} />
            </React.Fragment>
        )
    }
}

// Styles
const searchInputStyle = {
    fontSize: '1em',
    height: '1em',
    width: '100%',
    margin: '0 auto 0 auto',
    padding: '0.32em',
    borderRadius: '0.2em',
}

const switchDivStyle = {
    margin: '0 auto 0 0',
}

const langLabelStyle = {
    margin: 'auto auto auto auto',
    padding: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '0.2em',
}

// Wrapping Up
export default SearchBar;