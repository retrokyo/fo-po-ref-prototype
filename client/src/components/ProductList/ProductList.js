import React, { Component } from 'react';
import './ProductList.css';
import Product from '../Product/Product';


class ProductList extends Component {
    render() {
        return (
            <div className="ProductList">
                {this.props.products.map((product) => {
                    return <Product name={product.name} usage={product.usage} ingredients ={product.ingredients} key={product.id} />
                })}
            </div>
        );
    }
}

export default ProductList;