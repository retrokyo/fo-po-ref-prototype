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
            <div className="product-card">
                <div className="product-image">
                    <img src={logo_square} alt="" />
                </div>
                <Link to={{
                    pathname: `/product/${this.props.product.name}`,
                    search: '',
                    hash: '',
                    state: {term: this.props.term, loc: this.props.loc, product: this.props.product}
                }}>
                    <div className="product-text">
                    <h2 className="product-name">{this.capitalize(this.props.product.product_name)}</h2>
                        <div className="product-info">
                            <div className="product-usage">
                                <h3>Usage</h3>
                                <ul>{this.arrayParser(this.props.product.usage)}</ul>
                            </div>
                            <div className="product-ingredients">
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
        );
    }
}

export default Product;