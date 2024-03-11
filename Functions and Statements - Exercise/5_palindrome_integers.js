function solve(arr){
    for (let num of arr){
        console.log(num.toString() === num.toString().split("").reverse().join(""));
    }
}

solve([123,323,421,121])