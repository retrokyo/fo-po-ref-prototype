function dbCall (term, location) {
        return fetch(`http://localhost:4000/results?term=${term}&loc=${location}`)
        .then((res) => {
            return res.json();
        })
        .then((jsonRes) => {
            if (jsonRes.products) {
                return jsonRes.products.map((product) => {
                    return product;
                });
            }
        });
}

export default dbCall;