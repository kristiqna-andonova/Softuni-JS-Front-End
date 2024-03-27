function solve(arr){
    let movies = []

    for(const line of arr){
        const add = 'addMovie'
        const direct = 'directedBy'
        const date = 'onDate'

        if(line.includes(add)){
            const movie = {
                name: line.substring(add.length + 1)
            }

            movies.push(movie)

        } else if(line.includes(direct)){
            const [name, director] = line.split(` ${direct} `)
            const movie = movies.find(m => m.name === name)

            if(movie){
                movie.director = director
            }

        } else if(line.includes(date)){
            const [name, onDate] = line.split(` ${date} `)
            const movie = movies.find(m => m.name === name)

            if(movie){
                movie.date = onDate
            }
        }
    }

    for(let movie of movies.filter(m => m.date && m.director)){
        console.log(JSON.stringify(movie));
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )