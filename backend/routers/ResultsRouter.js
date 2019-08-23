const resultsRouter = require('express').Router();

let Product = require('../models/productModel');

resultsRouter.get('/', (req, res, next) => {
    let term = req.query.term;
    let location = req.query.loc;

    Product.find(
        { 'product_name': `${term}`}, 
        (err, similarProduct) => {
            if (err) {
                console.log(err);
                res.sendStatus(404);
            } else if (similarProduct.length) {
                console.log(similarProduct);
                Product.aggregate([
                    { 
                        $match: {
                            $and: [
                                {'usage': { $in: similarProduct[0].usage }},
                                {'country_code': location.toLowerCase() }
                            ]
                        }
                    },
                    ],
                    (err, products) => {
                        if (err) {
                            console.log(err);
                            res.sendStatus(404);
                        } else {
                            console.log(products);
                            res.status(200).json({products: products});
                        };
                    }
                );
            } else {
                console.log('here we are');
                Product.find({
                    $and: [{
                        $or: [
                            { 'usage': `${term}`},
                            { 'ingredients': { $in: `${term}` }}
                        ]
                    },
                        { 'country_code': location }]
                    },
                    (err, products) => {
                        if (err) {
                            console.log(err);
                            res.sendStatus(404);
                        } else {
                            res.status(200).json({products: products});
                        };
                    }
                );
            };
        }
    );
});

module.exports = resultsRouter;