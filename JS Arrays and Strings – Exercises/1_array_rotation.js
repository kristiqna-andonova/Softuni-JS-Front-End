function solve(arr, rotation){
    for (i = 0; i < rotation; i++) {
        arr.push(arr.shift())
    }
    console.log(arr.join(' '));
}

solve([51, 47, 32, 61, 21], 2)