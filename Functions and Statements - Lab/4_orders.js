function solve(product, count){
    function getPrice(product){
        switch(product){
            case "coffee":
                return 1.50;
            case "water":
                return 1;
            case "coke":
                return 1.40;
            case "snacks":
                return 2.00;
        }
    }

    return (getPrice(product) * count).toFixed(2);
}

console.log(solve("water", 5));