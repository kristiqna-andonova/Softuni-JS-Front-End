function solve(arr){
    const parking = new Set();

    for(let line of arr){
        const [command, car] = line.split(', ')

        command === 'IN'
            ? parking.add(car)
            : parking.delete(car);
    }

    Array.from(parking.values())
        .sort((a, b) => a.localeCompare(b))
        .forEach(car => console.log(car));

 }

 solve(['IN, CA2844AA',
 'IN, CA1234TA',
 'OUT, CA2844AA',
 'IN, CA9999TT',
 'IN, CA2866HI',
 'OUT, CA1234TA',
 'IN, CA2844AA',
 'OUT, CA2866HI',
 'IN, CA9876HH',
 'IN, CA2822UU']
 )