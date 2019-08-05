import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import logo_square from '../../logo_square.png';

class Product extends Component {
    constructor(props){
        super(props);

        this.arrayParser = this.arrayParser.bind(this);
        this.capitalize = this.capitalize.bind(this);
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    arrayParser(array) {
        return array.map((item) => {
            return <li>{this.capitalize(item)}</li>
        });
    }

    render() {
        return (
            <div className="product-card">
                <div className="product-image">
                    <img src={logo_square} alt="" />
                </div>
                <Link to={`/product/${this.props.name}`}>
                    <div className="product-text">
                    <h2 className="product-name">{this.capitalize(this.props.name)}</h2>
                        <div className="product-info">
                            <div className="product-usage">
                                <h3>Usage</h3>
                                <ul>{this.arrayParser(this.props.usage)}</ul>
                            </div>
                            <div className="product-ingredients">
                                <h3>Ingredients</h3>
                                <ul>{this.arrayParser(this.props.ingredients)}</ul>
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