function solve(num){
    let text = num.toString();
    let currentNum = text[0]
    let isSame = true
    let sum = Number(currentNum)

    for (let i = 1; i < text.length; i++){
        if (currentNum !== text[i]){
            isSame = false
        }

        currentNum = text[i]
        sum += Number(currentNum)
    }
    console.log(isSame)
    console.log(sum)
}

solve(22222)