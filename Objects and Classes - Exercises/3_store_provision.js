function solve(arr, delivery){
    let store = {}
    for(let i=0; i<arr.length; i+=2){
        const key = arr[i]
        const value = Number(arr[i+1])
        store[key] = value
        }
    
    for(let i=0; i<delivery.length; i+=2){
        const key = delivery[i]
        const value = Number(delivery[i+1])
        if(!store[key]){
            store[key] = 0
        }

        store[key] += value
    }

    for(let key in store){
        console.log(`${key} -> ${store[key]}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )