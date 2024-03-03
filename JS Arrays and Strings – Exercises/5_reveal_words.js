function solve(wordsInput, template) {
    const words = wordsInput.split(', ');
    const matches = template.matchAll(/\*+/g);
    for (const match of matches){
        const word = words.find(w => w.length === match[0].length);
        template = template.replace(match[0], word)
    }

    console.log(template);
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)