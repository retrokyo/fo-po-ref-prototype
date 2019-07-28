const resultsRouter = require('express').Router();

let Product = require('../models/productModel');

resultsRouter.get('/', (req, res, next) => {
    let term = req.query.term;
    let location = req.query.loc;
    
    Product.find(
        { $and: 
            [{ $or: [{'product_name': `${term}`}, {'usage': { $in: [`${term}`] }}, {'ingredients': { $in: [`${term}`] }} ]},
            {'country_code': location}]
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
});

module.exports = resultsRouter;