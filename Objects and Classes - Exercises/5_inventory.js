function solve(arr){
    let heroes = [];

    for(let line of arr){
        const [name, level, items] = line.split(' / ');
        const hero = {
            name,
            level: Number(level),
            items: items.split(', '),
        }

        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for(let hero of heroes){
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items.join(', ')}`)

    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )