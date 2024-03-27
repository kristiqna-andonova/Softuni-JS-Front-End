function solve(arr){
    let table = [];
    for(let line of arr){
        const [town, latitude, longitude] = line.split(' | ');
        table.push({
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2), 
        })
    }

    for(let line of table){
        console.log(line);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)