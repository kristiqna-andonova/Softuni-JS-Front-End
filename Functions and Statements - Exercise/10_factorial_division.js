function solve(a, b){
    function factorials(num){
        let factorial = num
        for(let i = num - 1; i > 0; i--){
            factorial *= i
        }
        return factorial
    } 

    console.log((factorials(a) / factorials(b)).toFixed(2));
}
solve(5,2)
