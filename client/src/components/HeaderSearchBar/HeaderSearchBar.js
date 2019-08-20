import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { SearchBar } from '../SearchBar/SearchBar';
import { connect } from 'react-redux';
import { termChange, locChange } from '../../actions/actions'

import logo_header from '../../logo_header.png';
import './HeaderSearchBar.css';

class HeaderSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: this.props.term,
            loc: this.props.loc
        }
    }

    render () {
        return (
            <React.Fragment>
                <Helmet>
                  <title>FoPoRef Results: {/*Search Terms */}</title>
                  <meta 
                    name="description" 
                    content={ `Foreign Prodcut Reference Web Application Results for query'` + /*Search Term*/ + `'.` } 
                  />
                </Helmet>
            
                <div className='pure-u-1' style={headerBarStyle}>
                    <div className='pure-u-1 pure-u-md-1-8' >
                        <Link to='/' >
                            <img src={logo_header} alt='FoPoRef' style={miniLogoStyle} />
                        </Link>
                    </div>
                    <div className='pure-u-1 pure-u-md-3-8' >
                        <input autoFocus 
                            value={this.state.term} 
                            onChange={this.handleProductChange} 
                            onKeyPress={this.handleEnter}
                            style={searchBarHeaderStyle} 
                        />
                    </div>
                    <div className='pure-u-1-2 pure-u-md-1-8' onClick={this.handleSearch}>
                        <Link className='pure-button pure-button-primary' 
                            to={{
                                pathname: '/results',
                                search: `?term=${this.state.term}&loc=${this.state.loc}`,
                                hash: '',
                                state: { term: this.state.term, loc: this.state.loc }
                            }}
                            style={searchSubmitHeaderStyle}
                        >
                            Let's go
                        </Link>
                    </div> 
                    <div className='pure-u-1-2 pure-u-md-3-8 switch-header' >
                        <label className='loc-tag-header' style={langLabelLeftHeaderStyle}>JP</label>
                        <label className='lang-switch-header' style={switchHeaderStyles}>
                            <input type='checkbox' checked={this.props.loc === 'us' ? 'checked' : ''}
                                onChange={this.handleLocationChange}/>
                            <span className='slider-round-header'></span>
                        </label>
                        <label className='loc-tag-header' style={langLabelRightHeaderStyle}>US</label>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

// Styles
const headerBarStyle = {
    overflow: 'auto',
    Height: "3em",
    width: '100%',
    backgroundColor: 'lightgrey',
}

const miniLogoStyle = {
    height: '3em', 
    width: 'auto',
    objectFit: 'contain',
}

const searchBarHeaderStyle = {
    height: '2.1em', 
    width: '100%', 
    margin: '0.5em 0 0 0',
    objectFit: "contain",
}

const searchSubmitHeaderStyle = {
    margin: '0.5em auto 0 auto',
    backgroundColor: 'blueviolet',
}

const langLabelLeftHeaderStyle = {
    margin: '0.5em 0.5em auto auto',
    padding: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '0.2em',
}

const langLabelRightHeaderStyle = {
    margin: '0.5em 0.5em auto 0.5em',
    padding: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '0.2em',
}

const switchHeaderStyles = {
    margin: '0.5em 0 0 0',
}


// Wrapping Up
export default connect(
    null,
    {termChange, locChange},
)(HeaderSearchBar);