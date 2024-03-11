
function solve(number){
    const row = (num) => new Array(num).fill(num).join(' ');
    for (let i = 0; i < number; i++) {
        console.log(row(number));
    }
}

solve(7)