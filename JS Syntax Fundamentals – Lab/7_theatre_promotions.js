function solve(d, a){
    if (d == "Weekday"){
        if(0<=Number(a) && a <= 18){
            console.log(`$12`)
        } else if (18<Number(a) && a <= 64){
            console.log(`$18`)
        } else if (64<=Number(a) && a <= 122){
            console.log(`$12`)
        }else{
            console.log(`Error!`)
        }
        
    }
    
    if (d == "Weekend"){
        if(0<=Number(a) && a <= 18){
            console.log(`$15`)
        } else if (18<Number(a) && a <= 64){
            console.log(`$20`)
        } else if (64<=Number(a) && a <= 122){
            console.log(`$15`)
        }else{
            console.log(`Error!`)
        }
    }

    if (d == "Holiday"){
        if(0<=Number(a) && a <= 18){
            console.log(`$5`)
        } else if (18<Number(a) && a <= 64){
            console.log(`$12`)
        } else if (64<=Number(a) && a <= 122){
            console.log(`$10`)
        }else{
            console.log(`Error!`)
        }
    } 

    
}


solve('Weekday', -42)