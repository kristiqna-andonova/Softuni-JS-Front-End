function solve(speed, area){
    let speedLimit = 0
    
    switch(area){
        case "motorway":
            speedLimit = 130
            break;
        case "interstate":
            speedLimit = 90
            break;
        case "residential":
            speedLimit = 20
            break;
        case "city":
            speedLimit = 50
            break;
    }
    let speedDiference = speed - speedLimit

    if(speedDiference <= 0){
        return console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
    let text = ""
    if (speedDiference <= 20){
        text = "speeding"
    } else if (speedDiference <=40){
        text = "excessive speeding"
    } else {
        text = "reckless driving"
    }

    console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - ${text}`)
}

solve(40, 'city')