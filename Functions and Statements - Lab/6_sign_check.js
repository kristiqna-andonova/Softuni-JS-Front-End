function solve(a, b, c){
    let negativeNumbers = 0
    if(a < 0){
        negativeNumbers += 1
    }
    if (b < 0){
        negativeNumbers += 1
    }
    if (c < 0){
        negativeNumbers += 1
    }

    if (negativeNumbers === 1 || negativeNumbers === 3){
        return "Negative"
    } else {
        return "Positive"
    }
}

console.log(solve(-6,
    -12,
     14
    ));
