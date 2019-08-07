import React, { Component } from 'react';
import './ProductPage.css';
import capitalize from '../../util/capitalize';
import arrayToLi from '../../util/arrayToLi';

class ProductPage extends Component {
    render () {
        return (
            <div>
                <div className='product-page'>
                    <h1>{capitalize(this.props.location.state.product.product_name)}</h1>
                    <h2>Usage</h2>
                    <p>why though</p>
                </div>
            </div>
        );
    }
}

export default ProductPage;