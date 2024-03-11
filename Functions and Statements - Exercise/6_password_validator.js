function solve(password){
    const isValidLength = password => password.length >=6 && password.length <= 10;
    const isValid = password => /^[a-zA-Z0-9]+$/.test(password);
    const isStrong = password => password.split('').filter(character => Number.isInteger(Number(character))).length >= 2;

    let valid = true

    if(!isValidLength(password)){
        valid = false
        console.log("Password must be between 6 and 10 characters")
    }

    if(!isValid(password)){
        valid = false
        console.log("Password must consist only of letters and digits");
    }

    if(!isStrong(password)){
        valid = false
        console.log("Password must have at least 2 digits");
    }

    if(valid){
        console.log("Password is valid");
    }
}

solve('logIn')