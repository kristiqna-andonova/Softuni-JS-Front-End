function solve(str, word){
    let words = str.split(" ");
    let count = 0
    for (let w of words){
        if(w == word){
            count += 1
        }
    }
    console.log(count)
}

solve('This is a word and it also is a sentence',
'is'
)