function solve(template){
    const matches = template.matchAll(/\#([A-Za-z]+)/g);
    for (let match of matches) {
        console.log(match[1])
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')