function solve(object){
    for(let key in object){
        console.log(`${key} -> ${object[key]}`);
    }
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)