function solve(number){
    let string = number.toString().split("");
    let oddSum = 0
    let evenSum = 0
    for(let num of string){
        if(Number(num) % 2 == 0){
            evenSum += Number(num)
        } else{
            oddSum += Number(num)
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}

console.log(solve( 1000435));

