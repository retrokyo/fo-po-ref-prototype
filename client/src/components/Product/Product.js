import React, { Component } from 'react';
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
            <div className="Product">
                <div className="Product-Image">
                    <img src={logo_square} alt="" />
                </div>
                <div className="Product-Text">
                <h2 className="Product-Name">{this.capitalize(this.props.name)}</h2>
                    <div className="Product-Info">
                        <div className="Product-Usage">
                        <h3>Usage</h3>
                        <ul>{this.arrayParser(this.props.usage)}</ul>
                        </div>
                        <div className="Product-Ingredients">
                            <h3>Ingredients</h3>
                            <ul>{this.arrayParser(this.props.ingredients)}</ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;