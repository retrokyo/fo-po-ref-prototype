import React, { Component } from 'react';
//import './ProductList.css';
import Product from '../Product/Product';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../redux/util/mapStateToProps';


class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>FoPoRef results: { /*Search Term*/ }</title>
                    <meta 
                        name="description" 
                        content={`Placeholder` /* Not really in use yet so I don't know what to put for the description. */ }/>
                </Helmet>
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