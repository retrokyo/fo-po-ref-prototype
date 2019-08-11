import React, { Component } from 'react';
//import './ProductPage.css';
import capitalize from '../../util/capitalize';
import arrayToLi from '../../util/arrayToLi';

class ProductPage extends Component {
    render () {
        return (
            <React.Fragment>
                <div className='pure-u-1 pure-u-md-1-3' />
                <div className='pure-u-1 pure-u-md-1-3 product-page' style={productPageStyle}>
                    <h1>{capitalize(this.props.location.state.product.product_name)}</h1>
                    <h2>Usage</h2>
                    <p>why though</p>
                </div>
                <div className='pure-u-1 pure-u-md-1-3' />
            </React.Fragment>
        );
    }
}

// Styles
const productPageStyle = {
    textAlign: 'center'
}

// Wrapping Up
export default ProductPage;