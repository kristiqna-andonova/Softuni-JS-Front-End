function solve(arr){
    let words = arr.shift().split(' ').reduce((result, word) => {result[word] = 0; return result}, {});
    
    
    for(const word of arr){
        if(words.hasOwnProperty(word)) {
            words[word] += 1
        }
    }

    Object.entries(words)
    .sort((a, b) => b[1] - a[1])
    .forEach((word) => console.log(`${word[0]} - ${word[1]}`)
    )
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])