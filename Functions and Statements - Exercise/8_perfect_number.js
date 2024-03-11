function solve(number){
    const calculateSum = numbers => numbers.reduce((a, b) => a + b, 0);
    const isPerfect = number => calculateSum(getDivsors(number)) === number;

    if(isPerfect(number)){
        console.log('We have a perfect number!');
    }else{
        console.log('It\'s not so perfect.');
    }
    
    function getDivsors(number) {
        const arr = [];

        for(let i = number - 1; i >= 0; i--){
            if(number % i === 0){
                arr.push(i);
            }
        }
        
        return arr;
    }
}

solve(1236498)