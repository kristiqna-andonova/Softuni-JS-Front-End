function solve(num){
    if (0<=num && num<=2){
        console.log(`baby`)
    } else if (3<=num && num<=13){
        console.log(`child`)
    } else if(14<=num && num<=19){
        console.log(`teenager`)
    } else if(20<=num && num<=65){
        console.log(`adult`)
    } else if(num>=66){
        console.log(`elder`)
    } else{
        console.log(`out of bounds`)
    }
}

