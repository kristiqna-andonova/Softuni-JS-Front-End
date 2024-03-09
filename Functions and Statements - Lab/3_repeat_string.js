function solve(text, times){
    let str = ''
    for (let i = 0; i < times; i++) {
        str += text
    }
    return str
}

console.log(solve("abc", 3));