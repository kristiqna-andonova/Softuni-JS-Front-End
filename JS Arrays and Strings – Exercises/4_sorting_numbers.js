function solve(arr){
    let sorted = arr.sort((a, b) =>{
        if (a > b){
            return 1
        } else if (a < b){
            return -1
        } else {
            return 0
        }
    });

    let result = [];
    while(sorted.length > 0){
        let first = sorted.shift()
        let end = sorted.pop()
        result.push(first, end);
    }

    return result
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])