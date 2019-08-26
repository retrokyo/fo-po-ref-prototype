import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';
import { connect } from 'react-redux';
import { termChange, locChange } from '../../actions/actions';
import { searchState } from '../../util/searchState';

export class SearchBar extends Component {
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
        // this.setState({ term: e.target.value });
        this.props.termChange(e.target.value);
    }

    handleLocationChange(e) {
        if (e.target.checked === true) {
            //this.setState({ loc: 'us'});
            this.props.locChange('us')
        }

        else {
            //this.setState({ loc: 'jp' });
            this.props.locChange('jp');
        }
    }

    handleSearch(e) {
        //this.props.termChange(this.state.term);
        //this.props.locChange(this.state.loc);
        this.props.search(this.props.term, this.props.loc);

        e.preventDefault();
    }

    handleEnter(e) {
        if (e.key === 'Enter') {
            //this.props.termChange(this.state.term);
            //this.props.locChange(this.state.loc);
            this.props.search(this.props.term, this.props.loc);
            this.props.history.push(`/results?term=${this.props.term}&loc=${this.props.loc}`);
            e.preventDefault();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleEnter, false);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.loc !== this.props.loc && this.props.history.location.pathname === '/results') {
            //this.props.termChange(this.state.term);
            //this.props.locChange(this.state.loc);
            this.props.search(this.props.term, this.props.loc);
            this.props.history.push(`/results?term=${this.props.term}&loc=${this.props.loc}`);
        }
    }

    render () {
        return (
            <React.Fragment>
                <div className='pure-u-1' style={{height: '1em'}} />
                <div className='pure-u-1' >
                    <input autoFocus
                        defaultValue=''
                        placeholder='What product are you looking for?' 
                        onInput={this.handleProductChange} 
                        style={searchInputStyle}
                    />
                </div>
                <div className='pure-u-11-24 switch' style={switchDivStyle}>
                    <label style={langLabelStyle}>JP</label>
                    <label className='lang-switch'>
                        <input type='checkbox' onChange={this.handleLocationChange}/>
                        <span className='slider-round'></span>
                    </label>
                    <label style={langLabelStyle}>US</label>
                </div>
                <div className='pure-u-1-24' />
                <div className='pure-u-12-24' onClick={this.handleSearch}>
                    <Link className='pure-button pure-button-primary' style={submitButtonStyle}
                        to={{
                            pathname: '/results',
                            search: `?term=${this.props.term}&loc=${this.props.loc}`
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
    fontSize: '1.2em',
    height: '2.2em',
    width: '100%',
    margin: '0 auto 0.3em auto',
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

const submitButtonStyle = {
    width: '100%', 
    backgroundColor: 'blueviolet',
}

// Wrapping Up

// Attaching to Store
export default connect(
    searchState,
    {termChange, locChange},
)(SearchBar);