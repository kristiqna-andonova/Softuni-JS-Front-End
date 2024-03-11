function solve(char1, char2){
    let start = char1.charCodeAt(0);
    let end = char2.charCodeAt(0);
    let result = []
    if(start > end){
        start = char2.charCodeAt(0)
        end = char1.charCodeAt(0)   
    }
    
    for (let i = start +1; i < end; i++){
        result.push(String.fromCodePoint(i));
    }

    return result.join(" ");
}

console.log( solve("C", "#"));