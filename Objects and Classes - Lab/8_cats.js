function solve(arr){
    let cats = [];

    class Cats {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }


    for(let line of arr){
        const [name, age] = line.split(' ')
        cats.push(new Cats(name, age));
    }

    for(let cat of cats){
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5'])