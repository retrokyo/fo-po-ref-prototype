const dbCall = {
    search: (term, location) => {
        return fetch(`http://localhost:4000/results?term=${term}&loc=${location}`)
        .then((res) => {
            console.log(JSON.stringify(res));
            return res.json();
        })
        .then((jsonRes) => {
            if (jsonRes.products) {
                console.log(JSON.stringify(jsonRes));
                return jsonRes.products.map((product) => {
                    return ({
                        id: product._id,
                        name: product.product_name,
                        usage: product.usage,
                        ingredients: product.ingredients
                    });
                });
            }
        });
    },
}

export default dbCall;