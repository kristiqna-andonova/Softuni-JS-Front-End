function solve(arr){
    let meetings = {};

    for(const line of arr){
        const [ weekday, name ] = line.split(' ');

        if(meetings[weekday]){
            console.log(`Conflict on ${weekday}!`);
        } else{
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for(let key in meetings){
        console.log(`${key} -> ${meetings[key]}`);
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)