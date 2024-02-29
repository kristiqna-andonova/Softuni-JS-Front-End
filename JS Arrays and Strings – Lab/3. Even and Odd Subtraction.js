function solve(numbers){
    let even = 0
    let odd = 0
    for(let i = 0; i < numbers.length; i++){

        if(numbers[i] % 2 == 0){
            even += numbers[i]
        } else {
            odd += numbers[i]
        }
    }

    console.log(even - odd)
}

solve([1,2,3,4,5,6])