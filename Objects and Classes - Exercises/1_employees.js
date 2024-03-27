function solve(arr){
    let names = [];
    for(const name of arr){
        names[name] = name.length;
    }

    for(let name in names){
        console.log(`Name: ${name} -- Personal Number: ${names[name]}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )