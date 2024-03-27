function solve(arr){
    let result = arr.toLocaleString().toLowerCase().split(' ');


    let words = result.reduce((result, word) => {result[word] = 0; return result}, {});
    
    
    for(const word of result){
        if(words.hasOwnProperty(word)) {
            words[word] += 1
        }
    }

    let finalResult = [];
    for(const word in words){
        if(words[word] % 2 !== 0){
            finalResult.push(word);
        }
    }

    console.log(finalResult.join(" "));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')