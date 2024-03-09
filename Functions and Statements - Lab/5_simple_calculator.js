function solve(nu1, num2, operation){
    switch(operation){
        case "multiply":
            return nu1 * num2;
        case "add":
            return nu1 + num2;
        case "subtract":
            return nu1 - num2;
        case "divide":
            return nu1 / num2;
    }
}

console.log(solve(5,5,"multiply"));