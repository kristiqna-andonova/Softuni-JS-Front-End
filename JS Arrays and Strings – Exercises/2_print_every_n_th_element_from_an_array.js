function solve(arr, step){
    let result = []
    for (let  i = 0; i < arr.length; i+=step){
        result.push(arr[i])
    }

    return result
}

console.log(solve(['dsa',
'asd', 
'test', 
'tset'], 
2
))