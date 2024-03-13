function solve(name, lastName, hairColor){
    let object = {
        name,
        lastName,
        hairColor,
    }

    console.log(JSON.stringify(object));
} 

solve('George', 'Jones', 'Brown')