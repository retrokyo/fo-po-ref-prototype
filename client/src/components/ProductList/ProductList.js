import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './ProductList.css';
import Product from '../Product/Product';
import ProductPage from '../ProductPage/ProductPage';


class ProductList extends Component {
    render() {
        return (
            <div className="product-list">
                {this.props.products.map((product) => {
                    return <Product name={product.name} usage={product.usage} ingredients ={product.ingredients} key={product.id} />
                })}
            </div>
        );
    }
}

export default ProductList;