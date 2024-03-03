function solve(text){
    const matches = text.matchAll(/[A-Z][a-z]*/g);
    const match = Array.from(matches).map(words => words[0]);
    console.log(match.join(', '))
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')