function solve(count, type, day){
    let ticketPrice = 0

    if(day === "Friday"){
        switch(type){
            case "Students":
                ticketPrice = 8.45
                break;
            case "Business":
                ticketPrice = 10.90
                break;
            case "Regular":
                ticketPrice = 15
                break;
        }
    } else if(day === "Saturday"){
        switch(type){
            case "Students":
                ticketPrice = 9.80
                break;
            case "Business":
                ticketPrice = 15.60
                break;
            case "Regular":
                ticketPrice = 20
                break;
        }
    } else if(day === "Sunday"){
        switch(type){
            case "Students":
                ticketPrice = 10.46
                break;
            case "Business":
                ticketPrice = 16
                break;
            case "Regular":
                ticketPrice = 22.50
                break;
        }
    }

    let totalPrice = ticketPrice * count

    if(type==="Students" && count >= 30){
        totalPrice *= 0.85;
    } else if (type==="Business" && count >= 100){
        totalPrice -= ticketPrice * 10;
    } else if (type === "Regular" && count>=10 && count <= 20){
        totalPrice *= 0.95
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

