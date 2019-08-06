import React, { Component } from 'react';
import './ProductList.css';
import Product from '../Product/Product';


class ProductList extends Component {
    render() {
        return (
            <div>
                <div className="product-list">
                    {this.props.products.map((product) => {
                        return (<Product name={product.name}
                            usage={product.usage}
                            ingredients ={product.ingredients}
                            key={product.id} 
                            term={this.props.location.state.term}
                            loc={this.props.location.state.loc} 
                            />);
                    })}
                </div>
            </div>
        );
    }
}

export default ProductList;