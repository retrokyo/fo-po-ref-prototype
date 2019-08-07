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
                    return product;
                });
            }
        });
    },
}

export default dbCall;