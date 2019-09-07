//React, React-Router, React-Helmet
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

//Component import
import SearchBar from '../SearchBar/SearchBar';

//Style imports
import logo_header from '../../logo_header.png';

class SearchResultPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                  <title>FoPoRef</title>
                  <meta 
                    name="description" 
                    content="Foreign Product Reference Web Application" 
                  />
                </Helmet>
                <div className='pure-u-1' style={{height: '1em'}} />
                <div className='pure-u-md-1-3' />
                <div className='pure-u-1 pure-u-md-1-3' >
                    <Link to='/' >
                        <img src={logo_header} alt='FoPoRef' style={mainLogoImgStyle} />
                    </Link>
                    <SearchBar history={this.props.history} />
                </div>
                <div className='pure-u-md-1-3' />
            </React.Fragment>
        );
    };
}

// Styles
const mainLogoImgStyle = {
    padding: '1%',
    height: 'auto',
    width: '98%', 
    objectFit: 'contain',
}

// Wrapping Up
export default SearchResultPage;