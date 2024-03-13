function solve(stringObject){
    let object = JSON.parse(stringObject);
    for(let key in object){
        console.log(`${key}: ${object[key]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')