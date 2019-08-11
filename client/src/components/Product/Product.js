import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import logo_square from '../../logo_square.png';
import capitalize from '../../util/capitalize';
import arrayToLi from '../../util/arrayToLi';

class Product extends Component {
    constructor(props){
        super(props);

        this.arrayParser = this.arrayParser.bind(this);
        this.capitalize = this.capitalize.bind(this);
    }

    capitalize(str) {
        return capitalize(str);
    }

    arrayParser(array) {
        return arrayToLi(array);
    }

    render() {
        return (
            <React.Fragment>
                <div className='pure-u-1 pure-u-md-1-5' />
                <div className="pure-u-1 pure-u-md-3-5 product-card" style={productCardStyle} >
                    <div className="pure-u-1 pure-u-md-1-3" >
                        <img src={logo_square} alt={this.props.product.name} style={productImageStyle} />
                    </div>
                    <Link to={{
                        pathname: `/product/${this.props.product.name}`,
                        search: '',
                        hash: '',
                        state: {term: this.props.term, loc: this.props.loc, product: this.props.product}
                    }}>
                        <div className="pure-u-1 pure-u-md-2-3 product-text" style={productTextStyle}>
                            <h2 className="pure-u-1 product-name">{this.capitalize(this.props.product.product_name)}</h2>
                            <div className="pure-u-1 product-info">
                                <div className="pure-u-1 pure-u-md-1-2 product-usage">
                                    <h3>Usage</h3>
                                    <ul>{this.arrayParser(this.props.product.usage)}</ul>
                                </div>
                                <div className="pure-u-1 pure-u-md-1-2 product-ingredients">
                                    <h3>Ingredients</h3>
                                    <ul>{this.arrayParser(this.props.product.ingredients)}</ul>
                                </div>
                                { /*<div className="product-description">
                                    <h3>Description</h3>
                                    <ul>{this.arrayParser(this.props.description)}</ul>
                                </div> */ }
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='pure-u-1 pure-u-md-4-24' />
            </React.Fragment>
        );
    }
}

// Styles
const productCardStyle = {
    backgroundColor: 'white',
    margin: '1.5em 0 0 0',
    borderStyle: 'solid',
    borderWidth: '2px 1px 2px 1px',
    borderRadius: '0.3em',
    boxShadow: '0 0 1px',
    boxShadowColor: 'lightgrey',
}

const productImageStyle = {
    padding: '1em',
    height: 'auto',
    width: '100%',
    objectFit: 'contain',
}

const productTextStyle = {
    padding: '1em',
}

// Wrapping Up
export default Product;