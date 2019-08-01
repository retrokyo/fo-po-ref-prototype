import React, { Component } from 'react';
import './ProductPage.css';

class ProductPage extends Component {
    render () {
        return (
            <div>
                <p>{JSON.stringify(this.props)}</p>
                <p>why though</p>
            </div>
        );
    }
}

export default ProductPage;