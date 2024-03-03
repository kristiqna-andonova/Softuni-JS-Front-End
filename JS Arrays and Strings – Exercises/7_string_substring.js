function solve(word, pattern){
    const text = pattern.toLowerCase().split(' ');
    const isIncluded = text.includes(word.toLowerCase());

    if (isIncluded){
        return word;
    } else {
        return `${word} not found!`
    }
}

console.log(solve('javascript',
'JavaScript is the best programming language'
))