function solve(arr){
    let adresses = {}

    for(let line of arr){
        const [name, address] = line.split(':')

        adresses[name] = address
    }

    let result = Object.entries(adresses).sort((a, b) => a[0].localeCompare(b[0])).forEach(([name, address]) => console.log(`${name} -> ${address}`)) 

    
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)