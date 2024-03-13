function solve(arr){
    let phoneBook = {}

    for(let line of arr){
        const [name, phone] = line.split(' ')

        phoneBook[name] = phone
    }

    for(let phone in phoneBook){
        console.log(`${phone} -> ${phoneBook[phone]}`);
    }
}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)