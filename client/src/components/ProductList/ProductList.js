//React
import React, { Component } from 'react';

//Components
import Product from '../Product/Product';

//React-Redux
import { connect } from 'react-redux';
import { mapStateToProps } from '../../redux/util/mapStateToProps';


class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}

// Styles
const productListStyle0 = {

}


// Wrapping Up
export default connect(
    mapStateToProps,
    null,
    )(ProductList);