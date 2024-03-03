function solve(arr){
    let result = arr.sort((a, b) =>{
        if (a.toLowerCase() > b.toLowerCase()){
            return 1
        } else if (a.toLowerCase() < b.toLowerCase()){
            return -1
        } else {
            return 0
        }
    });
    for (let i = 0; i < result.length; i++){
        console.log(`${[i + 1]}.${result[i]}`);
    }
}

