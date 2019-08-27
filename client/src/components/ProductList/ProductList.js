import React, { Component } from 'react';
//import './ProductList.css';
import Product from '../Product/Product';
import { connect } from 'react-redux';
import { searchStateMap } from '../../redux/util/searchStateMap';


class ProductList extends Component {
    render() {
        return (
            <div className='pure-u-1'>
                <div className="product-list" styles={productListStyle0}>
                    {this.props.products.map((product) => {
                        return (<Product name={product.product_name}
                            product={product}
                            key={product.id} 
                            term={this.props.term}
                            loc={this.props.loc} 
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
export default connect(
    searchStateMap,
    null,
    )(ProductList);