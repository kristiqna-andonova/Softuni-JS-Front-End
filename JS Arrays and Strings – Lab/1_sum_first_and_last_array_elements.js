function solve(numbers){
    let sum = numbers.shift() + numbers.pop();
    console.log(sum);
}

solve([20, 30, 40])