import React, { Component } from 'react';
//import './ProductList.css';
import Product from '../Product/Product';


class ProductList extends Component {
    render() {
        return (
            <div className='pure-u-1'>
                <div className="product-list" styles={productListStyle0}>
                    {this.props.products.map((product) => {
                        return (<Product name={product.product_name}
                            product={product}
                            key={product.id} 
                            term={this.props.location.state.term}
                            loc={this.props.location.state.loc} 
                            />);
                    })}
                </div>
                <div className='pure-u-1' style={{height: '6.5em'}} />
            </div>
        );
    }
}

// Styles
const productListStyle0 = {

}

// Wrapping Up
export default ProductList;